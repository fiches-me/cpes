---
title: 🧮 TD Statistiques N°3
order: 3
---

# 🧮 TD Statistiques N°3

## Exercice 1

1. On utilise **la moyenne empirique** comme estimateur d'espérance pour $\mathcal{L}$. On applique ensuite le TCL (mais il me manques les $n$) : $\mathbb{P} ( X \in ]\mu - 2\sigma ; \mu + 2\sigma [ ) = 0,95 \Leftrightarrow \mathbb{P} ( X \in ]23.5 - 8 - 2 ; 23.5 + 8 [ ) = 0,95$
2. Toujours pas de n. Mais il n'y aurait pas tant de problèmes que ça a avoir des résultats similaires

## Exercice 2

1. Un sondé vote à 30% pour $C_1$, à  28% pour $C_2$ et donc à 42% pour une autre option. Pour $C_1$, la variance est de $0.3 ( 1 - 0.3) = 0.21$. Pour $C_2$, la variance est de $0.28 ( 1 - 0.28) = 0.2016$

2. $$\mathbb{P} (p \in ] \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} n_\gamma ; \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} \xi_\gamma [) = \gamma$$

   On obtient, pour $C_1$, $$\mathbb{P} (p \in ] 0.3 -\sqrt {\frac{0.21}{500}} \times (- 1.96) ; 0.3 -\sqrt {\frac{0.21}{500}} \times (1.96) [) = 0.95$$

    $\mathbb{P} (p \in ]  0.26; 0,34 [) = 0.95$

   On obtient, pour $C_2$, $$\mathbb{P} (p \in ] 0.28 -\sqrt {\frac{0.2016}{500}} \times (- 1.96) ; 0.28 -\sqrt {\frac{0.2016}{500}} \times (1.96) [) = 0.95$$

    $\mathbb{P} (p \in ]  0.24; 0,32 [) = 0.95$
3. Avec mes résultats non (même écart)
4. On majore $p(1 - p)$ au lieu de l’approximer.

5. Pour $C_1$, $$0.3 = [ \bar{X}_n  - 1.96 \sqrt \frac{1}{o}, 0.3 + 1.96 \sqrt \frac{1}{o}]$$

J'ai oublié o, si qq a la formule complète

## Exercice 3

1. TCL my beloved
2. J'ai toujours une douille dans mon TCL

## Exercice 4

### Partie A

1. $$\mathcal{L}(\lambda) = \prod_{i=1}^{n} P(X_i = x_i) = \prod_{i=1}^{n} \frac{e^{-\lambda} \lambda^{x_i}}{x_i!} = e^{-n\lambda} \prod_{i=1}^{n} \frac{\lambda^{x_i}}{x_i!}$$

2. $$\mathcal{l}(\lambda) = ln(\mathcal{L}(\lambda)) = ln(e^{-n\lambda} \prod_{i=1}^{n} \frac{\lambda^{x_i}}{x_i!}) = ln(e^{-n\lambda}) + ln(\prod_{i=1}^{n} \frac{\lambda^{x_i}}{x_i!})$$

   $$= -n\lambda + \sum_{i=1}^n ln(\lambda^x_i) - \sum_{i=1}^nln(x_i!)$$

3. On dérive $\mathcal{l}$ en fonction de $\lambda$ (la variable)

   $$\mathcal{l}(\lambda)^\prime = - \lambda + \sum_{i=1}^n \frac{1}{\lambda^x_i}$$

4. a
5. a
6. a
7. a
8. a
9. a

### Partie B

1. "
2. "

## Exercice 5

1. Voir papier (à scanner)

2. $$\mathcal{L}(\theta) = \prod_{i=1}^{n} \left[ \frac{\beta}{\eta} \left( \frac{x_i}{\eta} \right)^{\beta-1} \exp\left( -\left( \frac{x_i}{\eta} \right)^\beta \right) \right] = \left( \frac{\beta}{\eta^\beta} \right)^n \cdot \left( \prod_{i=1}^{n} x_i \right)^{\beta-1} \cdot \exp\left( -\frac{1}{\eta^\beta} \sum_{i=1}^{n} x_i^\beta \right)$$

3. $\beta$ reste inchangé et $\gamma = \eta ^\beta$.

4. $$l(\beta, \gamma) = n\ln(\beta) - n\ln(\gamma) + (\beta-1) \sum_{i=1}^n \ln(x_i) - \frac{1}{\gamma} \sum_{i=1}^n x_i^\beta$$

   $$\frac{\partial l}{\partial \gamma} = -\frac{n}{\gamma} + \frac{1}{\gamma^2} \sum_{i=1}^n x_i^\beta$$

   $$\frac{\partial l}{\partial \beta} = \frac{n}{\beta} + \sum_{i=1}^n \ln(x_i) - \frac{1}{\gamma} \sum_{i=1}^n (x_i^\beta \ln(x_i))$$

   On passe par le logarithme pour éliminer le produit dans la fonction (toujours plus simple de dériver des sommes que des produits)

5. $$\hat{\gamma} = \frac{1}{n} \sum_{i=1}^n x_i^\beta$$
