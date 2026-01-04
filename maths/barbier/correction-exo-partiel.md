---
title: Correction Exo Partiel S1
---

## Question 1
On considère la fonction  
$$
f(x)=2x-\sqrt{x}
$$

- L’expression $2x$ est définie pour tout $x\in\mathbb{R}$.
    
- L’expression $\sqrt{x}$ est définie (à valeurs réelles) **si et seulement si** $x\ge 0$.
    

La fonction $f)$est donc définie pour les valeurs de $x$ vérifiant simultanément ces deux conditions, soit :  
$$
x\ge 0.  
$$
👉 **Conclusion :**  
$$
\boxed{D_f = [0,+\infty[}
$$
## Question 2
### A)

On calcule le taux d’accroissement de (f) entre (0) et (x>0) :  
$$ 
\frac{f(x)-f(0)}{x-0}=\frac{2x-\sqrt{x}}{x}.  
$$

Comme cette expression est de la forme (0/0) lorsque (x \to 0^+), on la transforme :  
$$ 
\frac{2x-\sqrt{x}}{x}=\frac{2x}{x}-\frac{\sqrt{x}}{x}  
=2-\frac{1}{\sqrt{x}}.  
$$

Or, lorsque $x \to 0^+$, on a $\sqrt{x} \to 0^+$, donc :  
$$ 
\frac{1}{\sqrt{x}} \to +\infty.  
$$

Par conséquent :  
$$ 
\boxed{\lim_{x\to 0^+}\frac{f(x)-f(0)}{x}=-\infty}.  
$$
### B)
La limite du taux d’accroissement en 0 est :  
$$
\lim_{x\to 0^+}\frac{f(x)-f(0)}{x} = -\infty.  
$$

Cette limite n’étant pas finie, la fonction (f) n’est pas dérivable en 0.

Cependant, cette limite infinie montre que la courbe représentative de (f) admet une tangente verticale au point d’abscisse (0).  
L’équation de cette tangente est :  
$$
\boxed{x = 0}.  
$$
## Question 3
### A)
Soit (a>0). On calcule le taux d’accroissement de (f) entre (a) et (a+h) :  
$$
\frac{f(a+h)-f(a)}{h}  
= \frac{2(a+h)-\sqrt{a+h}-(2a-\sqrt{a})}{h}  
= 2 - \frac{\sqrt{a+h}-\sqrt{a}}{h}.  
$$

En rationalisant :  
$$
\frac{\sqrt{a+h}-\sqrt{a}}{h}  
= \frac{1}{\sqrt{a+h}+\sqrt{a}}.  
$$

Ainsi :  
$$
\frac{f(a+h)-f(a)}{h}  
= 2 - \frac{1}{\sqrt{a+h}+\sqrt{a}}.  
$$

Comme (a>0), lorsque (h \to 0), on a :  
$$
\sqrt{a+h}+\sqrt{a} \to 2\sqrt{a}.  
$$

Par conséquent :  
$$
\boxed{f'(a)=2-\frac{1}{2\sqrt{a}} \quad \text{pour tout } a>0.}  
$$

## Question 5

 La fonction (f) est continue sur $[0,+\infty[$, décroissante sur $]0,\frac{1}{16}]$ et croissante sur $[\frac{1}{16},+\infty[$.  
Par le théorème de la bijection, l’équation (f(x)=a) admet :
- deux solutions si $-\frac{1}{8}<a<0$,
- une solution si $a=-\frac{1}{8}$ ou $a>0$,
- aucune solution si $a<-\frac{1}{8}$.
