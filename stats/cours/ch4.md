---
title: Intervalles de confiance
order: 4
---

# Intervalles de confiance

On interroge une population d'une certaine taille $n$ sur une question (*booléenne*), et on comptabilise le pourcentage de "Oui" en réponse au sondage.

Si on veut modéliser cette situation avec où *chaque individu* suis une [Loi de Bernoulli](ch2.md#Loi%20de%20Bernoulli). Si on utilise un seul $\forall p_i = p$, alors on revient à "**uniformiser**" les opinions des individus. C'est la méthode la plus utilisée, car la plus pratique. On cherche donc à trouver $p$ de manière précise, robuste et avec le moins

*Mais il y a un problème* : prenons deux échantillons  $\vec{x}$ et $\vec{y}$. Les estimateurs de p obtenues sont 0.33 et 0.45 (sur une même question). **Comment prendre en compte les différences sur nos 2 estimations ?** 

1. $\vec{x}$ et $\vec{y}$ sont séparés, pourquoi ? Y-aurait il un problème de biais ou de représentativité de l'échantillon ?
2. Es ce qu'une moyenne $\vec{z} = [\vec{x}] + [\vec{y}]$ est cohérente ?

Les différences d'estimations donnent certaines information sur l'assurance/la qualité d'une étude, quantifier la solidité statistique de l'étude (choix de l'échantillon, de la loi, etc...).

**À partir d'estimations ponctuelles de notre experience, on va chercher à en *quantifier son incertitude*. Pour cela, nous allons utiliser des *estimations ensemblistes* afin d'assurer une certaine garantie statistique sur notre experience.**

## Estimation d'intervalle

On réalise l'estimation d'un paramètre $\theta$, à partir de données $\vec{x} ) (x_1, ..., x_n)$ générés selon les variables aléatoires $\vec{X} = (X_1, ..., X_n)$

> [!définition] 
> Soient $a(\vec{X})$ et $b(\vec{X})$ des statistiques de nos variables aléatoires $\vec{X}$ pour un paramètre $\theta$. Supposons que $a(\vec{X}) \le \theta \le b(\vec{X})$.
> 
> On appelle:
> 1. $[a(\vec{x}), b(\vec{x})]$ une **estimation d'intervalle**
> 2. $[a(\vec{X}), b(\vec{X})]$ un **estimateur d'intervalle**
>    
>    Une intervalle de confiance **de seuil $\gamma \in [0, 1]$  pour un paramètre $\theta$ est un estimateur d'intervalle $[a(\vec{X}), b(\vec{X})]$ tel que $\mathbb{P} (\theta \ in [a(\vec{X}), b(\vec{X})]) = \gamma$**

> [!TIP] Remarque
> On se servira des estimateurs d'intervalle pour les résultats mathématiques qu'ils nous permettent d'avoir, mais nous utiliserons les estimations d'intervalles pour les valeurs numériques.

> [!TIP] Remarque
> - Le seuil $\gamma$ doit être assez élevé ($> 0.9$).
> - On cherche un encadrement de $\theta$ (fixé), les bornes de l'intervalle sont aléatoires.
> - $\gamma$ ne dépend pas de $\theta$.
> - En général, on construit l'intervalle de confiance pour $\theta$ à l'aide d'un **bon** estimateur $\widehat{\theta}$ de $\theta$. Il a la forme $I_\gamma = [\widehat{\theta} - \epsilon; \widehat{\theta} + \epsilon]$
> 
> ![rt](../estitheta.svg)

## Intervalles de confiance pour la loi normal

*Soit $\vec{X} = (X_1, ... , X_n)$ iid  $\hookrightarrow \mathcal{N}(\mu, \sigma^2)$. On suppose $\theta^2$ connu, et on cherche à estimer $\mu$ à l'aide d'une intervalle de confiance*

Soit $\bar{X}_n = \frac 1n \sum_{i = 1}^{n}X_i$ un estimateur de $\mu$. **Résultats pour $X_i \hookrightarrow \mathcal{N}(\mu, \sigma^2) : \bar{X} \hookrightarrow \mathcal{N}(\mu, \frac{\sigma^2}n)$, $X_i$ indépendantes.**

> [!warning] À ne pas confondre avec le TCL

Soit $\tilde{X} = \sqrt{n} . \frac{\bar{X}_n - \mu}\sigma$. On sait que $\tilde{X} \hookrightarrow \mathcal{N}(0, 1)$. 

> [!NOTE]
> Globalement, toutes les v.a. que nous étudierons (ou presque) se rapprocheront  de lois réduites.

À partir de $\tilde{X}$, on va obtenir un encadrement de $\mu$, selon un seuil de confiance $\gamma$. En suis les étapes suivantes :

- Fixons $\gamma$.
- On sait que $\exists \eta_\gamma, \xi_\gamma \in \mathbb{R}$ qui vérifient$\mathbb{P} (\tilde{X} \in [\xi_\gamma, \eta\gamma]) = \gamma = \phi (\eta_\gamma) - \phi(\xi_\gamma)$
- On transforme notre intervalle pour faire apparaître $\bar{X}_n$ et $\mu$.
  Sachant que $\tilde{X} = \sqrt{n} . \frac{\bar{X}_n - \mu}\sigma$, on a:
  $\xi_\gamma \le \tilde{X} \le \eta_\gamma$ (connu et tabulé)
  $\Leftrightarrow \xi_\gamma \le \sqrt{n} \frac{\bar{X} - \mu }{\sigma} \le \eta_\gamma$
  $\Leftrightarrow \xi_\gamma . \frac{\sigma}{\sqrt n} \le \bar{X}_n - \mu  \le \eta_\gamma . \frac{\sigma}{\sqrt n}$
  $\Leftrightarrow \bar{X}_n - \eta_\gamma . \frac{\sigma}{\sqrt n} \le \mu \le \bar{X}_n -  \xi_\gamma . \frac{\sigma}{\sqrt n}$
- Par équivalences, $\mathbb{P} (\tilde{X} \in [\eta_\gamma, \xi_\gamma]) = \gamma$ et $\gamma = \mathbb{P} (\mu \in [\bar{X}_n - \eta_\gamma \frac{\sigma}{\sqrt n}, \bar{X}_n - \xi_\gamma \frac{\sigma}{\sqrt n}])$ (par construction)

**Donc l'intervalle $I_\gamma [\bar{X}_n - \eta_\gamma \frac{\sigma}{\sqrt n}, \bar{X}_n - \xi_\gamma \frac{\sigma}{\sqrt n}]$ est une intervalle de confiance pour $\mu$, de seuil $\gamma$. 

> [!EXAMPLE] Application Numérique
> $\bar{X}_n$ nous donne une estimation $\bar{x}_n = 48$ pour $\mu$.
> 
> Avec un échantillon de taille 100, et $\sigma = 5$, une estimation de $I_\gamma$ s'écrit :
>
> $$I_\gamma = [48 - \eta_\gamma . \frac{5}{\sqrt 100}, 48 - \xi_\gamma . \frac{5}{\sqrt 100}]$$
>
> $$I_\gamma = [48 - \frac{\eta_\gamma}{2}, 48 -  \frac{\xi_\gamma}{2}]$$

On a, à présent, pour tout seuil $\gamma \in [0, 1]$, des valeurs associés $\eta_\gamma$ et $\xi_\gamma$ qui nous donnent une intervalle de confiance $I_\gamma$ pour le paramètre $\mu$ (*à partir des tabulations de $\phi$.

> [!example] 
> Avec notre intervalle précédente, **si $\gamma = 0.95$**, alors $\eta_\gamma = 1.96$ et $\xi_\gamma = 1.96$.
> 
> Alors $I_{0.95} = [47.02 , 48.98]$
> 
> Si $\gamma = 0.99$, alors $\eta_\gamma = 2.58$ et $\xi_\gamma = 2.58$.
> 
> Alors $I_{0.99} = [46.71 , 49.29]$

Plus $\gamma$ est proche de 1, plus l'intervalle sera large (compromis entre la "précision" de notre estimation (taille réduite de $I_\gamma$) et la probabilité que $\mu$ soit dedans (l'amplitude du seuil $\gamma$))

> [!IMPORTANT] Résumé
> Nous sommes parties d'une estimation ponctuelles, et nous avons une probabilité que notre paramètre soit dans une intervalle, afin d'obtenir une garantie sur notre experience statistique
