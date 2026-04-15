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







On utilise donc la dérivé $\mathcal{L}^\prime$ pour trouver la vraisemblance max.
