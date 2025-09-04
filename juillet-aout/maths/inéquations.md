---
title: ↔️ Calcul algébrique
---

# ↔️ Calcul algébrique

## Les bases

### Polynômes
- Formule pour calculer $\Delta$ delta :
$$\Delta = b^2 - 4ac$$

- Si $\Delta < 0$ : pas de solution à l'équation :

  $$S = \emptyset$$

- Si $\Delta = 0$ : une seule solution :

  $$S = \frac{-b}{2a}$$

- Si $\Delta > 0$ : deux solutions à l'équation :

  $$S_1 = \frac{-b-\sqrt{\Delta}}{2a}$$  

  $$S_2 = \frac{-b+\sqrt{\Delta}}{2a}$$  

### Formules d'inéquations

Pour $x \in \mathbb{R}$ et $a \in \mathbb{R}^+$, on a :

- $|x| < a \;\;\Longleftrightarrow\;\; -a < x < a$
- $|x| > a \;\;\Longleftrightarrow\;\; x < -a \;\;\text{ou}\;\; x > a$

### Fractions et puissances

- $\dfrac{1}{x} = x^{-1}$
- $x^{-1} \times x^2 = x$

### Identités remarquables

- $(x + y)^2 = x^2 + 2xy + y^2$
- $(x - y)^2 = x^2 - 2xy + y^2$
- $x^2 - y^2 = (x + y)(x - y)$

### Résolution de polynômes du 3ᵉ degré

1. Trouver une racine "évidente", solution de l'équation. On l’appelle $E_1$.  
2. Réduire le polynôme au second degré en effectuant la division euclidienne du polynôme initial par $x - E_1$.  

   > [!WARNING]  
   > Si le reste n’est pas nul, c’est qu’il y a une erreur de calcul.  

3. Résoudre le polynôme du second degré trouvé.  
   On obtient alors au maximum trois solutions.  

### Tableau de signes d'un polynôme du second degré

Pour un polynôme $P(x) = ax^2 + bx + c$ avec $\Delta > 0$ et solutions $x_1 < x_2$ :  

| Intervalle      | $(-\infty, x_1)$ | $(x_1, x_2)$     | $(x_2, +\infty)$ |
| --------------- | ---------------- | ---------------- | ---------------- |
| Signe de $P(x)$ | $\text{sgn}(a)$  | $-\text{sgn}(a)$ | $\text{sgn}(a)$  |

- Pour $P(x) > 0$ : on prend les intervalles où le polynôme est positif.  
- Pour $P(x) < 0$ : on prend les intervalles où le polynôme est négatif.  

> Exemple : pour $2x^2 - 5x + 2$  
> $\Delta = 9 > 0 \Rightarrow x_1 = \frac{1}{2}, x_2 = 2$  
> Si $a=2>0$, tableau des signes : + | - | +  
> Donc $2x^2 - 5x + 2 > 0 \Rightarrow x < \frac{1}{2}$ ou $x > 2$
