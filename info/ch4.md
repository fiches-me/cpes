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

### Correction
Pour effectuer la correction **partielle** d'un algorithme, il faut vérifier les points suivants :

1. Définir un **invariant de boucle**, propriété vraie au tour i
2. Montrer que la propriété est bien vérifié au **premier tour** de boucle
3. Montrer que notre invariant **se conserve** (si il est vrai au tour i, il l'est au tour i + 1)
4. Conclure : **l'invariant est vrai à la fin de la boucle**.

Effectuer une terminaison et une correction partielle d'un algorithme revient à faire la **correction complète* ou *juste correction*.

## Algorithmes sur les tableaux
### Trie par séléction

::: code-group

```pseudo-code [Pseudo-Code]
T tableau de n nombres entiers

Fonction trie_selection(T):
   Pour i allant de 0 à longeur(T) -1:
      m <- i
      Pour j allant de i + 1 à longeur(T) - 1:
         Si T[j] < T[m]:
            m <- j
         Fin Si
      Fin Pour
   Fin Pour
```

```python [Python]
def trie_selection(tab):
   for i in range(0, len(tab) - 1):
      i_min = i
      for j in range(i, len(tab):
         if tab[j] < tab[i_min]:
            i_min = j

      tmp = tab[i]
      tab[i] = tab[i_min]
      tab[i_min] = tmp
   return tab
```

:::
### Trie par insertion

::: code-group

```pseudo-code [Pseudo-Code]
a <- 1
```

```python [Python]
a = 1
```

:::
### Dichotomie
