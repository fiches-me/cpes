---
title: Estimation Statistique
order: 2
finished: false
---

# Estimation Statistique

> [!danger] 
> Cette fiche est encore en très grosse construction.
> 
> Promis, je ratrape mon retard !

## Objets mathématiques utilisés en statistique

> [!DÉFINITION]
> Un vecteur de données $\vec{x}=(x_1,\dots,x_n)$ est de taille $n$ (la taille de l'échantillon). Ces données sont réalisées par des variables aléatoires $\vec{X}=(X_1,\dots,X_n)$.

> ==**A ÉCRIRE**==

---

## Variables Aléatoires Usuelles Discrètes

### Loi uniforme

Une variable aléatoire X suis une loi de uniforme ($X \hookrightarrow \mathcal{U}$) si $\mathbb{P} ( X = k ) = 1/n  | k \in [\![ 1, n]\!]$

Alors, $\color{red} \mathbb{E} (X) = \frac{n + 1}{2}$ et $\color{green} \mathbb{V} = \frac{n^2 - 1}{12}$. On a également $X(\Omega) = [\![1, n]\!]$

### Loi de Bernoulli

Une variable aléatoire $X$ suis une loi de Bernoulli ($X \hookrightarrow \mathcal{Ber}(p)$) si $\mathbb{P} ( X = 0 ) = 1 - p$ et $\mathbb{P} (X = 1 ) = p$

Alors, $\color{red} \mathbb{E} (X) = p$ et $\color{green} \mathbb{V} = p (1 - p)$

### Loi Binomiale

Une variable aléatoire $X$ suis une loi Binomiale ($X \hookrightarrow \mathcal{B}(n, p)$) si $\forall k \in \mathbb{N}, \mathbb{P} ( X = k ) =  \binom{n}{k} p^k (1 - p)^{n - k}$

Alors, $\color{red} \mathbb{E} (X) = np$ et $\color{green} \mathbb{V} = np (1 - p)$

> [!HINT] Remarque
> Une loi binomiale $B(n , p)$ correspond à la répétition de n loi de Bernoulli $Ber(p)$.

### Loi de Poisson

Une variable aléatoire $X$ suis une loi de Poisson ($X \hookrightarrow \mathcal{P}(\lambda)$) si $\forall k \in \mathbb{N}, \mathbb{P} ( X = k ) =  e^{-\lambda} \frac{\lambda^k}{k!}$

Alors, $\color{red} \mathbb{E} (X) = \lambda$ et $\color{green} \mathbb{V} = \lambda$

*Cette loi modélise des événements indépendants qui ont lieu peu souvent.*

## Variables Aléatoires Usuelles Continues

### Loi Uniforme Continue

Une variable aléatoire X suis une loi de uniforme ($X \hookrightarrow \mathcal{U}([\![a, b]\!])$) si 

### Loi Géométrique

Une variable aléatoire $X$ suis une loi Géométrique ($X \hookrightarrow \mathcal{P}(\lambda)$) si $X = min \{Y_k = 1 | k \in \mathbb{N}^*\}$. Alors, $\mathbb{P} (X = k) = (1 - p) ^{k - 1} p$

Alors, $\color{red} \mathbb{E} (X) = \frac 1p$ et $\color{green} \mathbb{V} = \frac{1 - p}{p^2}$

*Cette loi modélise des la répétition d'une épreuve de Bernoulli jusqu'à son premier succès.*

### Loi Normale

Une variable aléatoire $X$ suis une loi Géométrique ($X \hookrightarrow \mathcal{N}(\mu, \sigma^2)$) si $\forall x \in \mathbb{R}, \mathbb{P}(X = x)= \frac 1{\sqrt{2\pi\sigma^2}} e ^ {- \frac{(x - \mu)^2}{2\sigma^2} }$

Alors, $\color{red} \mathbb{E} (X) = \frac 1p$ et $\color{green} \mathbb{V} = \frac{1 - p}{p^2}$

## Agrégation des variables aléatoires

Soit $X_1, \dots, X_n$ v.a. **idd** d'espérance $\mu$ et de variance $\sigma^2$. On note $\tilde{X}_n = \frac 1n \sum X_i$ l'agrégation des variables aléatoires. Son espérance vaut $\mu$ et sa variance $\frac {\sigma^2}n$.

> [!important] **Théorème :** Loi des grand nombres 
> - *Version faible :* $\forall \varepsilon > 0, \mathbb{P}(|\tilde{X}_n - \mu| >0) \xrightarrow[n \to + \infty]{} 0$
> - *Version forte :* $\mathbb{P} ( \tilde{X}_n \xrightarrow[n \to + \infty]{} \mu) = 0$

Avec une variable aléatoire agrégée (qu'on aime noter $\tilde{X}_n$), on peut appliquer le **théorème central limite** :

> [!important] **Théorème :** Central Limte (**TCL**)
>
> $$\frac{\tilde{X}_n - \mu}{\frac{\sigma}{\sqrt n}} \xrightarrow[n \to + \infty]{} = \mathcal{N}(0, 1)$$

Il est principalement utilisé pour justifier la construction d'[Intervalles de confiance](ch4.md#Intervalles%20de%20confiance%20pour%20la%20loi%20normal).

> [!Example]
> L'agrégation de lancés de pièces tend vers la quantité $p = \frac 12$, donc si on enlève l'espérance $\mu$ tend vers 0 (loi normal).

## Propriétés sur les variables aléatoires

> ==**A ÉCRIRE**==

## Dépendance par rapport à des paramètres

**Toute loi dépend d'un ou plusieurs paramètre(s)** (que nous noterons $\theta$).

> [!example] Exemple : $\mathcal{Ber}(p) \longrightarrow \theta = p$; $\mathcal{B}(n, p) \longrightarrow \theta = (n, p).$

On note $f_x (x | \theta)$ la fonction de densité/masse sachant $\theta$. Une même loi avec des paramétrisations différentes donne des résultats différents.

## Notion de statistique

> [!définition] 
> Une **statistique** est une fonction quelconque des données $\vec{x} : t(\vec{x})$.

Le but des statistiques est de faire **parler les données**. Un exemple de statistique serait la **moyenne empirique** $\widehat{x}_n = \sum x_i$ ou le maximum $\max_{i \in [\![1, n]\!]} x_i$.

En mathématiques, on aura besoin d'une loi de probabilité et/ou d'une variable aléatoire pour remplacer les données.

> [!définition]
> Un **estimateur** $T_n$ d'une grandeur $\theta$ est une statistique à valeur dans $\Theta$ des $\theta$ possibles.
> 
> Elle prend en argument l'ensemble des variables aléatoires considérées $\vec{X}$.

*La plupart du temps, les estimateurs nous serrons donnés.*

## Qualité d'un estimateur

On peut quantifier la qualité d'un estimateur avec les outils suivants :

### Biais

On le note $\mathcal{B} (T_n, \theta)$, et il mesure **la précision de $T_n$ par rapport à $\theta$**. $T_n$ est dit **sans biais** si $\mathbb{E} (T_n) = \theta$.

### Variance d'un estimateur

$\mathbb{V}(T_n)$ quantifie les fluctuations de $T_n$ autour de son espérance $\mathbb{E}(T_n)$.

### Consistance

 Si $T_n  \xrightarrow[n \to + \infty]{} \theta$, alors $T_n$ est **consistant** pour $\theta$.

### Erreur Quadratique

> [!définition] 
> L'erreur quadratique moyenne d'un estimateur $T_n$ de $\theta$ est noté $\mathbb{EQM}(T_n)$ et on a :
>
> $$\mathbb{EQM}(T_n) = \mathbb{V} (T_n) + \mathcal{B} (T_n, \theta)$$

Le meilleur estimateur possible de $\theta$ est un estimateur **sans biais** et de **variance minimal**.
