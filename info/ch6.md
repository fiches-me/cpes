---
title: 🎲 N-Uplets & Dictionnaires
finished: true
tags:
  - info
  - cours
---

# 🎲 N-Uplets & Dictionnaires

## N-Uplets (Tuples)

### Définition

Les n-uplets (tuples en python) sont des types construits qui permettent de créer des collections de plusieurs éléments.

En python, les tuples sont les valeurs envoyés entres parenthèses. En python, les tuples peuvent également contenir des données de types différents. Nous avons déjà rencontré les tuples avec des fonctions qui renvoyaient plusieurs paramètres

```python
return a, b
>>> (67, 69)
```

### Manipulation et usage

Les valeurs d'un tuple sont accessible avec des crochets, comme un tableau. 

```python
t = ("1", 2, "trois")
print(t[2])
>>> trois
```

Les tuples sont **immuables**. Après création (par extension ou compréhension), on ne peux pas modifier ou même append à un tuple. On obtient toujours l'erreur suivante :

```python
t[1] = "deux"
>>> TypeError: 'tuple' object does not support item assignment
```

## Dictionnaires

### Définition

Un dictionnaire est une collection de valeurs **non ordonnées** dont chacune est associé à une clef **unique**.  

> [!WARNING] Dictionnaire s'écrit avec **deux N** !

En python, on utilise le type `dict` pour implémenter les dictionnaires. On évitera de les appeler "dic" ou "dick" (vous chercherez sur google pour la signification en anglais). On peut ajouter/modifier des valeurs après la création, mais il est impossible *non récursivement* [^1] de modifier les clefs.

```python
d = {"a": 2, "b": 16, "c": 32}
vide = {} #ou v = dict()
comprehension = {x : x*x for x in range(5)}
```

### Construction

Il est possible de remplir un dictionnaire petit à petit

```python
d["d"] = 48
```

Si la clef existe déjà, l'ancienne valeur associé est écrasé par la nouvelle.

### Fonctions Importantes

> Pour la suite, nous assumons que d est un dictionaire

#### Supprimer une clef :

```python
del d["clef]"
```

#### Renvoyer toutes les clefs

```python
d.keys()
```

#### Renvoyer toutes les valeurs

```python
d.values()
```

#### Renvoyer un ensemble de tuples (clef, valeur)

```python
d.items()
```

#### Obtenir le nombre de couples

```python
len(d)
```

## N-Uplets nommés

Nous avons vu [précédemment](#Manipulation%20et%20usage) que les éléments d'un tuple sont accessible par leurs indices. Quand les tuples sont hétérogènes (contiennent plusieurs types) ou de grande taille, ce fonctionnement n'est pas très intuitif. C'est pour cela qu'on peut utiliser les **named tuples**.

Il faut importer `namedtuples` de la bibliothèque `collections`. Il faut ensuite créer un objet, un *template* [^2] pour ensuite créer nos tuples.

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
A = Point(2, 4)
B = Point(5, -3)
```

On peut ensuite utiliser `x, y = A`, `A.x` et `A.y`.

[^1]: Cette notion sera introduite dans un cours futur.
[^2]: La notion de classe, qui rendrait l'explication des tuples nommés beaucoup plus simple, est également  introduite dans un cours au S2. Courage !
