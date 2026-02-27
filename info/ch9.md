---
title: Architecture Matérielle
tags:
  - info
  - cours
---

# Architecture Matérielle

## Introduction

> On distingue les langages **compilés** et **interprétés** : c'est l'introduction sur les "niveaux" de code entre l'humain et la machine. Si vous voulez vraiment le schéma, dites-le moi, sinon je vous l'épargne (et mon Figma aussi).

## En Pratique

### Les composants d'un ordinateur

1. Écran
2. Carte mère
3. Processeur (*CPU*)
4. Mémoire Vive (*RAM*)
5. Mémoire persistante (disque dur, de plus en plus remplacée par des SSD)
6. Cartes périphériques
    - Carte graphique (*GPU*)
    - Carte réseau (Wifi, Bluetooth)
    - Carte Son
7. Clavier
8. Souris
9. Lecteur optique (CD/DVD) — présent sur les machines plus anciennes.

### Histoire de l'informatique

- Les idées d'algorithmes et de machines à calculer existent depuis l'Antiquité.
- Des mécanismes mécaniques (ex. la Pascaline) ont inspiré des constructions automatiques.
- 1846 : utilisation des rubans perforés pour le traitement automatique de l'information.
- Début du XXe siècle : tubes à vide pour les premiers calculateurs électroniques.
- 1940 : émergence des architectures respectant le modèle de Von Neumann.
- 1948 : invention du transistor, point de départ de l'électronique moderne.

### Modèle de Von Neumann

> < il manque un schéma ! [fiches.me a besoin d'aide !](../contribution/index.md) >

#### Processeur

Dans le modèle de Von Neumann, le processeur (CPU) effectue les calculs et coordonne les autres composants. On distingue classiquement :
- des **registres** (stockage très rapide, interne au CPU) ;
- une **Unité Arithmético-Logique (UAL / ALU)** qui réalise les opérations arithmétiques et logiques ;
- une **unité de contrôle** qui décode et orchestre l'exécution des instructions ;
- parfois un **accumulateur**, concept historique utilisé par certaines architectures.

L'unité de contrôle contient typiquement un registre d'instruction (IR) et un compteur de programme (PC).

#### Mémoire

La mémoire regroupe différents types de stockage :

1. **Mémoire persistante** (disque dur, SSD) : stockage longue durée ;
2. **Mémoire vive (RAM)** : stockage temporaire utilisé pendant l'exécution ; volatile ;
3. **Mémoire cache** : mémoire très rapide, proche du CPU, pour réduire la latence des accès ;
4. **Mémoire morte (ROM/firmware)** : stockage non modifiable contenant du code d'amorçage (ex. BIOS/UEFI).

#### Bus de données

Les données circulent entre composants via des bus ou interconnexions (largeur typique 32/64 bits). Physiquement, ce sont des pistes imprimées et des traces sur la carte mère.

#### Entrées/Sorties (E/S)

Périphériques d'entrée (clavier, souris, capteurs) et de sortie (écran, haut‑parleur) ; leur gestion passe par des contrôleurs et pilotes.

### Résumé

Les ordinateurs sont des systèmes électroniques alimentés par l'électricité, exécutant des programmes qui traitent des entrées pour produire des sorties.

## En Marche

### Cycles d'exécution

La vitesse d'exécution d'un processeur est liée à sa fréquence d'horloge (en hertz) et à son organisation interne (pipeline, nombre de cœurs). Un cycle d'instruction typique comprend :

1. **Fetch** : lecture de l'instruction depuis la mémoire.
2. **Decode** : décodage de l'instruction (unité de contrôle).
3. **Read operands / Execute** : lecture des opérandes et exécution dans l'UAL (ALU).
4. **Memory access** : accès en lecture/écriture à la mémoire si besoin.
5. **Write back** : écriture du résultat dans les registres ou la mémoire.

Ces étapes peuvent être exécutées en même temps pour augmenter le débit, ce qui donne l'illusion d'exécuter plusieurs instructions simultanément. Le processeur est souvent appelé un "cœur" car il induit le rythme de l'ordinateur et "tick" comme un vrai cœur.

### Systèmes multi‑processeurs / multicœurs

Les machines modernes ont souvent plusieurs cœurs (4, 8, voire beaucoup plus) : il faut alors organiser l'accès à la mémoire.

Deux grandes approches :

1. **Mémoire partagée** : tous les cœurs accèdent au même espace mémoire (nécessite des mécanismes de synchronisation et de cohérence cache).
2. **Mémoire distribuée** : chaque processeur/contrôleur dispose d'une portion locale de mémoire ; la communication inter‑nœuds se fait via un interconnect.

Des architectures hybrides existent (mémoire hiérarchique, NUMA) pour concilier performances et scalabilité.

> < il manque un schéma ! [fiches.me a besoin d'aide !](../contribution/index.md) >

### Loi de Moore

D'après Gordon Moore (co‑fondateur d'Intel), le nombre de transistors intégrés par circuit augmentait approximativement d'un facteur deux tous les deux ans. Cette observation empirique, appelée "loi de Moore", a guidé l'industrie pendant des décennies, mais son rythme s'est ralenti récemment et elle n'est plus une règle strictement tenue.
