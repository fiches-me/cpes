---
title: 🧮 TD Statistiques N°2
order: 2
---

> [!important] Note
> Mon compilateur ne supporte pas les listes de lettres (a., b., etc). J'ai donc remplacé les lettres par des chiffres, mais les exercices sont les mêmes.

# Exercice 1

1. T suis une loi binomiale de paramètre p et 2.
2. $\mathbb{E}[f(T)] = \sum_x f(x)\,\mathbb{P}(T = x) = f(0)\,\mathbb{P}(T = 0) + f(1)\,\mathbb{P}(T = 1) + f(2)\,\mathbb{P}(T = 2)$
    $= f(0)(1-p)^2 + f(1)\,2p(1-p) + f(2)p^2$
3. On calcule le biais de $\widehat{\theta}$.

    $$B(\widehat{\theta}, \theta) = \mathbb{E}[\widehat{\theta}] - \theta = 2008 - \frac12 2p - 2008 - p = 0$$

4. On calcule le nouveau biais de $\widehat{\theta}$. Comme on doit calculer l'espérance pour $B(\widehat{\theta}, \theta) = E(\widehat{\theta}) - \theta$, on peut faire une "disjonction de cas". Dans la some de l'espérance, tout les termes sont annulés quand T ne vaux pas 0. On a alors

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

# Exercice 4 (**corrigé**)

1. D'après la formule du cours, $a = 160$ et $b = 30$. 
2. $\mathbb{P}(X > 200) = \mathbb{P}\!\left(Y > \frac{200 - 160}{30}\right) = \mathbb{P}\!\left(Y > \tfrac{4}{3}\right) = 1 - \mathbb{P}\!\left(Y < \tfrac{4}{3}\right) = 1 - 0.9082 = 0,0918$
3. Conditions :
    1. On cherche $c$ tel que $\mathbb{P} (X \le c) \ge 0.95$. 
	    - Réponse de filous : $c = 10^{10^{10^{10^{10}}}}$.
	    - Borne $c$ tel que $\mathbb{P} (X \le c) \color{red} = 0.95$.
	       $\mathbb{P} (X \le c) = \mathbb{P}\!\left(Y < \frac{c - 160}{30}\right)$
	       On cherche donc $t$ tel que  $\phi(t) = 0.95$. On trouve $t \in [1.64, 1.65]$, on choisit $t = 1.65$.
	       On inverse $t = \frac{c - 160}{30} = 1.65 \Leftrightarrow c = 1.53 \times 30 + 160 = 209.5$ 
    2. On cherche $d$ tel que $\mathbb{P} (X \ge d) \ge 0.8$. 
        - Réponse de filous : $d = - \infty$ ou un truc tout petit.
        - Borne $d$ tel que $\mathbb{P} (X \ge d) = 0.8$. 
            $\mathbb{P} (X \ge d) = \mathbb{P}\!\left(Y \ge \frac{d - 160}{30}\right) = 1 - \mathbb{P}\!\left(Y < \frac{d - 160}{30}\right)$. On notera $t^\prime = \frac{d - 160}{30})$
            $\Leftrightarrow \mathbb{P}(Y \le t^\prime) = 0.2 \Leftrightarrow \mathbb{P}(Y \le - t^\prime) = 0.8$ (*symétrie*)
            On trouve $-t^\prime = 0.85 \Leftrightarrow \frac{d - 160}{30} = -0.85 \Leftrightarrow d = 134.5$
4. $\mathbb{P}(X > 200 \mid X>160) = \frac{\mathbb{P}(X > 200) \cap \mathbb{P}(X>160)}{\mathbb{P}(X > 200)} = \frac{\mathbb{P}(X>200)}{\mathbb{P}(Y > 160)} = \frac{\mathbb{P}(Y>\frac 43)}{\mathbb{P}(X > 0)} = \frac{0.0918}{0.5} = 0.1836$

# Exercice 5 (**corrigé**)

1. Cette situation pourrait être modélisé par une loi de Bernoulli de paramètre $\frac 1k$. (Car $\frac 1k$ chances de gagner et $\frac {k - 1}k$ pour l'échec).
2. Soit 2 tirages :
    1. $\frac kk \times \frac{k-1}k \times \frac 1k$. Pour la première boule, nous avons $k$ couleurs possibles. Pour la deuxième boule, il reste $k - 1$ couleurs qui ne correspondent pas à celle de la première. Pour la dernière, il faut qu'elle soit exactement de la même couleur que la première, donc $\frac 1k$. $\mathbb{P}_2 (E \mid k) = \frac{k - 1}{k ^ 2}$
    2. On étudie donc la function $f : x \rightarrow \frac{x - 1}{x ^ 2}$ avec $k \ge 2$. $f$ admet un extremum en $x = 2$, et elle est croissante avant. Son maximum est donc $x = 2$ avec $\mathbb{P} (E \mid 2) = \frac 14$. On maximise le succès de notre tour de magie avec $2$ couleurs.
3. Soit 4 tirages :
    1. $\frac kk \times \frac{k-1}k \times \frac 1k \times \frac{k-2}k$. Pour la première boule, nous avons $k$ couleurs possibles. Pour la deuxième boule, il reste $k - 1$ couleurs qui ne correspondent pas à celle de la première. Pour la dernière, il faut qu'elle soit exactement de la même couleur que la première, donc $\frac 1k$. $\mathbb{P}_4 (E \mid k) = \frac{(k - 1)(k - 2)}{k ^ 3}$
    2. On étudie donc la function $g : x \rightarrow \frac{(x - 1)(x - 2)}{x ^ 3}$ avec $k \ge 3$. $g$ admet deux extremum (résolution de delta) en $x_1 = 3 - \sqrt3$ et $x_2 = 3 + \sqrt3$. Or, on veut au moins 3 boules, donc $x_2 = 3 + \sqrt3$ est le maximum. On peut comparer $g(4)$ et $g(5)$
