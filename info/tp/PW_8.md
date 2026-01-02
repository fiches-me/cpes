---
title: 💻 TP n°8
finished: true
tags:
  - info
  - tp
order: 8
---

## CSV

```python
"""
J'ai changé les paramêtres tab en matrice pour rendre le code plus lisible.
Cela reste politiquement correct.
"""

def csv_to_matrix(nom: str) -> list[list]:
    matrice = []
    f = open(nom)
    data = f.readlines()
    for string in data:
        matrice.append(string.split(","))
        matrice[-1] = matrice[-1][:-1]

    return matrice


def tri_col(matrice : list[list], col: int) -> list[list]:
    for k in range(1, len(matrice)):
        cle = matrice[k]
        indice = k - 1
        while indice >= 1 and matrice[indice][col] > cle[col]:
            matrice[indice + 1] =  matrice[indice]
            indice -= 1
        matrice[indice + 1] = cle

    return matrice

def sauvegarde(nom: str, matrice : list[list]) -> None:
    f = open(nom, "w")
    for tab in matrice:
        for element in tab:
            f.write(element)
            f.write(",")
        f.write("\n")

def fusion(matrice1: list[list], matrice2: list[list]) -> list[list]:
    matrice = matrice1
    cap = len(matrice) - 1
    assert len(matrice1[0]) > len(matrice2[0])
    for index in range(1, len(matrice2)):
        matrice.append(matrice2[index])
        while len(matrice[cap + index]) <  len(matrice[0]):
            matrice[cap + index].append(None)

    return matrice
```
