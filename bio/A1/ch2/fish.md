# Fiche — Enzymes et Cinétique Enzymatique

## Introduction
- **Métabolisme**: ensemble des réactions biochimiques au sein d'un organisme, d'un organe ou d'une cellule.  
- **Rôle des enzymes**: catalyseurs protéiques qui accélèrent les réactions sans modifier l'équilibre thermodynamique; ils sont régénérés à la fin de la réaction.

## Propriétés générales d’un catalyseur
- **Thermodynamique**: une enzyme accélère uniquement des réactions qui sont déjà possibles thermodynamiquement (ΔG favorable ou défavorable selon la réaction).
- **Équilibre inchangé**: l'état d'équilibre n'est pas modifié, seule la vitesse change.
- **Régénération**: l'enzyme n'est pas consommée (elle revient à son état initial).
- **Transition**: stabilisation de l'état de transition abaisse l'énergie d'activation.

## Définitions essentielles
- **Enzyme**: protéine (ou parfois ARN) qui augmente la vitesse d'une réaction en stabilisant l'état de transition.
- **Substrat**: molécule sur laquelle agit l'enzyme.
- **Produit**: molécule formée après la réaction enzymatique.
- **Site actif**: région de l'enzyme où se fixe le substrat (comprend site de fixation + site catalytique).
- **Cofacteur**: ion inorganique (ex. Mg2+, Zn2+) nécessaire pour l'activité enzymatique.
- **Coenzyme**: cofacteur organique, souvent dérivé de vitamines (ex. NAD+/NADH, FAD/FADH2, CoA).
- **Complexe enzyme‑substrat**: état transitoire E+S ↔ [ES] → E+P.

## Schéma général d’une réaction enzymatique
$$E + S \xrightleftharpoons[k_{-1}]{k_1} [ES] \xrightarrow{k_2} E + P$$

## Classes usuelles d'enzymes et équations-bilans (exemples)
- **Hydrolases** (hydrolyse de liaisons)
  - Général: $$\mathrm{A{-}B + H_2O \rightarrow A{-}OH + B{-}H}$$
  - Protéase (ex.): hydrolyse peptidique :
    $$\mathrm{Peptide + H_2O \rightarrow Acides\;aminés}$$
  - Nuclease (ex.): hydrolyse d'acides nucléiques :
    $$\mathrm{ADN + n\;H_2O \rightarrow \text{nucléotides}}$$
  - Saccharase (sucrase) : saccharose → glucose + fructose :
    $$\mathrm{C_{12}H_{22}O_{11} + H_2O \rightarrow C_6H_{12}O_6 + C_6H_{12}O_6}$$

- **Kinases** (transfert de phosphate depuis l'ATP)
  - Général: $$\mathrm{Substrat + ATP \rightarrow Substrat{-}P + ADP}$$
  - Hexokinase / Glucokinase (phosphorylation du glucose) :
    $$\mathrm{Glucose + ATP \rightarrow Glucose\!-\!6\!-\!phosphate + ADP}$$

- **Phosphatases** (retrait de phosphate par hydrolyse)
  - Général: $$\mathrm{Substrat{-}P + H_2O \rightarrow Substrat + P_i}$$

- **ATPases** (hydrolyse de l'ATP pour libérer énergie)
  - $$\mathrm{ATP + H_2O \rightarrow ADP + P_i + H^+}$$

- **Oxydoréductases** (transferts d'électrons)
  - Couple NAD+/NADH (ex. lactate déshydrogénase) :
    $$\mathrm{Pyruvate + NADH + H^+ \rightleftharpoons Lactate + NAD^+}$$
  - Exemple général d'oxydation d'alcool :
    $$\mathrm{RCH_2OH + NAD^+ \rightarrow RCHO + NADH + H^+}$$

- **Synthases / Condensations**
  - Général (condensation) : $$\mathrm{A + B \rightarrow AB + H_2O}$$
  - Glycogène synthase (ex., schéma simplifié avec UDP‑glucose) :
    $$\mathrm{(Glycogène)_n + UDP\!-\!glucose \rightarrow (Glycogène)_{n+1} + UDP}$$
  - Glycogène phosphorylase (dégradation) :
    $$\mathrm{(Glycogène)_n + P_i \rightarrow (Glycogène)_{n-1} + Glucose\!-\!1\!-\!phosphate}$$
  - Phosphoglucomutase (interconversion) :
    $$\mathrm{Glucose\!-\!1\!-\!phosphate \rightleftharpoons Glucose\!-\!6\!-\!phosphate}$$

## Cinétique enzymatique (niveau Licence 1)
- **Équation de Michaelis–Menten** :
  $$v = \frac{V_{max}\,[S]}{K_M + [S]}$$
  - où $v$ = vitesse initiale, $[S]$ = concentration de substrat, $V_{max}$ = vitesse maximale.
- **Constante de Michaelis** :
  $$K_M = \frac{k_{-1}+k_2}{k_1}$$
  - Interprétation : $K_M$ représente la concentration de substrat à laquelle $v = V_{max}/2$. Plus $K_M$ est faible, plus l'affinité enzyme–substrat est élevée.
- **Linéarisation (Lineweaver–Burk)** :
  $$\frac{1}{v} = \frac{K_M}{V_{max}}\cdot\frac{1}{[S]} + \frac{1}{V_{max}}$$
  - Utile pour extraire $K_M$ et $V_{max}$ à partir de mesures expérimentales.
- **kcat et efficacité catalytique** :
  $$k_{cat}=\frac{V_{max}}{[E]_T}\qquad\text{et}\qquad\text{efficacité}=\frac{k_{cat}}{K_M}$$
- **Allostérie et coefficient de Hill** (enzymes multisous-unités) :
  - Forme sigmoïde; équation simplifiée (Hill) :
    $$v = V_{max}\frac{[S]^n}{K_{0.5}^n + [S]^n}$$
  - $n$ > 1 : coopération positive; $n=1$ : pas de coopération.

## Liens logiques et conséquences (cause ↔ effet)
- **Disponibilité des coenzymes** (ex. NAD+) : si limitée, la réaction dépendante de ce coenzyme ralentit (cause → effet).
- **pH / Température** : variation modifie l'état ionisé des AA du site actif et la conformation → perte d'activité (dégradation/ dénaturation).
- **Inhibition produit** : ex. hexokinase est inhibée par son produit Glucose‑6‑P; glucokinase ne l'est pas → conséquence physiologique (voir ci‑dessous).
- **Catalyse n’altère pas l’équilibre** : si une voie est thermodynamiquement défavorable, une enzyme seule ne la rend pas possible sans couplage.

## Cas pratique — Hexokinase vs Glucokinase
- **Réaction commune** :
  $$\mathrm{Glucose + ATP \xrightarrow{hexokinase/glucokinase} Glucose\!-\!6\!-\!phosphate + ADP}$$
- **Différences** :
  - **Hexokinase**: forte affinité (faible $K_M$), présente dans la plupart des tissus (muscle, cerveau) → capte rapidement le glucose à faibles concentrations; inhibée par Glucose‑6‑P.
  - **Glucokinase** (hexokinase IV): faible affinité (grand $K_M$), localisée surtout dans le foie et les cellules β pancréatiques → active lorsque la glycémie est élevée; non inhibée par G6P → permet au foie de "tamponner" l'excès de glucose.
- **Conséquence physiologique**: la différence de $K_M$ permet une régulation fine du partage du glucose entre tissus et réserve hépatique.

## Tableau — répartition (corrigé)
- Légende: Oui = enzyme présente; Non = enzyme absente ou très faible.

| Enzyme                  | Foie | Muscle | Adipocytes | Neurones |
|-------------------------|:----:|:------:|:---------:|:--------:|
| Glycogène synthase      | Oui  | Oui    | Non       | Non     |
| Glycogène phosphorylase | Oui  | Oui    | Non       | Non     |
| Phosphoglucomutase      | Oui  | Oui    | Non       | Non     |
| Glucokinase (HK IV)     | Oui  | Non    | Non       | Non     |
| Glucose‑6‑phosphatase   | Oui  | Non    | Non       | Non     |

## Bonnes pratiques expérimentales (L1)
- Mesurer la vitesse initiale $v_i$ à différentes concentrations $[S]_i$ pour éviter l’effet produit/inhibition.
- Utiliser des conditions constantes (température, pH, ionicité) et doser rapidement les produits/substrats.
- Tracer $v$ vs $[S]$ (Michaelis–Menten) puis linéariser si nécessaire (Lineweaver–Burk).

## Points clés à retenir
- **Fonction**: les enzymes accélèrent les réactions sans changer l'équilibre.
- **Spécificité**: chaque enzyme a une spécificité de substrat et d’action.
- **Kinetique**: $K_M$ indique l’affinité; $V_{max}$ indique la capacité catalytique; $k_{cat}/K_M$ décrit l’efficacité.
- **Régulation**: disponibilité des cofacteurs, inhibitions, allostérie et modification covalente (ex. phosphorylation) contrôlent l’activité enzymatique.
- **Physiologie**: différences entre isoenzymes (ex. hexokinase vs glucokinase) expliquent le rôle différencié des tissus.