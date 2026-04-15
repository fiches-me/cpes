---
title: Intervalles de confiance
order: 4
finished: false
---

# Intervalles de confiance

On interroge une population d'une certaine taille $n$ sur une question (*booléenne*), et on comptabilise le pourcentage de "Oui" en réponse au sondage.

Si on veut modéliser cette situation avec où *chaque individu* suis une [Loi de Bernoulli](ch2.md#Loi%20de%20Bernoulli). Si on utilise un seul $\forall p_i = p$, alors on revient à "**uniformiser**" les opinions des individus. C'est la méthode la plus utilisée, car la plus pratique. On cherche donc à trouver $p$ de manière précise, robuste et avec le moins de biais possible.

*Mais il y a un problème* : prenons deux échantillons  $\vec{x}$ et $\vec{y}$. Les estimateurs de p obtenues sont 0.33 et 0.45 (sur une même question). **Comment prendre en compte les différences sur nos 2 estimations ?** 

1. $\vec{x}$ et $\vec{y}$ sont séparés, pourquoi ? Y-aurait il un problème de biais ou de représentativité de l'échantillon ?
2. Es ce qu'une moyenne $\vec{z} = [\vec{x}] + [\vec{y}]$ est cohérente ?

Les différences d'estimations donnent certaines information sur l'assurance/la qualité d'une étude, quantifier la solidité statistique de l'étude (choix de l'échantillon, de la loi, etc...).

**À partir d'estimations ponctuelles de notre experience, on va chercher à en *quantifier son incertitude*. Pour cela, nous allons utiliser des *estimations ensemblistes* afin d'assurer une certaine garantie statistique sur notre experience.**

## Estimation d'intervalle

On réalise l'estimation d'un paramètre $\theta$, à partir de données $\vec{x} = (x_1, ..., x_n)$ générés selon les variables aléatoires $\vec{X} = (X_1, ..., X_n)$

> [!définition] 
> Soient $a(\vec{X})$ et $b(\vec{X})$ des statistiques de nos variables aléatoires $\vec{X}$ pour un paramètre $\theta$. Supposons que $a(\vec{X}) \le \theta \le b(\vec{X})$.
> 
> On appelle:
> 1. $[a(\vec{x}), b(\vec{x})]$ une **estimation d'intervalle**
> 2. $[a(\vec{X}), b(\vec{X})]$ un **estimateur d'intervalle**
>    
>    Une intervalle de confiance **de seuil $\gamma \in [0, 1]$  pour un paramètre $\theta$ est un estimateur d'intervalle $[a(\vec{X}), b(\vec{X})]$ tel que $\mathbb{P} (\theta \in [a(\vec{X}), b(\vec{X})]) = \gamma$**

> [!HINT] Remarque
> On se servira des **estimateurs** d'intervalle pour les résultats mathématiques qu'ils nous permettent d'avoir, mais nous utiliserons les **estimations** d'intervalles pour les valeurs numériques.

> [!HINT] Remarque
> - Le seuil $\gamma$ doit être assez élevé ($> 0.9$).
> - On cherche un encadrement de $\theta$ (fixé), les bornes de l'intervalle sont aléatoires.
> - $\gamma$ ne dépend pas de $\theta$.
> - En général, on construit l'intervalle de confiance pour $\theta$ à l'aide d'un **bon** estimateur $\widehat{\theta}$ de $\theta$. Il a la forme $I_\gamma = [\widehat{\theta} - \epsilon; \widehat{\theta} + \epsilon]$
> 
> ![rt](../estitheta.svg)

## Intervalles de confiance pour la loi normal

*Soit $\vec{X} = (X_1, ... , X_n)$ iid  $\hookrightarrow \mathcal{N}(\mu, \sigma^2)$. On suppose $\theta^2$ connu, et on cherche à estimer $\mu$ à l'aide d'une intervalle de confiance*

Soit $\bar{X}_n = \frac 1n \sum_{i = 1}^{n}X_i$ un estimateur de $\mu$. **Résultats pour $X_i \hookrightarrow \mathcal{N}(\mu, \sigma^2) : \bar{X} \hookrightarrow \mathcal{N}(\mu, \frac{\sigma^2}n)$, $X_i$ indépendantes.**

> [!warning] À ne pas confondre avec le [TCL]()

Soit $\widetilde{X} = \sqrt{n} . \frac{\bar{X}_n - \mu}\sigma$. On sait que $\widetilde{X} \hookrightarrow \mathcal{N}(0, 1)$. 

> [!NOTE]
> Globalement, toutes les v.a. que nous étudierons (ou presque) se rapprocheront  de lois réduites.

À partir de $\widetilde{X}$, on va obtenir un encadrement de $\mu$, selon un seuil de confiance $\gamma$. En suis les étapes suivantes :

- Fixons $\gamma$.
- On sait que $\exists \eta_\gamma, \xi_\gamma \in \mathbb{R}$ qui vérifient$\mathbb{P} (\widetilde{X} \in [\xi_\gamma, \eta\gamma]) = \gamma = \phi (\eta_\gamma) - \phi(\xi_\gamma)$
- On transforme notre intervalle pour faire apparaître $\bar{X}_n$ et $\mu$.
  Sachant que $\widetilde{X} = \sqrt{n} . \frac{\bar{X}_n - \mu}\sigma$, on a:
  $\xi_\gamma \le \widetilde{X} \le \eta_\gamma$ (connu et tabulé)
  $\Leftrightarrow \xi_\gamma \le \sqrt{n} \frac{\bar{X} - \mu }{\sigma} \le \eta_\gamma$
  $\Leftrightarrow \xi_\gamma . \frac{\sigma}{\sqrt n} \le \bar{X}_n - \mu  \le \eta_\gamma . \frac{\sigma}{\sqrt n}$
  $\Leftrightarrow \bar{X}_n - \eta_\gamma . \frac{\sigma}{\sqrt n} \le \mu \le \bar{X}_n -  \xi_\gamma . \frac{\sigma}{\sqrt n}$
- Par équivalences, $\mathbb{P} (\widetilde{X} \in [\eta_\gamma, \xi_\gamma]) = \gamma$ et $\gamma = \mathbb{P} (\mu \in [\bar{X}_n - \eta_\gamma \frac{\sigma}{\sqrt n}, \bar{X}_n - \xi_\gamma \frac{\sigma}{\sqrt n}])$ (par construction)

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

---

On a construit une intervalle de confiance pour $X \hookrightarrow \mathcal{N}(\mu, \sigma^2)$, sachant $\sigma^2$. En réalité, il n'y a pas de raison de connaitre sigma si on ne connait pas mu. 

En partant de l'exemple précédent, si on considère que $\sigma^2$ est inconnu, on peut se servir de la variance empirique via l'estimateur $S_n^2 = \frac 1n \times \sum_{i=1}^n (X_i - \bar{X}_n)^2$ (ou $S_n^{2\prime} = \frac {1}{n\color{red} - 1} \times \sum_{i=1}^n (X_i - \bar{X}_n)^2$ pour la version non-biaisé). Au lieu de $\widetilde{X}_n = \frac{\bar{X}_n - \mu}{\frac{\sigma}{\sqrt n}}$, on va utiliser $\widehat{X}_n = \sqrt n \times \frac{\bar{X}_n - \mu}{S_n^\prime}$

D'après le théorème de fisher, $\widehat{X}_n$ suit une loi de Student à $n - 1$ degrés de liberté : $\widehat{X}_n \hookrightarrow \mathcal{St}(n - 1)$. *On admet ce résultat.* **Cette loi est elle aussi tabulée.** 

Ainsi, pour un seuil de confiance $\gamma$, on peut trouver une grandeur $t_{n-1, \gamma}$ telle que $\mathbb{P} (| \widehat{X}_n | < t_{n-1, \gamma}) = \gamma$

Dans d'autres termes, on peut trouver un encadrement "tabulé" de $\widehat{X}_n$ qui pourra être traduit en une intervalle de confiance pour $\mu$ (**sans connaitre $\sigma$**)

> [!EXAMPLE]
> En reprenant l'analyse précédente , 
> $| \widehat{X}_n | < t_{n-1, \gamma} \Leftrightarrow - t_{n-1, \gamma} < \sqrt n \times \frac{\bar{X}_n - \mu}{S_n^\prime} < t_{n-1, \gamma}$
> 
> $\Leftrightarrow - t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n} < \bar{X}_n - \mu < t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}$
> 
> $\Leftrightarrow \bar{X}_n - t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n} < \mu < \bar{X}_n + t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}$
> 
> Donc $\mathbb{P} (| \widehat{X}_n | < t_{n-1, \gamma}) = \gamma = \mathbb{P} (\mu \in ]\bar{X}_n - t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}, \bar{X}_n + t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}[)$

Par conséquent, on a une formule de l'intervalle de confiance pour $\mu$, avec $\sigma$ inconnu, et de seuil $\gamma$.

$$\color{red} I_\gamma = ]\bar{X}_n - t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}, \bar{X}_n + t_{n-1, \gamma} \times \frac{S_n^\prime}{\sqrt n}[$$

> [!HINT] Remarque
> Le théorème de Fisher ne s'appliquent uniquement qu'à une intervalle de confiance sur $\mu$, pour des lois normales iid

## Intervalles de confiance pour la loi de Bernoulli

On part d'une experience de sondage d'un échantillon de $n$ individus sur une question avec deux réponses (oui et non). On note $X_i$ la variable aléatoire qui associe à l'individu à la question 1 si "oui" et 0 si "non".

**Hypothèse** : on associe à tout les individus $X_i \hookrightarrow \mathcal{Ber}(p) \forall i \in [\![1, n]\!]$ et que les $X_i$ sont mutuellement indépendants.

**Objectif** : Obtenir une estimation ensembliste sur $p$

**Démarche** :
1. On trouve un (bon) estimateur de $p$ : $\bar{X} = \frac 1n \sum X_i$ ($\mathbb{E}(\bar{X}_i) = p$ et $\mathbb{V}(\bar{X}_n)$ rend vers 0)
2. On applique le [Théorème Centrale Limite](ch3.md#Retour%20sur%20le%20Théorème%20Centrale%20Limite) comme avec les lois normales :

   $$\widetilde{X} = \frac{\bar{X}_n - p}{\sqrt {\frac{p(1 - p)}{n}} } \hookrightarrow_{n \rightarrow + \infty} \mathcal{N}(0, 1)$$

> Ici, l'idée est de s’affranchir des lois dépendant des paramètres (ici : p) pour retomber sur des lois "universelles" (ici, loi normales)

3. On construit un encadrement comme pour la [loi normal](#Intervalles%20de%20confiance%20pour%20la%20loi%20normal) : on se fixe un seuil $\gamma$ tel que $\mathbb{P} (\eta_\gamma < \widetilde{X}_n < \xi_\gamma) = \gamma$. Par équivalence, $n_\gamma < \frac{\bar{X}_n - p}{\sqrt {\frac{p(1 - p)}{n}} } < \xi_\gamma \Leftrightarrow \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} n_\gamma < p < \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} \xi_\gamma$
   Donc $\mathbb{P} (p \in ] \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} n_\gamma ; \bar{X}_n -\sqrt {\frac{p(1 - p)}{n}} \xi_\gamma [) = \gamma$

-> **Problème** : on a toujours besoin de $p$ pour estimer $p$... Ce qui est contre intuitif.

-> **Solution** : on majore/approxime $p(1 - p)$.

4. On approxime $p(1 - p)$ par $\bar{x}_n(1 - \bar{x}_n)$ ou on le majore, sachant que $0 < p < 1$.
   $p(1 - p)^\prime = 1 - 2p \Leftrightarrow p = \frac 12 \Leftrightarrow p(1 - p) \le \frac 14$.
   Ces deux majorations nous permettent de remplacer $p(1 - p)$ dans l'intervalle de confiance, donc de ne plus dépendre de p.

> [!EXAMPLE]
> On a 36 individus, sondé, et les résultats du sondage donnent $\bar{x}_n = 0.42$. On veut construire une intervalle de confiance pour $\gamma = 0.95$.
> 
> Pour une intervalle "approximé" :
>
>$$I_\gamma = [0.42 - 1.96 \sqrt \frac{0.42 ( 1 - 0.42)}{36}, 0.42 + 1.96 \sqrt \frac{0.42 ( 1 - 0.42)}{36}] = [0.26, 0.56]$$
>
>Pour une intervalle de confiance "absolue" :
>
>$$I_\gamma = [0.42 - 1.96 \sqrt \frac{1}{4.36}, 0.42 + 1.96 \sqrt \frac{1}{4.36}] = [0.257, 0.563]$$

**Observations** : Les intervalles absolues sont toujours plus larges que celles approximées. 

> [!important] 
> Quelques valeurs notables:
> - Pour $\gamma = 0.95$, on a $\xi_\gamma = 1.96$ et $\eta_\gamma = - 1.96$
> - Pour $\gamma = 0.99$, on a $\xi_\gamma = 2.58$ et $\eta_\gamma = - 2.58$

On a construit deux types d'intervalles de confiance pour p, paramètre de la loi de Bernoulli, $I_{\gamma, approx}$ et $I_{\gamma, abs}$. Pour *l'intervalle approximative*, la largeur dépend de la taille de $\widehat{p}$ alors que *l'intervalle absolue* majore $p(1 - p)$ par $\frac 14$ donc indépendant de p. 

Dans les deux cas, on retrouve une idée d'une intervalle $I_r = [\widehat{p} - r ; \widehat{p} + r]$. Avec l'intervalle approximative, $r = \eta_\gamma \sqrt { \frac {\widehat{p} (1 - \widehat{p})}{n}}$. Avec l'intervalle absolue, $r = \eta_\gamma \frac {1}{2 \sqrt n}$.

Question : On veut maintenant obtenir une intervalle de confiance pour p avec une largeur de ±3%. (sondage ou appareil de mesure, peu importe). **Quelle est la taille de l'échantillon qui permet d'obtenir cette largeur ?** Solution 1 : demander à toute la population. Cependant, cette option est peu réaliste. On cherche donc, à seuil fixé $\gamma$, si on a une largeur imposée $2r = 6$%, on isole n
$I_{\gamma, approx} = \eta_\gamma^2  \frac{\widehat{p} (1 - \widehat{p}} {r^2}$ et $I_{\gamma, abs} = \eta_\gamma^2 \frac{1}{4r^2}$.

> [!EXAMPLE]
> Pour $2r = 0.06$ comme précédemment : pour $\gamma = 0.95, n \approx 1067$. Pour $\gamma = 0.99, n \approx 1849$. 

> [!HINT] Remarque
> Le développement effectuée dans le cadre de l'intervalle de confiance pour le paramètre $p$ de la loi de Bernoulli s'applique aussi à d'autres types de lois. Il suffit d'appliquer la construction étape par étape.
