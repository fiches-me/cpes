---
title: 🧮 TD Statistiques N°3
order: 3
---

# 🧮 TD Statistiques N°3

## Exercice 1

1. On utilise **la moyenne empirique** comme estimateur d'espérance pour $\mathcal{L}$. On applique ensuite le TCL (mais il me manques les $n$) : $\mathbb{P} ( X \in ]\mu - 2\sigma ; \mu + 2\sigma [ ) = 0,95 \Leftrightarrow \mathbb{P} ( X \in ]23.5 - 8 - 2 ; 23.5 + 8 [ ) = 0,95$
2. Toujours pas de n. Mais il n'y aurait pas tant de problèmes que ça a avoir des résultats similaires

### Correction

1. On approxime la variance par la variance empirique, $I^{approw}_ \gamma = [\bar{X} - \eta_\gamma \sqrt{\frac{s^2_x}{n}}, \bar{X} + \eta_\gamma \sqrt{\frac{s^2_x}{n}}]$ et $\tilde{X} = \frac{\bar{X} - \mu}{\sqrt{\frac{\sigma^2}{n}}}$ suit une loi normale centrée réduite d'après le TCL.

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

1. Utilisation du TCL ? 
2. Si oui, il manque toujours un n dans ma formule

## Exercice 4

### Partie A

1. On cherche $P( (\bigcap_{i=1}^n X_i = x_i ) | \lambda)$.  On peut faire un produit car les lois $X_i$ sont mutuellement indépendantes. $$\mathcal{L}(\lambda) = \prod_{i=1}^{n} P(X_i = x_i) = \prod_{i=1}^{n} \frac{e^{-\lambda} \lambda^{x_i}}{x_i!} = e^{-n\lambda} \prod_{i=1}^{n} \lambda^{x_i} \prod_{i=1}^{n} \frac{1}{x_i!} = e^{-n\lambda} \lambda^{\sum_{i = 1}^n} \prod_{i=1}^{n} \frac{1}{x_i!}$$

2. $$\mathcal{l}(\lambda) = ln(\mathcal{L}(\lambda)) = ln( e^{-n\lambda} \lambda^{\sum_{i = 1}^n} \prod_{i=1}^{n} \frac{1}{x_i!}) = ln(e^{-n\lambda}) + ln(\lambda^{\sum_{i = 1}^n}) + ln(\prod_{i=1}^{n} \frac{1}{x_i!}) =$$

   $$-n\lambda + \sum_{i=1}^{n} x_i ln(\lambda) + ln(\prod_{i=1}^{n} \frac{1}{x_i!})$$

3. On dérive $\mathcal{l}$ en fonction de $\lambda$ (la variable)

   $$\mathcal{l}(\lambda)^\prime = - n + \sum_{i=1}^n x_i\frac{1}{\lambda}$$

   La dérivée de $\mathcal{l}$ s'annule ssi $- n + \sum_{i=1}^n x_i\frac{1}{\lambda} = 0 \Leftrightarrow  \lambda = \sum_{i=1}^n x_i\frac{1}{n}$. L'estima**tion** de vraisemblance pour $\lambda$ pour nos données est $\sum_{i=1}^n x_i\frac{1}{n}$ et l'estima**teur** maximum de vraisemblance est $\lambda ^* (X_1, ..., X_n) = \sum_{i=1}^n X_i\frac{1}{n}$.

4. $\mathbb{E}(\lambda^*) =\frac{1}{n} \sum_{i=1}^n \mathbb{E} (X_i) = \frac{1}{n} n \lambda = \lambda$
5. $\mathbb{V}(\lambda^*) =\frac{1}{n^2} \sum_{i=1}^n \mathbb{E} (X_i) = \frac{1}{n^2} n \lambda = \frac{\lambda}{n}$. Tend vers 0 quand  $n$ tend vers l'infinie, donc les variations sont de plus en plus faibles à mesure que de nouvelles va sont ajoutés.
6. $EQM(\lambda ^*) = \mathbb{V}(\lambda^*) + (\mathbb{E}(\lambda^*))^2 = \mathbb{V}(\lambda^*) = \frac \lambda n$
7. $\mathbb{E}(\widehat{\lambda}) = \frac 13 (2 \mathbb{E}(X_1) + \mathbb{E}(X_2)) = \lambda$ sans biais
8. $\mathbb{V}(\widehat{\lambda}) = \frac 19 ( \mathbb{V}(2X_1) + \mathbb{V}(X_2)) = \frac 19 ( 4\mathbb{V}(X_1) + \mathbb{V}(X_2)) = \frac 59 \lambda$. Pour  $\widehat{\lambda}$, la variance est finie et ne dépend pas de n, cohérent car on ne prend en compte que $X_1$ et $X_2$ dans l'estimation de $\lambda$. $EQM(\widehat{\lambda}) = \mathbb{V} (\widehat{\lambda}) = \frac 59 \lambda$
9. $EQM (\lambda ^*) < EQM ( \widehat{\lambda}) \Leftrightarrow \frac \lambda n < \frac 59 \lambda \Leftrightarrow \frac 1n < \frac 59 \Leftrightarrow n > 1.8$. Donc pour $n \ge 2$, $\lambda ^*$ a un EQM plus faible que $\widehat\lambda$.

### Partie B

1. "
2. "

## Exercice 5

1. Voir papier (à scanner)

2. **Ne pas oublier de préciser que les lois sont idd !**

   $$\mathcal{L}(\theta) = \prod_{i=1}^{n} \left[ \frac{\beta}{\eta} \left( \frac{x_i}{\eta} \right)^{\beta-1} \exp\left( -\left( \frac{x_i}{\eta} \right)^\beta \right) \right] = \left( \frac{\beta}{\eta^\beta} \right)^n \cdot \left( \prod_{i=1}^{n} x_i \right)^{\beta-1} \cdot \exp\left( -\frac{1}{\eta^\beta} \sum_{i=1}^{n} x_i^\beta \right)$$

3. $\beta$ reste inchangé et $\gamma = \eta ^\beta$.

4. $$l(\beta, \gamma) = n\ln(\beta) - n\ln(\gamma) + (\beta-1) \sum_{i=1}^n \ln(x_i) - \frac{1}{\gamma} \sum_{i=1}^n x_i^\beta$$

   $$\frac{\partial l}{\partial \gamma} = -\frac{n}{\gamma} + \frac{1}{\gamma^2} \sum_{i=1}^n x_i^\beta$$

   $$\frac{\partial l}{\partial \beta} = \frac{n}{\beta} + \sum_{i=1}^n \ln(x_i) - \frac{1}{\gamma} \sum_{i=1}^n (x_i^\beta \ln(x_i))$$

   On passe par le logarithme pour éliminer le produit dans la fonction (toujours plus simple de dériver des sommes que des produits)

5. $$\hat{\gamma} = \frac{1}{n} \sum_{i=1}^n x_i^\beta$$
