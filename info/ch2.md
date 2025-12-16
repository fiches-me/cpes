---
title: "💾 Algorithmique : La Suite"
tags:
  - info
  - cours
finished: true
---

# Algorithmique : La Suite

## Chaînes de caractères

> 🇬🇧 Character Strings

Une chaîne de caractères est une série de lettres, enchaînées entres elles. *Pour le moment, la métaphore est inutile, mais elle pourrait l'être un jour. Dans tout les cas, elle permet de se souvenir du mot anglais Characters String.*

::: code-group

```python [Pseudo-Code]
ch1 <- "Une chaîne de caractères"
ch2 <- 'Une autre chaîne de caractères'
```

```python [Python]
ch1 = "Hello"
ch2 = 'World'
ch3 = "Aujourd'hui"
ch4 = '''Bonjour'''
```

:::

Les chaînes de caractères servent à représenter du texte afin d'automatiser son traitement.

Pour parcourir une chaîne de caractère, on peut utiliser des boucles :

**Avec un indice incrémenté**

::: code-group

```python [Pseudo-Code]
Pour i allant de 1 à Longeur de ch1:
   Afficher ch1[i]
Fin Pour
```

```python [Python]
for i in range(len(ch1)):
   print(ch1[i])
```

:::

**Sans indice incrémenté**

::: code-group

```python [Pseudo-Code]
Pour i dans ch1:
   Afficher i
Fin Pour
```

```python [Python]
for i in ch1:
   print(i)
```

:::

Les chaînes de caractères sont constitués de caractères indicés à partir de 0. On y accède grâce à leurs indices.

**L'indice -1 est une pythonerie. Un mot de longueur n a des caractères indicés de 0 à n-1.

> [!BUG]
> Il n'est pas possible de modifier une chaîne de caractère avec les indices (faire `ch1[1] = "a"`. ) Il faut découper et concaténer.

## Fonctions

### Définition

Pour simplifier les algorithmes, on peut décomposer les problèmes en sous problèmes que l'on résout avec des **fonctions**.

> [!DÉFINITION]
> Une fonction est une structure qui associe à un nom une séquence d'instruction. Elle peut avoir 0, 1 ou plusieurs paramètres.

En pseudo-code, elle *peut* avoir une valeur de sortie, qui est renvoyé grâce au mot clé "Renvoyer".

En python, une fonction envoie par défaut `None` si aucun bloc `return` n'est utilisé. Une telle fonction est appelé **Procédure** et elle a des **effets de bords**.

::: code-group

```python [Pseudo-Code]
Fonction estPositif(n):
   Si n >= 0:
      Renvoyer Vrai
   Sinon:
      Renvoyer Faux
   Fin Si
# Pas de fin fonction
```

```python [Python]
def estPositif(n):
   if n >= 0:
      return True
   else:
      return False
```

:::

### Appel de fonctions

Une fonction ne s'exécute pas par défaut quand on lance le programme (fichier). Il faut donc l'**appeler**.

Si on reprend nos variables définies en haut, on a :

::: code-group

```python [Pseudo-Code]
Afficher estPositif(-10)
```

```python [Python]
print(estPositif(-10))   ​
```

:::

### Spécifications

> [!DÉFINITION]
> Les spécifications d'une fonction sont les **comportements attendus** de celle-ci. Il existe des conditions (d'entrée et de sortie) et des résultats (idem). Il existe également des pré/post conditions.

En python, il existe quelques fonctions utilisables par défaut dans les programmes et/ou le shell. Nous avons déjà vu `range()`, et nous allons nous intéresser à `help()`. Cette fonction affiche une page d'aide sur une fonction fournie en paramètre. Pour rendre cette fonction plus pertinente, on ajoutera dans nos fonctions python un **docstring** :

```python
def maSuperFonction(brainrot):
   """
   Le truc en vert, c'est le docstring !
   On indique (par convention) le comportement de la fonction dans celui-ci.
   
   Entrée: une chaîne de caractères incompréhensible.
   Sortie : une chaîne de caractères toujours incompréhensible, mais moins.
   """
```

### Tests

Après avoir écrit la fonction, il faut tester qu'elle fonctionne ! On écrit les tests à la fin d'un fichier python avec la fonction `assert` qui prend comme condition un booléen qui doit renvoyer `True` pour que la fonction assert n'arrête pas le programme (sinon elle coupe tout, attention !)
