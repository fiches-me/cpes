---
title: Loi Normale
order: 3
---

# Loi Normale

## Fondements

### Définitions

*Imaginons que nous voulons dessiner mathématiquement la distribution de la taille chez les hommes.* Une telle courbe peut se réaliser avec la loi normale!

> [!INFO] Rappel [Chapitre 2](ch2.md#Loi%20Normale)
> $X \hookrightarrow \mathcal{N}(\mu, \sigma^2)$: $f(x | \mu, \sigma ^ 2) \rightarrow \frac 1{\sqrt{2\pi\sigma^2}} e ^ {- \frac{(x - \mu)^2}{2\sigma^2} }$

Pour lier la loi à nos données, on estime les paramètres $\mu$ (**moyenne**) et $\sigma^2$ (**variance**). On peut utiliser un estimateur pour cela.

### Propriétés

**Toute variable aléatoire suivant une loi normale admet les propriétés suivantes :**

1. $\mathbb{P} ( X \in ]\mu - \sigma ; \mu + \sigma [ ) = 0,68$
2. $\mathbb{P} ( X \in ]\mu - 2\sigma ; \mu + 2\sigma [ ) = 0,95$
3. $\mathbb{P} ( X \in ]\mu - 3\sigma ; \mu + 3\sigma [ ) = 0,997$

> [!NOTE]
> Les égalités ($<$ et $\le$) sont souvent mélangées. Elles ne changent pas la valeur du résultat.

### Loi Normale Centrée Réduite

*Comment calculer la probabilité sans calculatrice ?* Il est possible de 

+: $\mathbb{P} (X \in [a ; b]) = \mathbb{P} (\widetilde{X} \in [\frac{a - \mu}\sigma ; \frac{b - \mu}\sigma])$

+!: $\mathbb{P}(\widetilde{X} \le t) = \phi(t)$
1. Symétrie : $\mathbb{P} (\widetilde{X} < t) = \mathbb{P} (\widetilde{X} > -t) = \phi(t)$
2. Valeur Absolue : $\mathbb{P}(|\widetilde{X}| < t = \mathbb{P} (-t < \widetilde{X} < t) = \phi(t) - \phi(-t) = 2 \phi(t)$

## Retour sur le Théorème Centrale Limite

> [!TIP] Remarque
> Tant que les $X_i$ sont d'espérance et de variances finies, peu importe la distribution, on peut utiliser le TCL.
