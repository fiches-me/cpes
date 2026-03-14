# Fish Mi-S2

## Dérivabilité

Voir [dérivées](../rappels/dérivées.md) pour les dérivés des fonctions usuelles.

> [!IMPORTANT] Taux d'accroissement
> f est dérivable en a si f admet une limite finie en a.
> $f^ \prime (a) = \frac {f(a+h) - f(a)} {h}$. On dit que $f$ est $\mathcal{D}^k (I)$

- Toute fonction dérivable (à gauche et à droite) est continue
- $(f \circ g) ^\prime (x) = g ^\prime . f ^\prime ( g ( x ) )$
- $(f ^{-1}) ^\prime (b) = \frac {1}{f^\prime ( f ^{-1} (b))} = \frac{1}{f ^\prime (a)}$

*Et là, ribambelle de théorèmes*

> [!IMPORTANT] Théorème de Rolle
> Soient $a$ et $b$ deux nombres réels tels que $a < b$.
> On considère une fonction $f$ telle que : 
> - $f$ définie et continue sur $[a , b ]$
> - $f$ dérivable sur $]a , b[$
> - ⚠️ $f(a) = f(b)$
>---
> Alors $\exists c \in ]a, b[$ tel que $f^\prime (c) = 0$

> [!IMPORTANT] Théorème des accroissements finis
> Soient $a$ et $b$ deux nombres réels tels que $a < b$.
> On considère une fonction $f$ telle que : 
> - $f$ définie et continue sur $[a , b ]$
> - $f$ dérivable sur $]a , b[$
>---
> Alors $\exists c \in ]a, b[$ tel que $f(b) - f(a) = f^\prime (c)(b - a)$

> [!IMPORTANT] Inégalité des accroissements finis - version 1
> Soient $a$ et $b$ deux nombres réels tels que $a < b$.
> On considère une fonction $f$ telle que : 
> - $f$ définie et continue sur $[a , b ]$
> - $f$ dérivable sur $]a , b[$
> - ⚠️ $\exists m, M \in \mathbb{R}$  tels que $m \le M$ et $\forall x \in ]a, b[, m \le f^\prime(x) \le M$
>---
>Alors $\forall (x, y) \in [a, b]^2$  tels que $x < y$, $m(y - x) \le f(y) - f(x) \le M (y - x)$

> [!IMPORTANT] Inégalité des accroissements finis - version 2
> Soient $a$ et $b$ deux nombres réels tels que $a < b$.
> On considère une fonction $f$ telle que : 
> - $f$ définie et continue sur $[a , b ]$
> - $f$ dérivable sur $]a , b[$
> - ⚠️ $\exists k \in \mathbb{R}^+$ tel que$\forall x \in ]a, b[, |f^\prime(x)| \le |k|$
>---
>Alors $\forall (x, y) \in [a, b]^2, |f(x) - f(y)| \le k |x - y |$

### Fonctions de classe $\mathbb{C}^k$
## Complexes

### Bases

$C = \{a + ib | a, b \in R$ et $i^2 =-1 \}$ 
$z$ = $z^* \Longleftrightarrow$ $Re(z) = Re(z^*)$ et $Im(z) = Im(z^*)$
$\sum z^k = \frac{1 - z^{n - 1}}{1 - z}$

### Conjugués & Modules

$\bar{z + z^\prime} = \bar{z} + \bar{z^\prime}$ 
$z = \bar{z} \Leftrightarrow z \in R$
$|z^2| = z \times \bar{z} ; |z \ times z^\prime| = |z| \ times |z^\prime|$
$|z| = |\bar{z}|$

### Racines

Si $w^2 = z$, alors $(-w)^2 = z$.

> [!IMPORTANT] Théorème d'Alembert-Gauss
>
> $$P(z) = a_n \prod ( z - z_k)$$

### Arguments

$\color{red} \theta = arg(z) \Leftrightarrow z = |z|(cos \theta + i sin \theta)$
- $arg(zz^\prime) = arg(z) + arg(z^\prime)$
- $arg(z^n) = n \times arg(z)$
- $arg(1/z) = - arg(z)$
- $arg(\bar{z}) = - arg(z)$

> [!IMPORTANT] Formule de Moivre
>
> $$(cois \theta + i sin \theta)^n = cps (n \theta) + i sin (n \theta)$$
