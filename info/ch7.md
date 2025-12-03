---
title: 📝 Fichiers, Lecture, Écriture, CSV
finished: true
---
# 📝 Fichiers, Lecture, Écriture, CSV

## Manipulation des fichiers
### Définitions
Un fichier est un "document" informatique dans lequel des données sont écrites **selon un format**. Le format du fichier détermine le type des données qu'on peut mettre dedans (et influence donc sa taille). Les fichiers se rangent dans les dossiers

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

**f.close()** est extrêmement important, il faut fermer un fichier après l'avoir traité.

::: code-group

```python [Lecture (r)]
f = open("bob.mcpack")
f.read()          # Renvoie le contenu du fichier dans un unique str
f.readlines()     # Renvoie une liste de str, représentant chaque ligne
for ligne in f.readlines():
	print(ligne)
f.close()
```

```python [Écriture (w)]
f = open("bob.mcpack", "w")
f.write("Marcel") # \n pour renvoyer à la ligne
f.close()
```

```python [Append (a)]
f = open("bob.mcpack", "a")
f.write("Marcel") # Écrit du texte à la fin du dernire caractère
f.close()
```

:::
## CSV
### Définitions
Un **fichier CSV** est un fichier texte (et non un document qui est un fichier *de traitement* de texte) dans lequel des valeurs y sont stockés, séparés par des virgules (*comma*). En france, on utilisera des points virgules.

Une **table de données** est un tableau de données rangées en ligne et colones. 

Dans un CSV, les valeurs d'une même colonne doivent avoir le même type/domaine.
On peut fusionner (concaténation approximative) des fichiers CSV si leurs colonnes ne créent pas de conflits entres elles. 