---
title: 📠 Bases de données relationnelles
tags:
  - info
  - cours
---
# 📠 Bases de données relationnelles

Les bases de données (abrégé BDD) sont apparues à la fin des années 60 pour répondre à un besoin de gestion qualitative et quantitative des données informatiques. Les BDD relationnelles issues des recherches de Edgar Codd (1923 - 2003) sont celles qui ont connu le plus grand essor et qui sont le plus utilisées aujourd'hui.

Les **systèmes de gestions de bases de données (SGBD)** (*Database Management System*) sont des applications/logiciels informatiques permettant de créer et de gérer des bases de données (ex: PostgreSQL).

Le language **SQL (Structured Query Language)** est le language commun à presque tous les SGBD. 

## Définition
**Modèle Relationnel** : modèle dans lequel les données sont représentés par des n-uplets appelés <strong id="enregistrements">enregistrements</strong> (ou **entités**) dabs des **tables** (aussi appelés **relations**). Les colones de la table sont appelés **propriétés** ou **attributs**. Une table de dimensions $m \times n$ est dite de **cardinal** $m$ et d'**arité** $n$.

**Base de données relationnelles** : ensemble de tables/relations.

**Schéma Relationel** : schéma représentant une relation, l'ensemble de ses attributs et de leurs domaines. *Voir exemples si dessous.*

**Schéma d'une BDD** : schéma représentant l'ensemble des tables d'une base de données, sous forme de schéma relationnel. *Voir exemples si dessous.*

**Clé Primaire** : Attribut ou ensemble d'attributs *unique(s)* permettant d'identifier chaque [enregistrements](#enregistrements)

**Clé Étrangère** :  Attribut ou ensemble d'attributs représentant une clef primaire provenant d'une autre table.

| Exemple de Texte                                                                                                                                              | Exemple de Tableau                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Films**:<br>- <u>id_film</u> `int`<br>- titre `str`<br>- annee `int`<br>**Citations**:<br>- <u>id_citations</u> `int`<br>- texte `str`<br>- *id_film* `int` | ![Exemple de schéma relationnel](./relations.svg) |
## Intégrité et anomalies
### Principes Généraux
Dans le modèle relationnel, on sépare les données relatives en plusieurs tables tel que :

- Chaque table contient des données relatives à un même sujet
- On évite toute redondance des données (stocker 2 fois la même chose)
- On ne stock pas de résultats, on fera les calculs après

> [!QUESTION] Pourquoi ?
> Malgré les améliorations considérables de l'informatique depuis les années 2000, manipuler des grosses base de données est **extrêmement coûteux**. Des requêtes SQL peuvent prendre plusieurs heures, si ce n'est des jours, sur des bases de données de quelques Go. Il est donc important, *toujours aujourd'hui,* de réduire la taille de ses bases de données
 
### Contraintes d'intégrités
