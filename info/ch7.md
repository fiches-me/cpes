---
title: 📝 Fichiers, Lecture, Écriture, CSV
---
# 📝 Fichiers, Lecture, Écriture, CSV

## Manipulation des fichiers
### Définitions
Un fichier est un document informatique dans lequel des données sont écrites **selon un format**. Le format du fichier détermine le type des données qu'on peut mettre dedans (et influence donc sa taille). Les fichiers se rangent dans les dossiers

> [!BUG]
> Un fichier python détecter **uniquement** les fichiers placé **dans le même dossier** que celui du fichier python.
> 
> ---
> Pour accéder à un fichier dans un autre dossier, on utilise les **chemins exacts** (`C:\User\Guilhem\CPES\secret.md` sur windows, `/home/guilhem/CPES/secret.md` sur linux) ou des **chemins relatifs** (`../` pour revenir en arrière).

### Application en Python
Pour ouvrir un fichier en python, on utilise la fonction `open`. Elle possède 3 modes d'ouvertures :

1. "r", pour *read*, qui permet de lire un fichier **sans pouvoir écrire à l’intérieur**.
2. "w", pour *write*, qui permet d'écrire **par dessus, en écrasant son contenu**.
3. "a", pour *append*, qui permet d'écrire **à la fin du contenu du fichier**.

Par défaut, `open` ouvre les fichiers en mode lecture.
### Exemples
::: code-group

```python [Lecture (r)]
```

```python [Écriture (w)]
```

```python [Append (a)]
```

:::
## CSV