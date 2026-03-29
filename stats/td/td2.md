---
title: 🧮 TD Statistiques N°2
order: 2
---

> [!NOTE]
> Mon compilateur ne supporte pas les listes de lettres (a., b., etc). J'ai donc remplacé les lettres par des chiffres, mais les exercices sont les mêmes.

# Exercice 1

1. T suis une loi binomiale de paramètre p et 2.
2. $\mathbb{E}[f(T)] = \sum_x f(x)\,\mathbb{P}(T = x) = f(0)\,\mathbb{P}(T = 0) + f(1)\,\mathbb{P}(T = 1) + f(2)\,\mathbb{P}(T = 2)$
    $= f(0)(1-p)^2 + f(1)\,2p(1-p) + f(2)p^2$
3. On calcule le biais de $\widehat{\theta}$.

    $$B(\widehat{\theta}, \theta) = \mathbb{E}[\widehat{\theta}] - \theta = 2008 - \frac12 2p - 2008 - p = 0$$

4. On calcule le nouveau biais de $\widehat{\theta}$. Comme on doit calculer l'espérance pour $B(\widehat{\theta}, \theta) = E(\widehat{\theta}) - \theta$, on peut faire une "disjonction de cas". Dans la somme de l'espérance, tout les termes sont annulés quand T ne vaux pas 0. On a alors

    $$\mathbb{E}[\widehat{\theta}] = 1 \times (1 - p)^2 = \theta$$

   Donc l'estimateur est non biaisé.
5. $\mathbb{E}[\widehat{\theta}] =$
   $= (1 - 3p)^2 = \theta$

# Exercice 2

1. $\mathbb{P} (T_2) = \begin{cases} 1 \text{ si } \forall i \in [\![1, n]\!] , X_i = 1 \\ 0 \text{ sinon}\end{cases}$
   Donc T suis une loi de Bernoulli de probabilité $p^n$
2. $\mathbb{E} (T_1) = p$ (cours). Donc $T_1$ est bien un estimateur non biaisé de $p$.
   $\mathbb{E} (T_2) = p^n \ne p$, donc $T_2$ présente un biais pour $p$.
3. On calcule les EQM de $T_1$ et $T_2$ :
    1. $EQM ( T_1 ) = \mathbb{E} ((T_1 - p) ^2)$
       $= \mathbb{E} ((T_A - \mathbb{E}(T_1)) ^2)$
       $= \mathbb{V}(T_1)$
       $=\frac{p(1-p)}n$
    2. $EQM ( T_2 ) = \mathbb{V} (T_2) + B_2(T_2, p)^2$
       $= p^n(1 - p^n) + (p^n - p)^2$
       $=p^{n + 2} + 2^{n + 1}$
4. On a vu que $T_2$ était biaisé, donc c'est forcément $T_1$ le plus performant.
5. Quand n tend vers +inf, $EQM(T_1)$ tend vers $EQM(T_2)$ tend vers +inf. La variance de $T_1$ s'annule pour n grand, donc $T_1$ est un bon estimateur.

# Exercice 3

1. D'après le tableau :
    1. $\mathbb{P}(X<1) = 0.8414$
    2. $\mathbb{P}(0<X<1.42) = 0.9222 - 0.5 = 0.4222$
    3. $\mathbb{P}(X>1.13) = \mathbb{P}(X<-1.13) =  1 - \mathbb{P}(X \le 1.13) = 1 - 0.8708 = 0.1292$
2. Toujours d'après le tableau :
    1. $\mathbb{P}(X > -0.75) = \mathbb{P}(X < 0.75) = 0.7734$
    2. $\mathbb{P}(-0.75\le X\le0)= \mathbb{P}(0<X<0.75) = 0.7734 - 0.5 = 0.2734$
3. Toujours d'après le tableau :
    1. $\mathbb{P}(X \le t)=0.8238 \Leftrightarrow t = 0.93$
    2. $\mathbb{P}(X \le t)=0.1112 \Leftrightarrow t = 1 - 3.49?$
    3. $\mathbb{P}(0 < X < t)=0.4878 \Leftrightarrow t - 0,5 = 0.4878 \Leftrightarrow t = 2.25$
  4. :
    1. $\mathbb{P}(|X| < t) \Leftrightarrow \mathbb{P}(-t < X < t) \Leftrightarrow \phi(t) - \phi(-t) = 2\phi(t) - 1$
    2. On cherche donc $2\phi(t) - 1 = 0.9 \Leftrightarrow \phi(t) = \tfrac{1.9}{2}\Leftrightarrow \phi(t) = 0.95 \Leftrightarrow t = 1,65$

# Exercice 4

1. D'après la formule du cours, a = 160 et b = 30
2. $\mathbb{P}(X > 200) = \mathbb{P}\!\left(Y > \frac{200 - 160}{30}\right) = \mathbb{P}\!\left(Y > \tfrac{40}{30}\right) = \mathbb{P}\!\left(Y > \tfrac{4}{3}\right) = 1 - \mathbb{P}\!\left(Y < \tfrac{4}{3}\right) = 1 - 0.9082 = 0,0918$
3. $\mathbb{P}(X < c) > 0.95 \Leftrightarrow \mathbb{P}\!\left(Y < \frac{c - 160}{30}\right) > 0.95 \Leftrightarrow \mathbb{P}\!\left(Y < \frac{c - 16}{3}\right) > 0.95\Leftrightarrow \frac{c - 16}{3} > 1,65 \Leftrightarrow c = 1,65 \times 3 + 16 = 20,95$ ? *Beaucoup trop. Étant donné que j'ai effectué la question 4 avant de finir celle-ci, je conclus que ma méthode actuelle n'est pas la bonne.*
4. $\mathbb{P}(X > 200\mid X>160) = \frac{\mathbb{P}(X > 200) \cup \mathbb{P}(X>160)}{\mathbb{P}(X > 200)} = \frac{\mathbb{P}(X>160)}{\mathbb{P}(X > 200)} = \frac{0.5}{0,0918} = 5,446623094 > 1$ donc j'ai fait une erreur 

# Exercice 5

1. Cette situation pourrait être modélisé par une loi normale de paramètre k. 
2. Soit 2 tirages :
    1. $k/k \times (k-1)/k \times 1/k$
    2. Si mon équation est bonne, alors $k \ne 1$ est la meilleur solution car il ne faut pas que les fractions valent 0 ?
3. Soit 4 tirages :
    1. $k/k \times (k-1)/k \times 1/k \times 1/k$
    2. Même réponse, si $k = 1$, les permiers termes sont maximisés mais annulés par un zéro.
