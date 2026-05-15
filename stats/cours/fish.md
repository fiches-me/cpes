---
title: 🐟 Fish Stats
author: Guilhem C., Abel G.
draft: true
---

# 🐟 Fish Stats

## Statistiques descriptives

On se souvient de la différence entre **quantitatif** et **qualitatif**. Certaines données doivent être regroupées en catégories pour avoir un sens (ex : taille). On utilise alors les **classes** : $A = \{ [a_{i-1}, a_i[\}_{i=1}^k$.

Quelques fonctions de base :
- **Moyenne empirique** : $\bar{x}_n = \dfrac{1}{n} \sum_{i=1}^n x_i$.
- **Valeurs extrêmes** : $x_{(1)} = \min_{i\in[1,n]} x_i$ et $x_{(n)} = \max_{i\in[1,n]} x_i$ (ordres statistiques).
- **Médiane empirique** :
	- Si $n$ est impair, $\widetilde{x}_n = x_{(\frac{n+1}{2})}$.
	- Si $n$ est pair, $\widetilde{x}_n = \tfrac12\big(x_{(n/2)} + x_{(n/2)+1}\big)$.
- **Quantiles empiriques**.

Lorsque nous analysons des données ou leurs représentations, il est important de se poser quelques questions :

- **Introspection** : suis-je objectif ? Quels biais peuvent affecter mon interprétation ?
- **Perspective** : ai-je considéré un contexte plus large ? Quelles sont les interprétations possibles et les contre-interprétations ?
- **Qualité de la présentation** : la visualisation et les indicateurs sont-ils pertinents ? Quelles informations manquent (taille de l'échantillon, méthode de collecte...) ?
- **Source** : qui publie les données ? La source est-elle fiable ? Comment l'étude a-t-elle été financée ?

## Estimation statistique

Une variable aléatoire $X$ est définie sur un univers $\Omega$. Si l'image de $\Omega$ par $X$ est finie ou dénombrable on dit que $X$ est **discrète**, sinon elle est **continue**.

Deux fonctions importantes :

1. **Fonction de répartition (CDF)** : $F_X(x)=\mathbb{P}(X\le x)=\sum_{\{\omega:\,X(\omega)\le x\}}\mathbb{P}(\omega)$.
2. **Fonction de masse** (pour les variables **discrètes**) : $f_X(x)=\mathbb{P}(X=x)=\sum_{\{\omega:\,X(\omega)=x\}}\mathbb{P}(\omega)$.
3. Pour les variables continues on utilise une **densité** $f_X$ telle que $F_X(x)=\int_{-\infty}^x f_X(t)\,dt$.

---

À faire : espérance, variance, théorème de transfert

---

## Variables aléatoires usuelles discrètes

### Loi uniforme

Une variable aléatoire $X$ suit la loi uniforme ($X\sim\mathcal{U}(n)$) sur $\{1,\dots,n\}$ si $\mathbb{P}(X=k)=1/n$ pour $k=1,\dots,n$.

Alors $\mathbb{E}(X)=\dfrac{n+1}{2}$ et $\mathbb{V}(X)=\dfrac{n^2-1}{12}$.

### Loi de Bernoulli

$X\sim\mathcal{Ber}(p)$ si $\mathbb{P}(X=1)=p$ et $\mathbb{P}(X=0)=1-p$.

Alors $\mathbb{E}(X)=p$ et $\mathbb{V}(X)=p(1-p)$.

### Loi binomiale

$X\sim\mathcal{B}(n,p)$ si $\mathbb{P}(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$ pour $k=0,\dots,n$.

Alors $\mathbb{E}(X)=np$ et $\mathbb{V}(X)=np(1-p)$.

Remarque : $\mathcal{B}(n,p)$ est la somme de $n$ variables indépendantes $\mathcal{Ber}(p)$.

### Loi de Poisson

$X\sim\mathcal{P}(\lambda)$ si $\mathbb{P}(X=k)=e^{-\lambda}\dfrac{\lambda^k}{k!}$ pour $k\in\mathbb{N}$.

Alors $\mathbb{E}(X)=\lambda$ et $\mathbb{V}(X)=\lambda$.

Cette loi modélise des événements rares et approximations de comptages indépendants.

---

## Agrégation des variables aléatoires

Soit $X_1,\dots,X_n$ iid d'espérance $\mu$ et de variance $\sigma^2$. La moyenne empirique est $\bar{X}_n=\dfrac{1}{n}\sum_{i=1}^n X_i$. On a $\mathbb{E}(\bar{X}_n)=\mu$ et $\mathbb{V}(\bar{X}_n)=\sigma^2/n$.

**Loi des grands nombres** :
- Version faible : $\forall\varepsilon>0,\;\mathbb{P}(|\bar{X}_n-\mu|>\varepsilon)\to0$ quand $n\to\infty$.
- Version forte : $\mathbb{P}(\lim_{n\to\infty}\bar{X}_n=\mu)=1$.

**Théorème central limite (TCL)** :
$$\frac{\bar{X}_n-\mu}{\sigma/\sqrt{n}}\xrightarrow{d}\mathcal{N}(0,1).$$

Propriétés :
- Si $X_1,\dots,X_n$ sont indépendantes, $\mathbb{P}(X_1\le x_1,\dots,X_n\le x_n)=\prod_{i=1}^n\mathbb{P}(X_i\le x_i)$.
- Si elles sont identiquement distribuées, $\forall i,j,\;\mathbb{P}(X_i\le x)=\mathbb{P}(X_j\le x)$.

---

## Notion de statistique

Une statistique est une fonction des données $\vec{x}\mapsto t(\vec{x})$. Exemple : la moyenne empirique $\widehat{\mu}_n=\dfrac{1}{n}\sum_{i=1}^n x_i$ ou le maximum $\max_i x_i$.

Un estimateur $T_n$ d'un paramètre $\theta$ est une statistique dont la valeur estimée vise $\theta$.

## Qualité d'un estimateur

Le biais est $b(T_n,\theta)=\mathbb{E}(T_n)-\theta$. $T_n$ est sans biais si $b(T_n,\theta)=0$.

La variance $\mathbb{V}(T_n)$ mesure la dispersion autour de $\mathbb{E}(T_n)$.

L'erreur quadratique moyenne (MSE) :
$$\mathcal{MSE}(T_n)=\mathbb{E}[(T_n-\theta)^2]=\mathbb{V}(T_n)+b(T_n,\theta)^2.$$ 

## Loi normale

Rappel : $X\sim\mathcal{N}(\mu,\sigma^2)$ a pour densité
$$f(x\mid\mu,\sigma^2)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}.$$ 

Propriétés pratiques :
1. $\mathbb{P}(X\in]\mu-\sigma,\mu+\sigma[)\approx0.68$.
2. $\mathbb{P}(X\in]\mu-2\sigma,\mu+2\sigma[)\approx0.95$.
3. $\mathbb{P}(X\in]\mu-3\sigma,\mu+3\sigma[)\approx0.997$.

Standardisation : $Z=\dfrac{X-\mu}{\sigma}\sim\mathcal{N}(0,1)$. Notons $\Phi(t)=\mathbb{P}(Z\le t)$ la CDF de la loi normale centrée réduite.
- Symétrie : $\Phi(-t)=1-\Phi(t)$.
- Valeur absolue : $\mathbb{P}(|Z|<t)=2\Phi(t)-1$.

## Intervalles de confiance

Pour un niveau de confiance $1-\alpha$, soit $z_{1-\alpha/2}$ le quantile de $\mathcal{N}(0,1)$. Ex : $z_{0.975}\approx1.96$, $z_{0.995}\approx2.58$.

- Si $\sigma$ connu :
$$I_{1-\alpha}=\Big[\bar{X}_n - z_{1-\alpha/2}\frac{\sigma}{\sqrt{n}},\;\bar{X}_n + z_{1-\alpha/2}\frac{\sigma}{\sqrt{n}}\Big].$$

- Si $\sigma$ inconnu : on estime par
$$S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\bar{X}_n)^2$$
et on utilise la loi de Student :
$$I_{1-\alpha}=\Big[\bar{X}_n - t_{n-1,1-\alpha/2}\frac{S}{\sqrt{n}},\;\bar{X}_n + t_{n-1,1-\alpha/2}\frac{S}{\sqrt{n}}\Big],$$
où $t_{n-1,1-\alpha/2}$ est le quantile de Student à $n-1$ degrés de liberté.

- Pour une proportion (Binomiale), avec $\hat p$ la proportion observée :
$$I_{1-\alpha,\mathcal{approx}}=\Big[\hat p - z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}},\;\hat p + z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}\Big].$$

On peut utiliser $1/4$ comme borne supérieure conservative pour $\hat p(1-\hat p)$.

## Maximisation de vraisemblance

(Références et exemples à ajouter)

