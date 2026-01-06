---
title: Test
order: 10
---
# Fiche Test : interactions
## Le lien Informationnel : ADN -> ARN -> Protéines

C'est le "Dogme Central" de la biologie moléculaire. Tes notes en parlent séparément dans g4.md (Acides Nucléiques) et g5.md (Protéines), mais voici le lien fonctionnel.
Les protéines sont les ouvrières (g5.md : enzymes, transport, structure), mais elles ne "savent" pas comment se construire. Le plan est dans l'ADN.
Le mécanisme étape par étape :
 - Stockage (ADN - g4.md) : Dans le noyau, l'ADN contient la séquence des gènes. C'est la recette archivée.
 - Transcription (ARN - g4.md) : On ne sort pas l'ADN du noyau (trop risqué). On en fait une copie "jetable" et mobile : l'ARNm (Messager).
 - Traduction (Protéines - g5.md) :
   - L'ARNm sort dans le cytoplasme.
   - Il rencontre un Ribosome (composé d'ARNr et de protéines).
   - Le ribosome "lit" l'ARNm.
   - Les ARNt (Transfert) apportent les Acides Aminés (g5.md) correspondants à la lecture.
   - Le ribosome lie les acides aminés entre eux (Liaisons peptidiques) \to Création de la protéine.
Schéma ASCII du flux d'information :

```python
   NOYAU                                    CYTOPLASME
+-----------------+                   +------------------------------+
|   ADN (Gène)    |                   |                              |
|   (ATGC...)     |                   |  [Acides Aminés libres]      |
|       |         |                   |      (Val, Leu, Met...)      |
| Transcription   |                   |            |                 |
|       v         |                   |            v                 |
|      ARNm       | ----------------> |  ARNm + Ribosome + ARNt      |
| (Copie mobile)  |   (Sortie du      |            |                 |
+-----------------+    Noyau)         |       Traduction             |
                                      |            v                 |
                                      |    Chaîne Polypeptidique     |
                                      |            |                 |
                                      |       Repliement             |
                                      |            v                 |
                                      |  PROTÉINE FONCTIONNELLE      |
                                      +------------------------------+
```

## Le lien Structurel : Oses + Protéines (Glycoprotéines)

Tu demandais comment les oses interviennent dans la création des protéines. Ils ne servent pas à fabriquer la chaîne d'acides aminés, mais ils viennent souvent se greffer dessus après coup.
 - Dans tes notes (g3.md et g2.md) : Il est mentionné les "Glycoprotéines" et le "Glycocalyx".
 - Le lien : Une fois la protéine fabriquée, la cellule lui ajoute souvent des petites chaînes de sucres (oses). C'est la Glycosylation.
 - À quoi ça sert ? C'est une étiquette d'identité ou de protection. Par exemple, les groupes sanguins (A, B, O) sont définis par des sucres collés sur des protéines à la surface de tes globules rouges.
Schéma simplifié de la Glycoprotéine :

```python
       (Extérieur de la cellule)
              |
      O--O--O (Chaîne de sucre / Ose)
      |       ^-- Sert à la reconnaissance (Carte d'identité)
  ~~~~P~~~~   <-- Protéine insérée dans la membrane
  |||||||||
  Membrane
  |||||||||
```

## Le lien Énergétique : Glycogène/Lipides -> ATP

C'est le lien entre la matière (g2 Lipides, g3 Glucides) et l'énergie utilisable (g4 ATP).
L'ATP (g4.md) est la monnaie. Le Glucose et les Triglycérides sont le compte en banque. Pour dépenser l'argent, il faut faire un retrait (Oxydation).
 - Le principe : On "casse" les liaisons carbone-hydrogène (très riches en énergie) des sucres et des graisses. Cette énergie libérée sert à "recoller" un phosphate sur de l'ADP pour faire de l'ATP.
Le processus (Métabolisme simplifié) :
 - Sources (g2 & g3) :
   - Le Glycogène est coupé en petits Glucoses.
   - Les Triglycérides sont coupés en Acides Gras.
 - Transformation :
   - Le Glucose subit la Glycolyse.
   - Les Acides Gras subissent la Bêta-oxydation.
 - Le Carrefour : Ces deux voies finissent par produire la même molécule clé : l'Acétyl-CoA.
 - L'Usine à ATP (Mitochondrie) :
   - L'Acétyl-CoA entre dans le Cycle de Krebs.
   - Cela produit des électrons qui activent une "turbine" (ATP Synthase) qui fabrique l'ATP.

> [!IMPORTANT]
> Les lipides sont plus réduits (plus d'hydrogènes), donc ils libèrent BEAUCOUP plus d'énergie (130 ATP pour un acide gras vs 38 ATP pour un glucose).

Schéma de synthèse énergétique :

```python
   GLUCIDES (g3)                  LIPIDES (g2)
  (Glycogène)                   (Triglycérides)
       |                              |
       v                              v
    Glucose                      Acides Gras
       |                              |
  (Glycolyse)                  (Bêta-oxydation)
       |                              |
       +------------->  <-------------+
                      |
                 Acétyl-CoA   (Le carrefour central)
                      |
                      v
             [ Cycle de Krebs ]
             (Dans la mitochondrie)
                      |
                      v
           Libération d'Énergie (électrons)
                      |
                      v
      ADP + Phosphate ------> ATP  (Molécule véhicule - g4)
```

## Résumé des interactions

Pour réussir ta L1, visualise la cellule comme une ville :
 - ADN (Mairie) : Contient les plans.
 - ARNm (Photocopie du plan) : Transmet l'ordre aux chantiers.
 - Protéines (Ouvriers) : Construites grâce aux plans, elles font tout le travail.
 - Glucides/Lipides (Centrales électriques) : Sont brûlés pour fournir l'électricité (ATP) nécessaire aux ouvriers (Protéines) pour travailler.
