---
order: 0
title: "Intro: Le modèle de concurrence parfaite"
---

Cette fois ci, c'est bien de la microéconomie. Ce qu'on appelle théorie générale 

Dans l'article <u class="red-underline">Existence of an Equilibrium for a Competitive Economy</u> d'Econometrica, K. Arrow et G. Debreu reprennent les théories de Walras. L'une d'entre elles expliquent que dans une économie à n marchés, il existe un vecteur prix  $$P = \begin{pmatrix} p_1 \\ p_2 \\ ... \\ p_{n-1} \\ p_n \end{pmatrix}$$

Cependant, cet expression n'est pas prouvé. Le but de cet article est de prouver cette équation. À travers leur article, nous allons essayer de comprendre comment cette expression a été formalisé.

**Quelles hypothèses sont nécessaires ?** Nous sommes dans un modèle de concurrence parfaite d'échanges purs, les agents ne peuvent qu'échanger (il n'y a que des consommateurs, pas de producteurs). *Cela permet de se concentrer sur les consommateurs et l'échange, donc pas d'achat et de production à analyser.* De plus, dans une économie Walrasienne, la monnaie est neutre. Le consommateur a 2 caractéristiques :
1. Il est définit par ce qu'il possède. Les consommateurs possèdent tous des dotations initiales (DI) et un droit de propriété existe.
2. Il est également définit par **ses goûts** (préférences)

On réfléchit également autour de **panier de biens**, définit par leur lieu, date et xxx de disponibilité.

> [!NOTE]
> On trouvera dans ce modèle un grand nombre d'équivalences, qui correspondent à l'idée du troc. Ce modèle est basée sur le troc, il n'y a pas vraiment de monnaie.

Toute l'information nécessaire à l'échange de bien est disponible à tous.

Quelques notations :
- $i$ est un bien. $i = { 1, ..., n}$
- $q_i$ est la quantité de ce bien, $q_i \in \mathbb{R}^+$
- Le panier de bien $Q$ est noté 

$$Q = \begin{pmatrix} q_1 \\ q_2 \\ ... \\ q_{n-1} \\ q_n \end{pmatrix}$$

Un exemple concret de panier de bien serait le suivant :

$$Q_A = \begin{pmatrix} q^A_1 = 0 \\ q^A_2 = 2\\ q^A_3= 0 \end{pmatrix}$$

On note $\succ$ "strictement préféré",  $\sim$ "est indifférent à" et $\succeq$ "", un préordre total.

> [!WARNING]
> $\succ$  s'écrit avec une tilde en écriture manuscrit.

On peut tracer des courbes d'indifférences entres les biens (voir [ces graphiques au chapitre 5](../ch5/g1.md#L'effet%20de%20substitution%20et%20la%20contrainte%20budgétaire)). Se déplacer dans la courbe correspond à prendre un autre panier de bien, et ce choix est guidé par le **taux margnial de substitution (TMS)**. Ce taux correspond à quel point un consommateur est capable d'abandonner un bien 1 pour un bien 2 pour garder la même satisfaction.

> [!EXAMPLE]
> *Dans nos exemples, nous utiliserons une économie avec deux produits. Cela ne changerait rien avec plus de produits.*
>
> Si $p_1$ fournie 2 d'utilité et $p_2$ en fournie 1, il faut abandonner $0,5 \times p_1$ pour $1 \times p_2$

Le TMS correspond à la pente de la tangente en ce point. On appelle xxx le bien "numéraire".

C'est un **taux de réserve**, car si le prix est plus élevé que ce qu'ils étaient prêt à donner, alors ils ne feront pas l'échange

> [!EXAMPLE]
> Toujours avec l'exemple différent, si $p_1$ vaux bien 2€ et $p_2$ 1€, alors tout va bien. Si il faut abandonner plus de $p_1$ (si il vaux moins chère), alors le consommateur n'effectuera pas l'échange

*Nous avons parlé d'utilité au dessus : il est possible de créer une **fonction d'utilité u(.) croissante**.* Si $u(Q) \ge u(Q^\prime)$ alors $Q \succeq Q^\prime$. Si $u(Q) = u(Q^\prime)$ alors $Q \sim Q^\prime$ 

> [!EXAMPLE]
> Soit $Q_1 = (8;2)$, $Q_2 = (2;4)$ et $Q_3 = (3;3).$
> 
> $Q_1 \sim Q_2$ et $Q_1 \succ Q_3$
> 
>Es ce que $u_1(q_1, q_2) = q_1 \times q^2_2$ fonctionne ? OUI car elle vérifie les 3 axioms d'au dessus. 

N'importe quelle fonction u qui vérifie les conditions du consommateur fonctionne. On regarde l'utilité **ordinale** (*le classement*) et non **cardinale** (*la quantité*).

Le lien entre courbe d’indifférence & fonction d'utilité est que $u(.)$ permet directement d'obtenir la courbe d’indifférence pour un panier $Q_0$. Dans ce cardre, la courbe d’indifférence est **l'ensemble des paniers [ici à deux biens] pour lesquels on a $(q_1, q_2) \sim Q_0$ (donc $u(q_1, q_2) = u(Q_0)$). 

L'individu $A$ a pour dotation initiale $Q_0 = (9, 6)$. Il a pour préférence $u_A (q_1, q_2) = \sqrt{q_1} \times q_2$ Pour trouver l'équation de la courbe d'indifférence, il faut donc $u_A (q_1, q_2) = u_A(Q_0)$. Ici $q_2 = \frac{18}{\sqrt{q_1}}$ (de la forme $y = f(x)$).  

On peut aussi définir des équations avec une autre fonctions, $q_2 = g(q_1)$

Pour la démo, on peut également calculer la dérivé partielle :

$$g^\prime(q_1) = - \frac{u^\prime_{q_1}(q_1, q_2)}{u^\prime_{q_2}(q_1, q_2)}$$

Et on obtient la formule du TMS

$$\text{TMS}_{(q_1, q_2)} = |g^\prime (q_1)| =\frac{u^\prime_{q_1}(q_1, q_2)}{u^\prime_{q_2}(q_1, q_2)}$$

Qui permet de calculer la quantité de bien $q_2$ pour obtenir un bien $q_1$

> [!EXAMPLE]
> On calcule d'abord le TMS "général"
>
> $$\text{TMS}_A = \frac{u^\prime_{q_1}}{u^\prime_{q_2}} = \frac{\frac{1}{2} \times q_1 ^ {- \frac{1}{2}}\times q_2}{q_1^{\frac{1}{2}}} = \frac{q_2}{q_1}$$
>
> Puis on l'applique au panier du consommateur
>
> $$\text{TMS}_A(Q_{0A}) = \frac{6}{2 \times 0} = \frac{1}{3}$$
>
> C'est le prix maximal en bien 2 pour obtenir une unité du bien 1

**Attention!** Ici, si on avait calculé $\text{TMS}(q_2, q_1)$, alors on aurait calculé la qunatité de bien 1 pour acheté un bien 2, qui ici aurait value 3.
