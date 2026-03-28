---
title: 🧮 TD Statistiques N°2
order: 2
---

> [!NOTE]
> Mon compilateur ne supporte pas les listes de lettres (a., b., etc). J'ai donc remplacé les lettres par des chiffres, mais les exercices sont les mêmes.

# Exercice 1

1. T suis une loi binomiale de paramètre p et 2.
2. $E(f(T)) = \sum f(T) P(T = x) = f(0) \times P(T = 0) f(1) \times P(T = 1) + f(2) \times P(T = 2)$
   $= f(0)(p-1)^2 f(1) ( 2 \times p \times (1 - p)) + f(2) (1 \times p^2)$
   $= (1 - p)^2 f(0) + 2p(1 - p)f(1) + p^2 f(2)$
3. On calcule le biais de $\widehat{\theta}$.

   $$B(\widehat{\theta}, \theta) = E(\widehat{\theta}) - \theta = 2008 - \frac 12 2p - 2008 - p = 0$$

4. On calcule le nouveau biais de $\widehat{\theta}$. Comme on doit calculer l'espérance pour $B(\widehat{\theta}, \theta) = E(\widehat{\theta}) - \theta$, on peut faire une "disjonction de cas". Dans la somme de l'espérance, tout les termes sont annulés quand T ne vaux pas 0. On a alors

   $$E(\widehat{\theta}) = 1 \times (1 - p)^2 = \theta$$

   Donc l'estimateur est non biaisé.
5. 

# Exercice 2

1. X

# Exercice 3

1. D'après le tableau :
    1. P(x<1) = 0.8414
    2. P(0<x<1.42) = 0.9222 - 0.5 = 0.4222
    3. P(x>1.13) = P(x<1.13) = tout petit ?
2. Toujours d'après le tableau :
    1. P(−0.75 < X)
    2. P(−0.75≤X≤0)
3. Toujours d'après le tableau :
    1. $P(X \le t)=0.8238 \Leftrightarrow t = 0.93$
    2. $P(X \le t)=0.1112 \Leftrightarrow t = 1 - 3.49?$
    3. $P(0 < X < t)=0.4878 \Leftrightarrow t - 0,5 = 0.4878 \Leftrightarrow t = 2.25$
  4. X
     1. D
     2. S

# Exercice 4

1. D'après la formule du cours, a = 160 et b = 30
2. $P(X > 200) = P(Y > \frac{200 - 160}{30}) = P( Y > \frac 13)= P( Y < - \frac 13)$

# Exercice 5

1. Cette situation pourrait être modélisé par une loi normale de paramètre k. 
2. Soit 2 tirages :
    1. k/k × k-1/k × 1/k ?
    2. Si mon équation est bonne, alors $k \ne 1$ est la meilleur solution car il ne faut pas que les fractions valent 0 ?
3. Soit 4 tirages :
    1. k/k × k-1/k × 1/k × 1/k
    2. Même réponse, si k vaut 1, les permiers termes sont maximisés mais annulés par un zéro.
