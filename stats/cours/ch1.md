---
title: Statistiques Descriptives
order: 1
---

# Statistiques Descriptives

## Terminologie

> [!DÉFINITION]
> Les statistiques descriptives ont pour but de **résumer** les informations contenues dans **les données**

Données : mesures sur des individus issus d'une population.

- Si on étudie toute une population, c'est un **recensement**
- Si on étudie une partie de cette population, c'est un **échantillon**.

## Représentation des données

### Variables discrètes

Deux types de variables existent : les variables **qualitatives** (ou *catégorielles*), par exemple le nom ou la couleur des yeux, et les variables **quantitatives**, qui sont numériques et mesurables.

Plus précisément, si on étudie $n$ individus avec des valeurs $x_1,\dots,x_n$, on peut regrouper les observations en **modalités** $E=\{e_1,\dots,e_k\}$. La fréquence absolue de la modalité $e_j$ est le nombre d'individus $n_j$ pour lesquels la variable vaut $e_j$ :

$$n_j = \sum_{i=1}^{n} \mathbb{1}\{ x_i = e_j \}$$

La fréquence relative associée est $\dfrac{n_j}{n}$.

### Variables continues

Dans certains cas, les valeurs numériques varient beaucoup et les petits changements ne sont pas informatifs. On peut alors **partitionner**, c.-à-d. créer des catégories (appelées **classes**) :

$$A = \{ [a_{i-1}, a_i[\}_{i=1}^k$$

L'effectif de la classe $[a_{j-1}, a_j[$ est

$$n_j = \sum_{i=1}^n \mathbb{1}\{ x_i \in [a_{j-1}, a_j[ \} .$$

Ces données sont facilement représentables par des histogrammes.

Les histogrammes permettent d'afficher des informations complémentaires. Le **mode** est la classe la plus représentée. On peut calculer les effectifs cumulés avec

$$N_j = \sum_{l=1}^{j} n_l.$$

#### Lien avec les probas

On peut alors définit une [fonction de répartition] empirique qui va calculer pour un échantillon $x_1, ... , x_n$ :

$$\forall x \in \mathbb{R}, F_n(x) = \frac{1}{n} \sum_{i=1}^n \mathbb{1} \{x_i < x \}$$

#### Lien avec la fonction de répartition

Si on note nos données triés dans l'orde (usuellement $x_1^* , ..., x_n^*$), on a alors:

$$
F(x) = \begin{cases} 
          0 \text{ si } x < x_1^*\\
          \frac{i}{n}\text{ si } x_i^* \le x \le x_{i + 1}^*\\
          1 \text{ si } x_n^* < x
       \end{cases}
$$

## Indicateurs Statistiques

### Indicateurs de localisation

Voici différentes formules d'indicateurs statistiques :

#### Moyenne empirique

$$ \bar{x}_n = \frac1n \sum_{i=1}^n x_i$$

#### Valeurs extrêmes :

$x_1^* = \min_{i \in [1, n]} x_i$ et $x_n^* = \max_{i \in [1, n]} x_i$

#### Médiane Empirique

- Si n est impair, $\tilde{x}_n = x^*_{\frac{n+1}{2}}$
- Si n est pair, $\tilde{x}_n = \frac12 (x^*_{\frac{n}{2}} + x^*_{\frac{n + 1}{2}})$

### Indicateurs de dispersion/variabilité

#### Variable / écart type empirique

$$s_n^2 = \frac1n \sum_{i=1}^{n} (x_i - \bar{x}_n)^2$$

$$s_n = \sqrt{s_n^2}$$

#### Étendue

$$e_n = x_n^* - x_1^*$$

#### Quantiles empiriques

$$\forall p \in ]0,1[, \tilde{q}_{n,p} = \begin{cases}
      \dfrac12\left(x_{np}^* + x_{np+1}^*\right) &\text{si } np \in \mathbb{N},\\
      x_{\lfloor np\rfloor}^* &\text{sinon}.
\end{cases}$$

Elles généralisent la médiane ($\tilde{q}_{n,\frac12}$). En pratique, on utilise souvent les quantiles $\frac14$, $\frac12$ et $\frac34$, $\frac{1}{10}$ et$\frac{9}{10}$ utiles pour les boîtes à moustaches.

==// Pas de lib graphique==

## Éléments d'analyse d'étude statistique

Lorsque nous analysons des données ou leurs représentations, il est important de se poser quelques questions :

- **Introspection** : Suis-je objectif ? Quels biais peuvent affecter mon interprétation ? Ai-je fait preuve de discernement ?
- **Perspective** : Ai-je considéré un contexte plus large ? Quelles sont les interprétations possibles et les contre-interprétations ? Les résultats concordent-ils avec d'autres études ?
- **Qualité de la présentation** : La visualisation et les indicateurs sont-ils pertinents ? Quelles informations manquent (taille de l'échantillon, méthode de collecte...) ?
- **Source** : Qui publie les données ? La source est-elle fiable ? Comment l'étude a-t-elle été financée ? Existe-t-il des études contradictoires ?
