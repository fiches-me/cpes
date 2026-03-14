# Exercice 1

## Question 1

X suit une loi de Bernoulli, de succès "succès" et comme paramètres $n = 1$ et $p = \frac 25$. Elle a pour moyenne $\frac 25$, pour espérance $\frac 25$  et pour variance $\frac 25 (1 - \frac 25) = \frac{6}{25}$.

## Question 2

1. $\Omega = [0, 3], \omega_i \in \Omega$
    - $P(\omega_0) = \frac{27}{125}$
    - $P(\omega_1) = \frac{54}{125}$
    - $P(\omega_2) = \frac{36}{125}$
    - $P(\omega_3) = \frac{8}{125}$
2. 
    - $A_0 = \{ Y = 0 \}$
    - $A_1 = \{ Y = 1 \}= \frac{12}{125}$
    - $A_2 = \{ Y = 2 \} = \frac{18}{125}$
    - $A_3 = \{ Y = 3 \}$
3. 
    - $E(Y) = 1 \times P(Y = 0) + 3 \times P(Y = 1) + 3 \times P(Y = 2) + 1 \times P(Y = 3) = \frac{150}{125} = \frac{150}{125} = \frac{6}{5}$
    - $E(Y^2) = ?$
    - $V(Y) = E(Y^2) - E(Y)^2 = \frac{270}{125}$
4. $P(Y = 1 | Y \ge 1) = \frac 17$

## Question 3

*x*

# Exercice 2

## Question 0

X suis une loi géométrique de paramètre $p = \frac 16$ est $P(X = n) = \frac 56 ^{n - 1} + \frac 16 = (1 - p)^{n-1} \times p$. Il y a $\color{red} n -1$ échecs pour $\color{green} 1$ succès.
## Question 1
Problème : $X(\Omega) = \mathbb{N}^*$
- $E(X) = \frac 1p = 6$
- $V(X) = \frac {1-p}{p^2} = 30$

*Suite non corrigée*
# Exercice 3

## Question 1

1. $t_n$ est une fonction
2. $E(t_n) = \frac 1n \times \sum E(X_i) = \frac 1n \times µ \times n = µ$
3. $V(t_n) = \frac 1n ^2 \times \sum V(X_i) = \frac 1n ^2 \times µ \times n = \frac {\sigma^2}{n}$
4. $V(t_n)$ rend vers 0 quand $n$ tend vers $+ \infty$. Les variables aléatoires seront de plus en plus similaires (moins en moins dispersées).

## Question 2

1. $\Theta _n = \frac 1n \sum (X_i - t_n )^2$
     $= \frac 1n \sum X_i^2 -2t_n X_i- t_n^2$
     $= \frac 1n \sum X_i^2 - 2 t_n \times \frac 1n \sum X_i + \frac 1n \times n t_n^2$
     $= \frac 1n \sum X_i^2 - 2 t_n^2 + t_n^2$
2.  Les lois $X_i$ sont de même loi iid, donc les $X_i^2$ le sont aussi. Donc $\forall i \in [1, n], E(X_i^2) = E(X_1^2)$
     Donc .f.
3. Sachant que $E(X_1) = \mu = E(t_n)$, on ajoute et retranche $(E(X_1))^2$ à la formule.
 $E(\Theta _n) = E(X_i^2) - (E(X_1))^2 - (E(t_n) - (E(X_i))^2)$
   $E(\Theta _n) = V(X_i) - V(t_n)$
4. $E(\Theta_n) =\sigma^2 - \frac {\sigma^2}{n} = \sigma^2 \frac{n-1}{n}$

# Exercice 4

## Question 0

Cette variable est quantitative, ordinale et continue. 

## Question 1

La moyenne empirique est $\approx 4.19$ et la variance empirique 

La variance vaux $(3,94−4,19)^2+(4,06-4,19)^2+(4,28−4,19)^2+(3,99−4,19)^2+(3,74−4,19)^2+(4,08−4,19)^2+(4,76−4,19)^2+(4,62−4,19)^2+(4,53−4,19)^2+(4,35−4,19)^2+(3,99−4,19)^2+(4,22−4,19)^2+(3,96−4,19)^2 = 1,09$

## Question 2

| 3,74                          | 3,94 | 3,96                     | 3,99 | 3,99 | 4,06 | 4,08    | 4,22 | 4,28                     | 4.35 | 4.53                          | 4,62 | 4,76 |
| ----------------------------- | ---- | ------------------------ | ---- | ---- | ---- | ------- | ---- | ------------------------ | ---- | ----------------------------- | ---- | ---- |
| $\tilde{q}_{13,\frac{1}{10}}$ |      | $\tilde{q}_{13,\frac14}$ |      |      |      | Médiane |      | $\tilde{q}_{13,\frac34}$ |      | $\tilde{q}_{13,\frac{9}{10}}$ |      |      |
