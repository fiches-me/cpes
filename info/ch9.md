---
title: Architecture Matérielle
tags:
  - info
  - cours
finished: false
---

# Architecture Matérielle

## Introduction

> On distingue les langages **compilés** et **interprétés** : c'est l'introduction sur les "niveaux" de code entre l'humain et la machine. Si vous voulez vraiment le schéma, dites-le moi, sinon je vous l'épargne (et mon Figma aussi).

## En Pratique

### Les composants d'un ordinateur

1. Écran
2. Carte mère
3. Processeur (*CPU*)
4. Mémoire Vive (*RAM*)
5. Mémoire Persistante (Disque dur, remplacé par des SDD)
6. Cartes périphériques
    - Carte graphique (*GPU*)
    - Carte réseau (Wifi, Bluetooth)
    - Carte Son
7. Clavier
8. Souris
9. Lecteur CD/DVD (oui, ce PC est une antiquité).
5. Mémoire persistante (disque dur, de plus en plus remplacé par des SSD)

### Histoire de l'informatique

- Les algorithmes et les premières machines à calculer datent de l'antiquité
- De nombreuses vont essayer de suivre les modèles des horloges, comme la Pascaline
- 1846 machine à ruban perforés
- 1904 tubes à vides, ampoules, dernier composant nécessaire pour créer des ordinateur
- 1940 apparition des premiers ordinateurs respectant l'architecture de Von Neumann
- 1948 apparition du transistor

### Histoire de l'informatique

- Les algorithmes et les premières machines à calculer datent de l'Antiquité.
- De nombreuses machines s'inspirent des mécanismes d'horlogerie (ex. la Pascaline).
- 1846 : développement des machines à ruban perforé.
- Début du XXe siècle (années 1900) : utilisation des tubes à vide pour les premiers calculateurs électroniques.
- 1940 : apparition des premiers ordinateurs respectant l'architecture de Von Neumann.
- 1948 : invention du transistor.

### Modèle de Von Neumann

>< il manque un schéma ! [fiches.me a besoin d'aide !](../contribution/index.md) >

#### Processeur

Dans le **Modèle de Von Neumann**, le **processeur** est le composant principal qui effectue tout les calculs et donne des instructions aux autres composants.  Le processeur est composé de :
- Des **Registres** pour enregistrer l'information
- Un **Accumulateur** qui accumule de l'énergie pour l'*UAL*.
- Une **Unité Arithmético-logique** qui effectue les calculs grâce à l'énergie de son accumulateur et renvoie les résultats à la mémoire vive
- Une **Unité de Contrôle** 

#### Processeur

Dans le **modèle de Von Neumann**, le **processeur** est le composant principal qui effectue les calculs et coordonne les autres composants. Le processeur comprend :
- des **registres** pour stocker temporairement l'information ;
- un **accumulateur** utilisé par l'UAL ;
- une **Unité Arithmético-Logique (UAL)** qui effectue les opérations arithmétiques et logiques ;
- une **unité de contrôle** qui orchestre l'exécution des instructions.

#### Mémoire

Elle contient les données de l'ordinateur, dont nos programmes. Elle existe sous quatres formes :

1. La **mémoire persistante** contient les données fixes et "figées" des programmes.
2. La **méoire vive** contient les informations necessaire aux calculs, mais pas les données en tant que tel. Necessite du courrant.
3. La **mémoire cache** qui est une sorte de mémoire vive stocké dans la mémoire principale
4. La **mémoire morte**, persistante et non modifiable, contient les composants crtitiques de l'ordinateur comme le BIOS.

#### Mémoire

La mémoire contient les données et les programmes. On distingue quatre grandes formes :

1. **Mémoire persistante** : stockage long terme (disque dur, SSD) ;
2. **Mémoire vive (RAM)** : utilisée pendant l'exécution des programmes ; volative et nécessite de l'alimentation électrique ;
3. **Mémoire cache** : mémoire rapide entre le processeur et la RAM pour accélérer les accès ;
4. **Mémoire morte (ROM)** : mémoires persistantes non modifiables contenant des éléments critiques (ex. BIOS/firmware).

#### Bus de données

Les données sont ensuite transportés par lots de 32/64 bits entre différents composants. *Ce sont les lignes imprimés sur la carte mère*

#### Bus de données

Les données sont transportées par groupes de 32/64 bits entre les composants via des bus physiques et des pistes imprimées sur la carte mère.

#### Entrées/Sorties (IO)

Clavier Vs Écran. Ok pour ne pas être étendu ici.

### Conclusion

Les ordinateurs sont des machines alimentés par de l'electricité, qui effectuent des actions déterminés par un développeur en fonction des entrées d'un utilisateur.

### Conclusion

Les ordinateurs sont des machines alimentées par l'électricité, qui effectuent des actions déterminées par des programmes en fonction des entrées d'un utilisateur.

## En Marche

### Cycles d'exécution

### Système multi-processeurs
