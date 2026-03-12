---
title: ☄️ Coût, Preuve et Algos de Tableaux
---

# ☄️ Coût, Preuve et Algorithmes de Tableaux

## Coût d'un algorithme

Un bon programme n'est pas celui qui a le moins de code ni celui avec le plus de lignes. *C'est celui qui réalise le meilleur compromis*, entre l'espace mémoire et le temps de calcul.

> [!WARNING]
> Cette partie est toujours en cours de rédaction.
### Coût temporel

### Notation de $\mathcal{O}(n)$

### Coût spatial

## Preuves d'algorithmes

...

---

Ces deux points se prouvent, en générale, par récurrence.

### Terminaison

Pour prouver qu'un algorithme se termine, il faut prouver que les boucles conditionnelles (while) se terminent et que les boucles bornées sont bien sur des bornes non modifiés dans la boucle.

Pour prouver qu'une boucle while se termine, on utilise un variant de boucle.

> [!DÉFINITION]
> Un **variant** est une quantité positive définie en fonction ds variables de l'algorithme et du nombre de passage dans la boucle. *Elle resemble à une suite*.

**Pour prouver une terminaison :**
1. On définit un variant de boucle positif  où on sort de la boucle quand il arrive à 0.
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

Tri dit conditionel. On prend le minimum de la partie droite d'un tableau, que l'on va déplacer à gauche. On réduit peu à peu la taille du tableau de droite pour finir avec un tableau de gauche trié.-
::: code-group

```python [Pseudo-Code]
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

#### Correction

- **Terminaison** : la fonction contient 2 seule boucle bornées. La première est sur la longeur du tableau et sur i. Aucun n'est modifié dans la boucle. La deuxième est aussi sur la longeur du tableau et sur j. Aucun des deux n'est modifié dans la boucle. La fonction va donc se terminer.
- **Correction Partielle** :
    1. **Invariant** : à la fin du tour de boucle i, le tableau contient les i + 1premiers éléments triés en ordre croissant et tous inferieurs ou égaux aux autres éléments du tableau.
    2. **Initialisation** : pour `i = 0`, on trouve le minimum et on le place à l'indice 0. Il est en tant que minimum plus petit que tout les autres, l'invariant est donc vérifié pour `i = 0`.
    3. **Hérédité** : Supposons que l'invariant est vrai au tour de boucle i. Vérifions qu'il se conserve au tour i + 1. Au tour de boucle i + 1, on trouve le minimum parmi les éléments de l'indice i + 1 à la fin de la liste. D'après l'invariant, ce minimum est plus grand ou égal à tout les i + 1 premiers éléments du tableau. En plaçant cet élément à l'indice i + 1, les i + *2* éléments de la liste sont triés en ordre croissant. Comme cet élément est le minimum de la partie à trier, l'entièreté de l’invariant est donc vérifié au rang i + 1.
    4. **Conclusion** : l'invariant est vérifié en début de boucle et se maintient. Il est donc vrai en fin de boucle.
:::

### Trie par insertion

::: code-group

```python [Pseudo-Code]
Fonction trie_insertion(T):
   Pour i allant de 1 à longeur de T - 1:
      v <- T[i]
      j <- i
      Tant Que j > 0 et T[j-1] > v:
         T[j] <- T[j - 1]
         j <- j - 1
      Fin tant que
      T[j] <- v
    Fin pour
    Renvoyer T
```

```python [Python]
def trie_instertion(tab: list) ➡️ list:
   for k in range(1, len(k) - 1):
      cle = tab[k]
      indice = k - 1
      while indice >= 0 and tab[indice] > cle:
         tab[indice + 1] =  tab[indice]
         indice -= 1
      tab[indice + 1] = cle
   return tab
```

:::

#### Correction

- **Terminaison** : la boucle pour est sur la longueur du tableau T et un indice i. Aucun des deux n'est modifié dans la boucle, elle se termine donc. Pour la boucle tant que :
	- **Variant** : j-1
	- j - 1 positif car j strictement positif sinon on entre pas dans la boucle
	- j est décrémenté donc j - 1 est décroissant
	- j - 1 atteins 0 et on sort donc de la boucle *si ce n'était pas déjà fait*.
- **Correction Partielle** :
    1. **Invariant** : à la fin du tour de boucle i, les i + 1 éléments du tableau sont triés en ordre croissant *et n'ont pas été modifiés*.
    2. **Initialisation** : pour `i = 1` (au premier tour de boucle), si le deuxième élément est plus petit que le premier, alors on rentre dans la boucle j (while) et on échange les éléments. Sinon, on ne les échanges pas, mais ils sont déjà triés par ordre croissant. Dans les deux cas, les i + 1  (*donc 2*) premiers éléments du tableau sont triés en ordre croissant et sans modifications. L'invariant est donc vérifié pour `i = 1`.
    3. **Hérédité** : Supposons que l'invariant est vrai au tour de boucle i. Vérifions qu'il se conserve au tour i + 1. Les i premiers éléments sont rangés en ordre croissant. Grâce à la boucle `while`, on range l'élément `T[i + 1]` tel que l'ordre croissant soit respecté.  
    4. **Conclusion** : l'invariant est vérifié en début de boucle et se maintient. Il est donc vrai en fin de boucle.

> [!NOTE]
> Les tris suivants sont des tries avec *effets de bords* : le tableau donné dans la fonction est **directement modifié**, donc il n'est pas nécessaire d'utiliser l'objet en `return` pour le récupérer trié.

### Dichotomie

```python
def dichotomie(liste : list, x : int):
  found = False
  start = 0
  end = len(liste) -1
  while found == False and start <= end:
    mid = (start + end) // 2
    if liste[mid] == x:
      found = True
    else :
      if x > liste[mid]:
        start = mid + 1
      else:
        end = mid - 1
  return found
```
