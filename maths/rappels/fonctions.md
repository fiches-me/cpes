---
title: ⚛️ Fonctions Usuelles & Suites
---

# ⚛️ Fonctions Usuelles & Suites

## Propriétés Exponentielles

- $e^0 = 1$
- $e^1 = e$
- $e^{x+y} = e^x × e^y$
- $e^{-x} = \frac{1}{e^x}$
- $e^{x-y} = \frac{e^x}{e^y}$
- $e^{nx} = e^{x^n}$
- $\lim\limits_{x \to -\infty} e^x = 0$ et $\lim\limits_{x \to +\infty} e^x = +\infty$

## Propriétés logarithmes

> [!WARNING] ln(x) est définit sur **x > 0**

### Opérations "de bases"

- $y = ln(x) \Longleftrightarrow x = e^y$
- $ln(1) = 0$
- $ln(e) = 1$
- $ln(\frac{1}{e}) = -1$
- $ln(e^x) = e^{ln(x)}  = x$*
- 

### Opérations "magiques"

- $ln(x×y) = ln(x) + ln(y)$
- $ln(\frac{1}{x}) = -ln(x)$
- $ln(\frac{x}{y}) = ln(x) - ln(y)$
- $ln(\sqrt{x}) = \frac{1}{2} ln(x)$
- $ln(x)^n = n ln(x)$ avec $n$ entier relatif

## Suites

### Définitions

Une suite $(u_n) n ∈ \in \mathbb{N}$ est arithmétique s’il existe un réel $r$ indépendant de n tel que, pour tout $n \in \mathbb{N}$ , $u_{n+1} = u_n + r$

### Variations d'une suite

Une suite est croissante si $u_{n+1} - u_n > 0$ ou $\frac{u_{n+1}}{u_n} ≥ 1$
Une suite est décroissante si $u_{n+1} - u_n < 0$ ou $\frac{u_{n+1}}{u_n} ≤ 1$

### Formule récurente

- Suite arithmétique : $u_{n+1} = u_n + r$
- Suite géomatrique ! $u_{n+1} = u_n × q$

### Formule de Sommme

- Suite arithmétique : $S_n = \frac{(1er terme + dernier terme)(nbre de termes)}{2}$
- Suite géomatrique ! $S_n = u_0 \frac{1-q^n}{1-q}$
