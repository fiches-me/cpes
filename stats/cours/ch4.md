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

Les différences d'estimations donnent certaines informations sur l'assurance/la qualité d'une étude, quantifier la solidité statistique de l'étude (choix de l'échantillon, de la loi, etc...).

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

