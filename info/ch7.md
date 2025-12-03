---
title: 📝 Fichiers, Lecture, Écriture, CSV
---
# 📝 Fichiers, Lecture, Écriture, CSV

## Manipulation des fichiers

Un fichier est un document informatique dans lequel des données sont écrites **selon un format**. Le format du fichier détermine le type des données qu'on peut mettre dedans (et influence donc sa taille). Les fichiers se rangent dans les dossiers

> [!BUG]
> Un fichier python détecter **uniquement** les fichiers placé **dans le même dossier** que celui du fichier python.
> 
> ---
> Pour accéder à un fichier dans un autre dossier, on utilise les **chemins exacts** (`C:\User\Guilhem\CPES\secret.md` sur windows, `/home/guilhem/CPES/secret.md` sur linux) ou des **chemins relatifs** (`../` pour revenir en arrière).

Pour ouvrir un fichier en python, on utilise la fonction `open`. Elle possède 3 modes d'ouvertures :

1. "r", pour read, qui permet de lire un fichier *sans pouvoir écrire à l'interieur*.
2. "w"
3. "a"
## CSV