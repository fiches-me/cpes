---
title: "SMART: ARCHITECTURE"
---
# Architecture – Smart API

Ce document décrit le rôle et l'usage de chaque fichier du projet.

---

## Vue d'ensemble

```
rcs-core/
├── api/                    → Module public, la seule dépendance des providers
└── core/                   → Plugin Velocity (Smart lui-même)
    ├── SmartProvider.java
    ├── DefaultSmartApi.java
    ├── InMemoryProviderRegistry.java
    ├── NoOpEventPublisher.java
    ├── config/
    ├── listeners/
    ├── loggers/
    └── utils/
provider-example/           → Implémentation de référence (pas de vrai HTTP)
```

---

## Module `api` — Contrats publics

> Les providers n'ont besoin que de ce module comme dépendance.

---

### `SmartApi`

**Interface principale du plugin Smart.**

Expose les deux opérations métier :

| Méthode | Description |
|---|---|
| `createServer(ProvisionRequest)` | Demande la création d'un serveur |
| `deleteServer(DeleteRequest)` | Demande la suppression d'un serveur |
| `providerRegistry()` | Accès au registre pour enregistrer/lire les providers |

Les deux méthodes retournent un `CompletableFuture<ProvisionResult>` : l'appel est asynchrone et n'est jamais bloquant pour le thread principal de Velocity.

---

### `SmartApiAccess`

**Point d'entrée global pour les plugins providers.**

C'est le seul moyen d'accéder à l'API sans dépendre du module `core`.

```java
// Enregistrer son provider au démarrage
SmartApiAccess.require().providerRegistry().register(new MyProviderClient());

// Accès optionnel (si Smart peut ne pas être présent)
SmartApiAccess.get().ifPresent(api -> ...);
```

| Méthode | Description |
|---|---|
| `set(SmartApi)` | Appelé **uniquement** par Smart au démarrage, jamais par un provider |
| `get()` | Retourne un `Optional` — à utiliser si Smart peut être absent |
| `require()` | Retourne l'API ou lance une exception — à utiliser si Smart est requis |

---

### `ProviderClient`

**Interface à implémenter par chaque plugin provider.**

```java
public class PterodactylProviderClient implements ProviderClient {
    @Override public String id() { return "pterodactyl"; }

    @Override
    public boolean supportsCreate(ProvisionRequest request) {
        // Retourner false pour refuser une famille ou un template
        return true;
    }

    @Override
    public CompletableFuture<ProvisionResult> createServer(ProvisionRequest request) {
        return CompletableFuture.supplyAsync(() -> {
            // Appel HTTP à Pterodactyl ici
            return ProvisionResult.success(id(), "ext-id-123", "ok");
        });
    }
    // ...
}
```

| Méthode | Description |
|---|---|
| `id()` | Identifiant unique du provider, doit correspondre à l'`id` dans `providers.yml` |
| `priority()` | Priorité de sélection (plus petit = prioritaire). Défaut : `100` |
| `supportsCreate(request)` | Le provider peut-il créer ce type de serveur ? |
| `supportsDelete(request)` | Le provider peut-il supprimer ce serveur ? |
| `createServer(request)` | Effectue la création (HTTP, CLI, etc.) |
| `deleteServer(request)` | Effectue la suppression |

---

### `ProviderRegistry`

**Interface du registre de providers.**

Implémentée par `InMemoryProviderRegistry` dans le `core`. Les providers n'implémentent pas cette interface, ils interagissent avec elle via `SmartApiAccess`.

| Méthode | Description |
|---|---|
| `register(ProviderClient)` | Enregistre un provider |
| `unregister(String id)` | Retire un provider |
| `findById(String id)` | Recherche un provider par son identifiant exact |
| `selectForCreate(request)` | Choisit le meilleur provider pour créer |
| `selectForDelete(request)` | Choisit le meilleur provider pour supprimer |
| `all()` | Retourne tous les providers enregistrés |

---

### `ProvisionRequest`

**DTO pour une demande de création de serveur.**

Construit par Smart (`OnServerPreJoin`) et passé au provider.

| Champ | Description |
|---|---|
| `preferredProviderId` | Si non null, force l'utilisation de ce provider (vient de `providers.yml`) |
| `family` | Identifiant de la famille RustyConnector |
| `template` | Template de serveur à utiliser (ex: `"paper-1.21"`) |
| `memoryMb` | RAM demandée (vient du metadata `smart.ram` de la famille) |
| `metadata` | Données supplémentaires libres (ex: `familyDisplayName`) |

---

### `DeleteRequest`

**DTO pour une demande de suppression de serveur.**

| Champ | Description |
|---|---|
| `preferredProviderId` | Si non null, force un provider spécifique |
| `family` | Famille du serveur à supprimer |
| `externalServerId` | ID du serveur côté provider (ex: ID Pterodactyl) |

---

### `ProvisionResult`

**DTO retourné par les méthodes `createServer` / `deleteServer`.**

```java
// Construire un résultat réussi
ProvisionResult.success(id(), "ext-server-id", "Server started");

// Construire un échec définitif
ProvisionResult.failure(OperationStatus.FAILURE, id(), "Panel unreachable");

// Construire un échec retryable
ProvisionResult.failure(OperationStatus.RETRYABLE_FAILURE, id(), "Timeout");
```

| Champ | Description |
|---|---|
| `status` | `SUCCESS`, `FAILURE`, `RETRYABLE_FAILURE` |
| `providerId` | Identifiant du provider qui a traité la demande |
| `externalServerId` | ID du serveur créé (null en cas d'échec) |
| `message` | Message humain (log, debug) |
| `isSuccess()` | Raccourci : `status == SUCCESS` |

---

### `OperationStatus`

**Enum du statut d'une opération.**

| Valeur | Signification |
|---|---|
| `SUCCESS` | Opération réussie |
| `FAILURE` | Échec définitif (ne pas réessayer) |
| `RETRYABLE_FAILURE` | Échec temporaire (timeout, réseau, etc.) |

---

### `SmartEventPublisher`

**Interface optionnelle pour observer les opérations.**

Permet de brancher des logs, métriques, ou intégrations tierces sans modifier le code principal.

```java
public class MyMetricsPublisher implements SmartEventPublisher {
    @Override
    public void onCreateCompleted(ProvisionRequest req, ProvisionResult result) {
        metrics.increment("smart.create." + result.status().name().toLowerCase());
    }
    // ...
}
```

Elle est passée à `DefaultSmartApi` au démarrage. Par défaut, `NoOpEventPublisher` est utilisé (aucun effet).

| Méthode | Déclenchée quand |
|---|---|
| `onCreateRequested` | Juste avant l'envoi au provider |
| `onCreateCompleted` | Après réponse (succès ou échec) |
| `onDeleteRequested` | Juste avant l'envoi au provider |
| `onDeleteCompleted` | Après réponse (succès ou échec) |

---

## Module `core` — Plugin Velocity

---

### `SmartProvider`

**Classe principale du plugin Velocity (point d'entrée `@Plugin`).**

Responsabilités au démarrage :
1. Charge `config.yml` et `providers.yml`
2. Crée le `InMemoryProviderRegistry` et le `DefaultSmartApi`
3. Expose l'API via `SmartApiAccess.set(api)` → les providers peuvent s'y connecter
4. Enregistre les listeners RustyConnector (`OnServerPreJoin`, `OnServerLeave`)

---

### `DefaultSmartApi`

**Implémentation concrète de `SmartApi`.**

C'est l'orchestrateur central. Quand `createServer` ou `deleteServer` est appelé :

1. Notifie `SmartEventPublisher.onXxxRequested`
2. Cherche le bon `ProviderClient` dans le registre
3. Délègue l'appel au provider de façon asynchrone
4. Applique un timeout configurable (défaut : 10 secondes)
5. Gère les erreurs → retourne un `ProvisionResult.failure` plutôt que de propager une exception
6. Notifie `SmartEventPublisher.onXxxCompleted`

---

### `InMemoryProviderRegistry`

**Implémentation en mémoire de `ProviderRegistry`.**

Stocke les providers dans une `ConcurrentHashMap` (thread-safe).

**Logique de sélection :**
- Si `preferredProviderId` est renseigné dans la requête → cherche ce provider exact
- Sinon → filtre tous les providers via `supportsCreate/Delete()` et prend celui avec la **priorité la plus basse** (= le plus prioritaire)

C'est cette classe qui bénéficie des enregistrements faits par les plugins providers au démarrage.

---

### `NoOpEventPublisher`

**Implémentation vide de `SmartEventPublisher`.**

Utilisée par défaut dans `SmartProvider`. Toutes les méthodes sont vides — aucun effet de bord, aucune dépendance externe.

À remplacer si tu veux brancher des métriques ou des logs structurés :
```java
api = new DefaultSmartApi(registry, new MyMetricsPublisher(), executor, timeout);
```

---

### `listeners/OnServerPreJoin`

**Listener RustyConnector : déclenche la création d'un serveur.**

Appelé quand un joueur rejoint un serveur qui atteint `softPlayerCap + playerCap`.  
Flow :
1. Récupère la famille RustyConnector du serveur
2. Lit le metadata `smart.ram` de la famille pour connaître la RAM à allouer
3. Appelle `ProviderUtils.selectProvider()` pour choisir l'id du provider (selon `providers.yml`)
4. Construit un `ProvisionRequest` et appelle `SmartProvider.api.createServer(request)`

---

### `listeners/OnServerLeave`

**Listener RustyConnector : déclenche la suppression d'un serveur.**

Appelé quand un joueur quitte un serveur qui passe sous `softPlayerCap + playerCap`.  
Flow :
1. Récupère la famille RustyConnector du serveur
2. Construit un `DeleteRequest` et appelle `SmartProvider.api.deleteServer(request)`

---

### `utils/ProviderUtils`

**Utilitaire de sélection et de comptabilité des ressources.**

Lit la liste des providers depuis `providers.yml` (via `SmartProvider.providerConfig`) et applique les règles :
- `includedFamilies` / `excludedFamilies` : filtre par famille
- `maxProcesses` : limite le nombre de créations simultanées
- `ramAmount` : limite la RAM totale allouée

Maintient deux compteurs thread-safe par provider (`currentProcesses`, `currentRamUsage`).

| Méthode | Description |
|---|---|
| `selectProvider(family, ram)` | Retourne l'id du premier provider éligible et alloue les ressources |
| `releaseResources(id, ram)` | À appeler quand un serveur est détruit pour libérer les compteurs |
| `getCurrentProcessCount(id)` | Nombre de serveurs actuellement gérés par ce provider |
| `getCurrentRamUsage(id)` | RAM actuellement allouée par ce provider |

> ⚠️ `releaseResources` n'est pas encore appelé automatiquement lors d'une suppression. À brancher dans `OnServerLeave`.

---

### `config/MainConfig`

**Configuration principale (`smart/config.yml`).**

| Champ | Défaut | Description |
|---|---|---|
| `debug` | `true` | Active les logs détaillés |
| `fancyLogs` | `true` | Active les logs colorés (FancyLogger) |
| `playerCap` | `0` | Offset appliqué à `softPlayerCap` pour déclencher le scale |

---

### `config/ProviderConfig`

**Configuration des providers (`smart/providers.yml`).**

Charge la liste des objets `Provider`. Exemple de fichier généré :

```yaml
providers:
  - id: "pterodactyl"
    includedFamilies:
      - lobby
      - bedwars
    excludedFamilies:
      - auth
    maxProcesses: 5
    ramAmount: 10240
```

---

### `config/Provider`

**Objet de configuration d'un provider (entrée YAML).**

| Champ | Description |
|---|---|
| `id` | Doit correspondre à `ProviderClient.id()` du plugin provider |
| `includedFamilies` | Si renseigné, seules ces familles peuvent utiliser ce provider |
| `excludedFamilies` | Ces familles ne peuvent pas utiliser ce provider |
| `maxProcesses` | Nombre max de serveurs simultanément actifs (`0` = illimité) |
| `ramAmount` | RAM totale max allouée en Mo (`0` = illimitée) |

---

### `loggers/SmartLogger`

**Interface du logger interne.** Permet de switcher entre `ClassicLogger` et `FancyLogger` selon la config.

### `loggers/ClassicLogger`

Logger simple — écrit en `System.out` avec un préfixe `[SmartRC]`.

### `loggers/FancyLogger`

Logger avec emojis et couleurs ANSI. Activé quand `fancyLogs: true` dans `config.yml`.

### `loggers/Color`

Constantes ANSI (`RESET`, `CYAN`, `RED`, etc.) utilisées par `FancyLogger`.

---

## Module `provider-example` — Référence

### `ExampleHttpProviderClient`

**Implémentation de `ProviderClient` sans dépendance à une API réelle.**

Montre exactement comment écrire un provider :
- Filtre par `supportedFamilies`
- Simule une création/suppression asynchrone
- Génère un `externalServerId` aléatoire

Sert de point de départ pour écrire `smart-pterodactyl` ou tout autre provider.

---

## Résumé : qui dépend de quoi

```
provider plugin  ──► api (ProviderClient, SmartApiAccess, DTOs)
core             ──► api + RustyConnector + Velocity
provider-example ──► api
```

Un plugin provider **ne dépend jamais de `core`**, uniquement de `api`.

