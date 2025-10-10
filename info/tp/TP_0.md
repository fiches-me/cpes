---
title: 💻 TP n°0
finished: true
tags:
  - info
  - tp
order: 0
---

# 💻 TP n°0

## Exercice 1

```python [Exercice_1.py]
print("premier programme")
nom = input ("Donnez votre nom : ")
print("Bonjour", nom)
```

## Exercice 2

```python [Exercice_2.py]
text = input("Donner un entier : ")
x = int(text)
text = input("Donner un entier : ")
y = int(text)
z = x - y
if (z < 0):
    resultat = -z
else:
    resultat = z

print("Valeur absolue : ", z)
```

## Exercice 3

> [!SUMMARY]
> J'ai utilisé ici des **fonctions**. C'est un moyen de mettre plusieurs algorithmes dans le même fichier.

```python [Exercice_3.py]
def somme():
    print("Calcul de la somme de 2 nombres")
    a = int(input("Donner un nombre : "))
    b = int(input("Donner un autre nombre : "))
    c = a + b
    print("\nLa somme est : ", c, "\n")

def egal():
    print("Test de l'égalité de 2 nombres")
    a = int(input("Donner un nombre : "))
    b = int(input("Donner un autre nombre : "))
    c = a == b
    if c:
        print("Ces nombres sont égaux")
    else:
        print("Ces nombres ne sont pas égaux")

def quotien():
    print("Calcul du quotient de 2 nombres")
    a = int(input("Donner un nombre : "))
    b = int(input("Donner un autre nombre : "))
    assert b != 0
    c = a // b
    print(c)

#somme()
#egal()
quotien()
```
