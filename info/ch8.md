---
title: 📠 Bases de données relationnelles
tags:
  - info
  - cours
finished: true
---

# 📠 Bases de données relationnelles

> [!IMPORTANT]
> Besoin d'un résumé efficace ? Regardez [cette fiche de révision](https://kxs.fr/cours/mysql/) par mon ancien prof d'info

Les bases de données (abrégé BDD) sont apparues à la fin des années 60 pour répondre à un besoin de gestion qualitative et quantitative des données informatiques. Les BDD relationnelles issues des recherches de Edgar Codd (1923 - 2003) sont celles qui ont connu le plus grand essor et qui sont le plus utilisées aujourd'hui.

Les **systèmes de gestions de bases de données (SGBD)** (*Database Management System*) sont des applications/logiciels informatiques permettant de créer et de gérer des bases de données (ex: PostgreSQL).

Le language **SQL (Structured Query Language)** est le language commun à presque tous les SGBD. 

## Définition

**Modèle Relationnel** : modèle dans lequel les données sont représentés par des n-uplets appelés <strong id="enregistrements">enregistrements</strong> (ou **entités**) dans des **tables** (aussi appelés **relations**). Les colones de la table sont appelés **propriétés** ou **attributs**. Une table de dimensions $m \times n$ est dite de **cardinal** $m$ et d'**arité** $n$.

**Base de données relationnelles** : ensemble de tables/relations.

**Schéma Relationel** : schéma représentant une relation, l'ensemble de ses attributs et de leurs domaines. *Voir exemples si dessous.*

**Schéma d'une BDD** : schéma représentant l'ensemble des tables d'une base de données, sous forme de schéma relationnel. *Voir exemples si dessous.*

**Clé Primaire** : Attribut ou ensemble d'attributs *unique(s)* permettant d'identifier chaque [enregistrements](#enregistrements). *Attributs soulignés dans l'exemple si dessous.*

**Clé Étrangère** :  Attribut ou ensemble d'attributs représentant une clef primaire provenant d'une autre table. *Attributs en italique dans l'exemple si dessous.*

| Exemple de Texte                                                                                                                                              | Exemple de Tableau                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Films**:<br>- <u>id_film</u> `int`<br>- titre `str`<br>- annee `int`<br>**Citations**:<br>- <u>id_citations</u> `int`<br>- texte `str`<br>- *id_film* `int` | ![Exemple de schéma relationnel](./relations.svg) |

> Graphique de [KXS.FR](https://kxs.fr/cours/bd)

## Intégrité et anomalies

### Principes Généraux

Dans le modèle relationnel, on sépare les données relatives en plusieurs tables tel que :

- Chaque table contient des données relatives à un même sujet
- On évite toute redondance des données (stocker 2 fois la même chose)
- On ne stock pas de résultats, on fera les calculs après.
- Chaque attribut de la table doit contenir une seule information (nom et prénom sont 2 attributs différents).
- On référence les différentes informations des tables à l'aide de clés.

> [!QUESTION] Pourquoi ?
> Malgré les améliorations considérables de l'informatique depuis les années 2000, manipuler des grosses base de données est **extrêmement coûteux**. Des requêtes SQL peuvent prendre plusieurs heures, si ce n'est des jours, sur des bases de données de quelques Go. Il est donc important, *toujours aujourd'hui,* de réduire la taille de ses bases de données

Pour créer un model relationnel, on doit donc :

1. Déterminer les objets que l'on souhaite manipuler
2. Modéliser les objets comme des relations en déterminant quels sont les relations et quels sont les attributs. On décide donc les schémas pour chaque relation, avec les "bon" domaines pour chacun des attributs.
3. Définir les contraintes de la BDD, c'est à dire les propriétés logiques que nos données doivent respecter.

### Contraintes d'intégrités

Il existe 4 contraintes applicables à des tables :

1. **Contrainte de domaine** : les valeurs d'un attribut doivent toutes appartenir à un même domaine prédéfinit
2. **Contrainte de relation** : les clés primaires doivent êtres uniques (et donc non nulles).
3. **Contrainte de référence** : chaque clé étrangère doit faire référence à une clé primaire *existante dans la BDD*.
4. **Contrainte utilisateur** : contrainte(s) ajoutée(s) par le développeur.

> [!WARNING] Attention
> Il n'est **pas possible** de supprimer un enregistrement si sa clef primaire est présente en tant que clef étrangère dans d'autres tables. Il faut alors supprimer ces enregistrement *avant* de supprimer celui de la table "primaire".

### Structure et anomalies

La **structure d'une BDDR** est un ensemble de schémas relationnels.

Des anomalies peuvent apparaîtrent dans cette structure si des modifications non prévues ont été effectuées. On distingue :

- les **redondances de données** qui correspondent au contraintes de relations
- les **anomalies d'insertion** qui correspondent à toutes les contraintes
- les **anomalies de suppression** qui correspondent au contraintes de référence
- les **anomalies de mises à jour** qui correspondent à toutes les contraintes
