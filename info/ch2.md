---
title: "Algorithmique : La Suite"
---
# Algorithmique : La Suite
## Chaînes de caractères
> 🇬🇧 Character Strings

::: code-group

```pseudo-code [Pseudo-Code]
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

```pseudo-code [Pseudo-Code]
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

```pseudo-code [Pseudo-Code]
Pour i dans ch1:
   Afficher i
Fin Pour
```

```python [Python]
for i in ch1:
   print(i)
```

:::

> [!ATTENTION]
> Ces notations en pseudo-code ne sont pas encore validés.

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

```pseudo-code [Pseudo-Code]
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

