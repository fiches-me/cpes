# 📚 Fiche de Révision Globale : A1, A2, A3, A4

Cette fiche compile les concepts clés, formules et mécanismes des axes de biologie, en y intégrant des corrections et des apports de connaissances complémentaires (surlignés avec `==`).

---

## 🧬 Axe 1 : Biochimie & Métabolisme

### 1. Enzymes et Cinétique Enzymatique
Les enzymes (= catalyseurs biologiques, en majorité protéiques, ou ==parfois des ribozymes d'ARN==) accélèrent les réactions sans modifier l'équilibre thermodynamique final ($\Delta G$). ==Elles abaissent l'énergie d'activation en stabilisant l'état de transition du complexe Enzyme-Substrat.==

#### Formules et Classes Clés
- **Cinétique de Michaelis-Menten** :
  $v = \frac{V_{max}\,[S]}{K_M + [S]}$ avec $K_M = \frac{k_{-1}+k_2}{k_1}$ (==$K_M$ est inversement proportionnel à l'affinité enzyme-substrat, et s'exprime en mmol/L==).
- **Rendement (Efficacité)** : ==$\frac{k_{cat}}{K_M}$== où $k_{cat} = \frac{V_{max}}{[E]_T}$ (==constante catalytique ou *turnover number* identifiant le nombre de molécules transformées par molécule d'enzyme en une seconde==).
- **Allostérie (Modèle de Hill, enzymes à multi-sous-unités)** :
  $v = V_{max}\frac{[S]^n}{K_{0.5}^n + [S]^n}$ (==Si $n>1$, il y a coopérativité positive : ex. Hémoglobine==).
- **Hydrolases** : $A{-}B + H_2O \rightarrow A{-}OH + B{-}H$
- **Kinases** (ex. Hexokinase/Glucokinase) : $Glucose + ATP \rightarrow Glucose\!-\!6\!-\!phosphate + ADP$
- **Oxydoréductases** : $Pyruvate + NADH + H^+ \rightleftharpoons Lactate + NAD^+$
- ==**Isomérases** : Catalysent les réarrangements intramoléculaires sans ajouter ou perdre d'atomes (ex. Glucose-6-P $\rightleftharpoons$ Fructose-6-P)==.

*Exemple comparatif : Hexokinase vs Glucokinase.*
L'Hexokinase (présente un peu partout) a un **faible** $K_M$ (haute affinité) et est inhibée par son produit. La Glucokinase (foie/pancréas) a un **fort** $K_M$ (faible affinité) mais ==n'est pas inhibée par le G6-P, ce qui permet de stocker massivement le glucose post-prandial sous forme de glycogène hépatique==.

### 2. Le catabolisme oxydatif et la synthèse d'ATP
La respiration cellulaire transforme le glucose en ATP de façon ralentie en plusieurs étapes pour extraire un maximum d'électrons (pouvoir réducteur).

- **La Glycolyse (Cytosol)** : Convertit 1 Glucose $\rightarrow$ 2 Pyruvates. Bilan : +2 ATP, +2 NADH,H$^+$. ==La réaction catalysée par la phosphofructokinase-1 (PFK-1) est l'étape majeure de contrôle métabolique.== En conditions anaérobies, on a **fermentation** (lactique ou alcoolique chez les levures) afin de ==régénérer d'urgence le NAD$^+$ pour maintenir la glycolyse==.
- **Réaction de transition (Matrice mitochondriale)** : Décarboxylation oxydative ; Pyruvate $\rightarrow$ Acétyl-CoA. Bilan : -1 CO$_2$, +1 NADH,H$^+$ ==par pyruvate. Catalysée par l'énorme complexe de la Pyruvate Déshydrogénase (irréversible)==.
- **Cycle de Krebs (Matrice mitochondriale)** : Oxydation complète cyclique des 2 carbones de l'Acétyl-CoA. Bilan par tour : 3 NADH,H$^+$, 1 FADH$_2$, 1 GTP (qui équivaut à 1 ATP) ==et 2 CO$_2$ formés qui sont libérés==.
- **La chaîne respiratoire et l'ATP-Synthase (Membrane interne)** : 
  - *Couplage chimio-osmotique* : L'oxydation des coenzymes (NADH, FADH$_2$) transmet des électrons par navettes (ubiquinone, cytochrome) => alimente les complexes enzymatiques qui pompent des H$^+$ (==10 H$^+$ pompés par molécule de NADH, 6 H$^+$ par FADH$_2$==), créant un gradient osmotique.
  - *Synthèse d'ATP* : L'accepteur final d'e$^-$ est le dioxygène $O_2$, réduit en H$_2$O. Les ions H$^+$ refluent via le rotor de l'ATP-Synthase, entraînant la phosphorylation de l'ADP (couplage osmo-chimique). ==Le bilan énergétique final standard est évalué à 30-32 ATP par molécule de glucose selon sa source (ou 36-38 ATP dans de vieilles conventions).==

---

## 🦠 Axe 2 : Biologie Cellulaire & Membranes

### 1. Organisation Cellulaire
- **Le Compartimentage Eucaryote** : Réticulum endoplasmique (RER pour protéines, REL pour lipides ==et réserves de Ca$^{2+}$==), appareil de Golgi ==(maturation et adressage)==, Noyau, lysosomes.
- **Le Cytosquelette** :
  - *Microtubules* : Maintien et trafic (Kinésine va vers la périphérie +, Dynéine vers le centre -), mitose.
  - *Microfilaments (Actine)* : Soutien de la membrane, motilité, cytokinèse.
  - *Filaments intermédiaires* : ==Sont uniquement structurels, pas de transport (ex: Kératines hépitheliales, lamine nucléaire).==

### 2. Membranes et Échanges Cellulaires
C'est une bicouche asymétrique semi-perméable de lipides (Modèle de la Mosaïque Fluide).
- **Transport Passif** : Diffusion simple ($O_2, CO_2$), facilitée (Canaux ioniques, Perméases). L'eau se diffuse par osmose ==(facilitée par des Aquaporines en fonction du potentiel hydrique/gradient de concentration)==.
- **Transport Actif** : Primaire par consommation directe d'ATP (pompe Na$^+$/K$^+$), Secondaire par l'énergie d'un gradient préexistant (Symport, Antiport). ==Ces modes permettent la mise en place d'un potentiel de repos (typiquement autour de -70 mV).==
- **Transport Vésiculaire** : Endocytose ==(dépendante de vésicules de clathrine)==, exocytose (souvent modulée par l'afflux ==de calcium cytosolique==).

### 3. Cohésion & Communication
- **Jonctions** : Serrées (étanchéité, ==Claudines/Occludines==), Adhérentes (Cadhéines - Actine via ==caténines==), Desmosomes, Hémidesmosomes, GAP (communicantes pour passage d'ions via les connexines).
- **Communication inter-cellulaire** : ==Endocrine== (sanguin lointain), Paracrine, Juxtacrine, Synaptique (électrique $\rightarrow$ chimique).

---

## 🧫 Axe 3 : Génétique et Virus (... & Divers)

- **Génome Eucaryote** : ADN compacté en chromosomes. ==L'ADN s'enroule autour de protéines basiques (les histones) pour former des nucléosomes (structure "collier de perles"). Cette fibre se sur-enroule en chromatine puis en chromosome métaphasique lors de la mitose==.
- **Génome Bactérien (Procaryote)** : ==Habituellement constitué d'un unique chromosome circulaire libre et de structures extra-chromosomiques super-enroulées : les plasmides, clés dans la transmission d'antibio-résistances==.
- **Les Virus et Rétrovirus** :
  - Constitués d'une capside protéique et d'un noyau d'ADN ou d'ARN.  
  - *Rétrovirus* : Possèdent la ==Reverse Transcriptase (transcriptase inverse)== qui synthétise un brin d'ADN à partir de leur ARN viral (pour ensuite s'insérer dans l'hôte).
  - Participent à la diversité des bactéries. ==Les virus demeurent des parasites intracellulaires obligatoires, incapables de produire leur propre ATP.==

---

## 🦴 Axe 4 : Physiologie Humaine

### 1. Respiration et Échanges Gazeux
- Pour produire de l'ATP, l'organisme exige un apport continu en oxygène et la sortie de CO$_2$. Cette diffusion obéit à la **Loi de Fick**.
- ==Formule de Fick appliquée à la diffusion membranaire : flux $\Phi = -D \cdot S \cdot \frac{\Delta C}{\Delta x}$ (Une grande surface d'échange alvéolaire - environ 70 m$^2$ - et une fine épaisseur membranacillaire maximisent cela)==.

### 2. Digestion et Métabolisme
- Dégradation enzymatique en successions (Bouche : amylase ; Estomac : pepsine ==fonctionnant à un pH très acide autour de 2== ; suc pancréatique ciblant lipides/glucides/protéines dans l'intestin).
- Concernant les réserves énergétiques de glycogène : Le muscle l'utilise pour sa propre contraction sans le relâcher car ==l'enzyme *Glucose-6-phosphatase* y est absente==. Seul le foie gère l'homéostasie des réserves libres et maintient la glycémie systémique.

### 3. Fonctions Reproductions et Excrétions
- **Génération d'énergie** : Chez le spermatozoïde (gamète mature haploïde), la pièce intermédiaire concentre les mitochondries fournissant l'ATP nécessaire à sa mobilité, afin qu'il perfore l'ovocyte à l'aide des enzymes de l'acrosome (en tête).
- **Régulation Hormonale (Repro)** : ==Contrôlé par l'axe hypothalamo-hypophysaire. La GnRH régule la sécrétion hypophysaire de FSH/LH, qui modulent les gonades (testostérone / œstrogènes).==
- **Élimination** : Acides aminés/ammoniac toxiques sont convertis par le foie en urée ==(Cycle de l'urée qui requiert de l'ATP)== puis filtrés par les reins et excrétés, un mode économe en eau adapté au milieu terrestre.
