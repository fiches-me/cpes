---
title: Estimation Statistique
order: 2
finished: false
---
# Estimation Statistique

## Objets mathématiques utilisés en statistique

> [!DÉFINITION]
> Un vecteur de données $x=(x_1,\dots,x_n)$ est de taille $n$ (la taille de l'échantillon). Ces données sont réalisées par des variables aléatoires $X=(X_1,\dots,X_n)$.

> [!danger] 
> Cette fiche est encore en très grosse construction.
> 
> Promis, je ratrape mon retard !


---

xxx

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