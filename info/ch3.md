---
title: 🗃 Tableaux
---
# Tableaux
## Tableaux à une dimension

### Définitions
Nous avons vu 4 types *de bases* en python. **Mais la fête n'est pas finie !** Il en existe d'autres, dits *construits*. En algorithmique, on les appelles types *abstraits*, et nous allons en découvrir 3 pour le moment

**Un tableau** est une suite de valeurs **indiciés** de même type, de taille prédéfinie et non modifiable.

En python, on les implémenté avec `List` 

**Une liste** est une suite de valeurs de même type, de taille modifiable, mais non indiciés. On peux accéder à la première valeur ou au reste de la liste.


> [!DANGER]
> Ne pas confondre List et Listes ! List est un objet en python (tableau dynamique) et Liste est un type abstrait qui existe partout.

**Un tableau dynamique** est un tableau dont la taille est variable. En python, elle est permise avec la fonction `.append()`

> [!QUESTION] C'est qui le `.` devant la fonction ?
> En python, il y a deux manières d'appeler une fonction. Soit directement dans le code avec la variable en tant que paramètre, soit derrière le paramètre avec l'utilisation du .
> 
> ---
> *Seule les fonctions officielles peuent êtres appelés par des variables. Pour le moment.*

### Déclaration

::: code-group

```pseudo-code [Pseudo-Code]
T tableau de 5 entiers
T <- [1,2,3,4,5]
T <- [0 pour k allant de 1 à 5]
```

```python [Python]
# Ce tableau est définit en *compréhension*
tab1 = [1,2,3,4,5]
# Ce tableau est définit en *extension*
tab2 = [0 for i in range(n)]
```

:::

### Parcours 

Les tableaux peuvent être parcouru comme les chaînes de caractères. Contrairement aux `str`, il est possible de changer une valeur à un indice `i`.

::: code-group

```pseudo-code [Pseudo-Code]
T tableau de 5 entiers
T <- [1,2,3,4,5]
Pour e dans T
   Afficher e
Fin pour
```

```python [Python]
tab1 = [1,2,3,4,5]
for e in tab:
   print(e)
```

:::

## Tableaux à 2 dimensions

Que ce passe t-il quand l'on ajoute un tableau dans un tableau ? On obtient un **tableau de tableau**, aussi appellé **tableau 2D/bidimensionnel** ou **matrice**.

Voici un exemple de définition :

::: code-group

```pseudo-code [Pseudo-Code]
T tableau de tableaux d'entiers de taille 3 de taille 2
T <- [[1,2,3],[4,5, 6]]
```

```python [Python]
tab1 = [[1,2,3],[4,5, 6]]
```

:::

On y accède alors avec `T[i][j]`, où *i* est la la ligne et *j* la colonne.

> [!BUG] Pythonerie
> En python, il est possible de créer des tableaux en deux dimensions avec des sous tableaux de taille différente, comme `T = [[1], 2, 3[], [4, 5]]`. Nous éviterons au maximum leurs utilisations.

L'oppérateur **+** sur les tableaux concatène les tableaux. `[0] + [1]` =  `[0, 1]`.
