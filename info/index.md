---
title: 🪤 Base Algorithmique
finished: false
---

# 🪤 Base Algorithmi<u>que</u>

*Et pas Algorithm<u><i>ie</i></u>, ça veux rien dire.*

## Introduction

**Algorithme** : Suite d'instruction (existait avant les ordinateurs, par exemple l'algorithme d'Euclide). *On les écrira en pseudo-code.*

**Programme** : Algorithme dans un language de programation.

**Informatique** : Informatique + automatique. Science du traitement automatique des données (et pas science de l'ordinateur). Elle s'appuie sur le matériel, le logiciel et les infrastructures.

> 🇬🇧 Hardware, Software, Infrastructures

**Numérique** : usage de l'outil créé par la science Informatique.

**Digital** : anglicisme connoté ChatGPT/marketing

> [!TODO] Objectif de l'informatique
> Prendre des données et **automatiser** est processus **fastidieux**

## Données

**Variables** : Emplacement dans la mémoire de la machine auquel on a donné un nom

**Affectation** : Assigner une valeur à une variable. La première affectation s'appelle une **initialisation**.

::: code-group

```pseudo-code [Pseudo-Code]
a <- 1
```

```python [Python]
a = 1
```

:::

**Déclaration** : créer une variable sans lui donner de valeur.
**Types** : Type de l'information qu'une variable contient. En python, il en existe 4 :

1. `int` : Nombre entier (🇬🇧 Integrer)
2. `float` : Nombre flottant (🇬🇧 Floating Number)
3. `bool` : Booléen (🇬🇧 Boolean)
4. `str` : Chaîne de Caractères (🇬🇧 String)

**Entrée** : Entrée utilisateur

::: code-group

```pseudo-code [Pseudo-Code]
afficher "Texte"
a <- entree une valeur
```

```python [Python]
input("Texte")
```

:::

**Sortie** : Affichage d'une information (visuelle, sonore...).

## Conditionnelles


::: code-group

```pseudo-code [Pseudo-Code]
Si <condition booléenne>:
   instruction
Sinon:
   instruction
Fin Si
```

```python [Python]
if <condition booléenne>:
   #instruction
else
   #instruction
#pas de fin si
```

:::
## Boucles

### Boucles bornées


### Boucles non bornées

### Boucles imbriquées

> 🇬🇧 Nested Loops. Also Inner/Outrer loops

Il est possible d'imbriquer différentes boucles (et conditions entres elles) 

::: code-group

```pseudo-code [Pseudo-Code]
Si <condition>
   Si <condition>
      instruction
   Fin Si
Fin Si
```

```python [Python]
if a == 1:
   if b == 2:
      print(a, b)
      
# Toujours pas de endif (Fin Si)
```

:::

**On effectue la boucle de l'intérieur et on la répète.**
