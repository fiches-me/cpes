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

Deux types de variables existent : les variables **qualitatives** (ou *catégorielles*), tel que le nom, la couleur des yeux, alors que les variables **quantitatives** représentent des données numériques quantifiable.

Plus précisément, si on étudie $n$ individus de variables $x_1 ... x_n$, on peut les rassembler dans des **modalités** $E={e_1 ... e_n}$. La fréquence absolue de la modalité $e_j$ est le nombre total d'individu $n_j$ dont la variable est égal à $e_j$

$$n_j = \sum_{i=1}^{n} \mathbb{1} \{ x_i = e_j \}$$

La fréquence relative associée est $\frac{n_j}{n}$

### Variables continues

Dans certain cas, les valeurs sont trop variés et les petits changements ne sont pas intéressants. On peut alors **partitionner**, càd créer des catégories (que l'on appelle **classes**) :

$$A = \{ [a_{i - 1} , a_i [\}_{i \in [1, k]}$$

L'effectif de la classe $[a_{j-1} ; a_j$ est $$n_k = \sum_{i=1}^n \mathbb{1} \{ x_i \in [a_{i - 1} , a_i [ \} $$

C'est données sont facilement representables avec des graphiques (histogramme).

Les histogrammes permettent d'afficher quelques données supplémentaires. Le **mode** d'un histogramme est la classe la plus représentée. On peut calculer les effectifs cumulés avec $$mj =  \sum_{l=1}^{j} n_e$$

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

$$\forall p \in ]0, 1[, \tilde{q}_{n,p} = \begin{cases} 
      \frac12 (x_{np}^* + x_{np + 1}^*) \text{ si } np \in \mathbb{N} \\
      x_{\lfloor np\rfloor}^* \text{ sinon} \\
\end{cases}$$
Elles permettent de généraliser la médiane ($\tilde{q}_{n, \frac12}$)
