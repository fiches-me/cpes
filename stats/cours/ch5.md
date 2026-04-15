---
title: Maximisation de Vraisemblance
order: 5
finished: false
---

# Maximisation de Vraisemblance

## Estimation par maximisation de vraisemblance

La **vraisemblance** est la probabilité qu'un événement arrive souvent. 

> [!DÉFINITION]
> Soit une variable aléatoire $X$ de fonction de masse (discrète) / densité (continue) $f$ tel que $\forall x \in X(\Omega)$ , on a une valeur $f(x | \theta)$ où $\theta$ est un paramètre de la loi X.

> [!TIP] Rappel
> 1. Pour une v.a. discrète, $f(x | \theta) = \mathbb{P} (X = x | \theta)$
> 2. Pour une v.a. continue, $\forall a, b, \in X(\Omega), \mathbb{P} (X \in [a, b] | \theta) = \int_{a}^{b} f(x | \theta) dx$

En pratique, nous connaissons l'expression de $f(x | \theta)$, et on va étudier les variations de $f$ afin de déterminer son maximum, par rapport à $\theta$ et en fonction de $x$.

> [!DÉFINITION]
> Pour une valeur observée $x \in X (\Omega)$ par notre loi $X$, la fonction de vraisemblance de de $\theta$ est $\mathcal{L} (\theta) = f(x|\theta)$

> [!HINT] Remarque
> La vraisemblance (aussi *likelihood*) $\mathcal{L}$ est une fonction du paramètre à estimer $\theta$ implicitement de l'observation.

Nous avons vu ce type de comportements avec [l'exercice 5 du TD 2](../td/td2.md#Exercice%205%20(**corrigé**)).  La vraisemblance est une probabilité, donc $\mathcal{L} (\theta) \in [0, 1]$. La vraisemblance pour $x_n$ observations est :

$$\mathcal{L}(\theta) = f(x_1, ..., x_n | \theta) =  f(\vec{x}| \theta) =\prod^n_{i=1} f(x_i |\theta)$$

Le but est de trouver, à partir d'une loi ($X$) qui va modéliser un phénomène, le(s) paramètres adapté(s) ($p, \lambda, \mu, \sigma^2$) pour nos observations. Pour trouver un maximum, utilise donc la dérivé $\mathcal{L}^\prime$ pour trouver la vraisemblance max. On note alors $\widehat{\theta}$ **l'estimateur maximal de Vraisemblance (EMV)**.

## Exemples

### Loi de Bernoulli

EMV pour p : Soit $\vec{X} (X_1, ... , X_n)$ v.a. idd qui produisent les observations $\vec{x} = (x_1, ..., x_n$. On cherche, en fonction de nos observations $\vec{x}$, l'EMV pour le paramètre p.

#### 1. Fonction de vraisemblance $\mathcal{L}({\theta})$

$\mathcal{L}({\theta}) = f(\vec{x} | \theta) = \prod_{i=1}^n f(x_i | \theta)$
$f(x_i | \theta) = \mathbb{P} (X_i = x | \theta) = \begin{cases} p \text{ si } x_i = 1 \\ 1 - p \text{ si } x_i = 0 \end{cases}$ donc $f(x_i | \theta) = p^{x_i} (1 - p)^{1 - x_i}$
Donc $\mathcal{L} (\theta) = \mathcal{L} (p) = \prod_{i = 1}^n p^{x_i} (1 - p)^{1 - x_i}$. 

#### 2. Simplification

$$\mathcal{L} (p) = \prod_{i = 1}^n ( (\frac {p}{1 - p})^{x_i} \times (1 - p)) = \color{red} (1 - p)^n \prod_{i = 1}^n ( \frac {p}{1 - p}^{x_i})$$

#### 3. Application du logarithme

On obtient donc, une log. vraisemblance, noté $\mathcal{l} (\theta) = ln(\mathcal{L}(\theta))$ car $ln(a \times b) = ln(a) + ln(b)$

$ln$ est monotone sur $\mathbb{R}^*$ donc $\underset{\theta}{\mathrm{argmax}} \mathcal{l} (\theta) = \underset{\theta}{\mathrm{argmax}} \mathcal{L} (\theta)$

$$\mathcal{l}(p) = ln( (1 - p)^n \prod_{i = 1}^n ( \frac {p}{1 - p}^{x_i})) = nln(1 - p) + ln(\prod_{i = 1}^n ( \frac {p}{1 - p}^{x_i}))$$$$\color{red}= nln(1 - p) +  \sum_{i = 1}^n x_i . ln(\frac{p}{1-p})$$

#### 4. Dérivée et racines $\mathcal{L}({\theta})^\prime$

$$\mathcal{L}({\theta})^\prime = \frac{-n}{1 - p} + \sum_{i = 1}^n x_i (\frac 1p + \frac 1{1 - p}) = \frac{-n}{1 - p} + \sum_{i = 1}^n x_i \times \frac 1{p(1-p)}$$

On peut multiplier par $(1 - p)$ pour la recherche des 0:

$$-np \sum_{i = 1}^n x_i = 0 \Leftrightarrow p = \frac 1n \sum_{i = 1}^n x_i$$
