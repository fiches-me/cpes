---
title: ☄️ Coût, Preuve et Algos de Tableaux
---
# ☄️ Coût, Preuve et Algorithmes de Tableaux

## Coût d'un algorithme

Un bon programme n'est pas celui qui a le moins de code ni celui avec le plus de lignes. *C'est celui qui réalise le meilleur compromis*, entre l'espace mémoire et le temps de calcul.

### Coût temporel
### Notation de $\mathcal{O}(n)$

### Coût spatial

## Preuves d'algorithmes

...

Ces deux points se prouvent, en générale, par récurrence.

### Terminaison

Pour prouver qu'un algorithme se termine, il faut prouver que les boucles conditionnelles (while) se terminent et que les boucles bornées sont bien sur des bornes non modifiés dans la boucle.

Pour prouver qu'une boucle while se termine, on utilise un variant de boucle.

> [!DÉFINITION]
> Un **variant** est une quantité positive définie en fonction ds variables de l'algorithme et du nombre de passage dans la boucle. *Elle resemble à une suite*.

**Pour prouver une terminaison :**
1. On définit un variant de boucle positif qui fait strictement positif de la boucle quand arrivé à 0
2. On montre qu'il est bien strictement positif
3. On montre qu'il est strictement décroissant
4. On conclu que le variant tend vers 0

#### Exemple

```python
i = n
while i>=4:
   print(i)
   i += 1
```

1. Notre variant de boucle est `i - 4`.
2. `i - 4` >= 0 car sinon on ne rentre pas dans la boucle (et donc l'algorithme se termine)
3. à chaque tour, `i - 4` est décrémenté. 
4. donc le variant tend vers 0 et l'atteint et on sort de la boucle 🥳