---
title: 🐟 Fish Stats
author: Guilhem C., Abel G.
draft: true
---

# 🐟 Fish Stats
## Statistiques descriptives

On se souvient de la différences entres **quantitatif** et **qualitatif**. Certaines données doivent êtres regroupés en catégories pour avoir un sens (ex: taille). On utilise alors les **classes** : $A = \{ [a_{i-1}, a_i[\}_{i=1}^k$

Quelques fonctions de base:
- **Moyenne empirique** : $\bar{x}_n = \frac1n \sum_{i=1}^n x_i$
- **Valeurs extrêmes** : $x_1^* = \min_{i \in [1, n]} x_i$ et $x_n^* = \max_{i \in [1, n]} x_i$
- **Médiane empirique** :
	- Si n est impair, $\widetilde{x}_n = x^*_{\frac{n+1}{2}}$
	- Si n est pair, $\widetilde{x}_n = \frac12 (x^*_{\frac{n}{2}} + x^*_{\frac{n + 1}{2}})$
	- (on fait ici référence aux valeurs triés numéro $\frac n2$, $\frac{n+1}{2}$, etc)
- **Quantiles empiriques**

Lorsque nous analysons des données ou leurs représentations, il est important de se poser quelques questions :

- **Introspection** : Suis-je objectif ? Quels biais peuvent affecter mon interprétation ? Ai-je fait preuve de discernement ?
- **Perspective** : Ai-je considéré un contexte plus large ? Quelles sont les interprétations possibles et les contre-interprétations ? Les résultats concordent-ils avec d'autres études ?
- **Qualité de la présentation** : La visualisation et les indicateurs sont-ils pertinents ? Quelles informations manquent (taille de l'échantillon, méthode de collecte...) ?
- **Source** : Qui publie les données ? La source est-elle fiable ? Comment l'étude a-t-elle été financée ? Existe-t-il des études contradictoires ?

## Estimation Statistique

---

On le note $\mathcal{B} (T_n, \theta)$ le **biais de $T_n$** et il mesure **la précision de $T_n$ par rapport à $\theta$**. $T_n$ est dit **sans biais** si $\mathbb{E} (T_n) = \theta$.

$\mathbb{V}(T_n)$ quantifie les fluctuations de $T_n$ autour de son espérance $\mathbb{E}(T_n)$.

L'erreur quadratique moyenne d'un estimateur $T_n$ de $\theta$ est noté $\mathbb{EQM}(T_n) = \mathbb{V} (T_n) + \mathcal{B} (T_n, \theta)$.
## Loi Normale
## Intervalles de confiance
## Maximisation de Vraisemblance
