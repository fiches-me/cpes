---
title: "IA: Introduction"
tags:
  - ia
finished: true
---

# IA: Introduction

## Qu'es ce que intelligence artificielle ?

Petit background historique : l'IA date des années 50 (années 40 pour l'informatique). 3 grand projets pourrait être qualifiés *comme des IA* :

1. Deep Blue
2. AlphaGo
3. ChatGPT

**Pourtant, aucune de ces 3 programmes n’atteigne pas le niveau d'intelligence humain qu'on peut qualifier comme nécessaire pour une IA.** Il y a débat sur la légitimité de la définition. La plus proche est la suivante :

> [!DÉFINITION]
> L'**IA** désigne la possibilité pour une machine de reproduire des comportements liés aux humains, tels que le raisonnement, la planification, la créativité. 

D'autres exemples existent plus clair existent :

- Siri n'est pas vraiment une IA, même si il utilise ChatGPT récemment
- Les photos sont traités par de l'IA sur téléphone
- Traducteur de texte
- Voitures Autonomes

## Différent types d'IA

L'IA faible est **spécialisée**, alors qu'une IA forte est **multitâche**. Mais elle doit aussi atteindre le niveau d'intelligence humain, donc ChatGPT n'est pas une IA forte.

Une IA symbolique est lié à la **programmation**, elle ne peux pas faire d'erreurs (utilise des arbres de décisions). L'IA statistique utilise des probabilités, et **elle peut donc se tromper**.

> [!NOTE]
> Dans ce cours, nous n'aborderons uniquement le **machine learning**, et pas du tout l'**IA symbolique**.

## Différentes méthodes d'apprentissage

### Supervisé

Il est important de donner à l'IA **les données d'apprentissages**. Pour mon IA détectrices d'images (chien & chat), il faut lui donner des images en tant qu'exemple, des **données étiquetées**.

### Non supervisé

Ici, les données étiquetées ne sont pas doné. Il faut que l'IA forme de groupe, pas forcément nommées.

### Par Renforcement
L'IA joue toute seule. On lui explique les règles, et on lui offre des récompenses. Elle comprend elle même quoi faire et comment le faire mieux.

## Principes de l'apprentissage supervisé

1. Acquisition et Étiquetage des données
2. Entraînement : détermination des paramètres pour fonctionner
3. Validation
4. Utilisation (que nous n'utiliserons pas)

Lors de l'apprentissage, il y a deux biais :

1. Un biais implicite :  un manque de donnée où certaines citations ne sont pas exploités. 
2. Un biais explicite : un mauvaise apprentissage, si on lui dit d'aller tout droit dans un mur par ex.