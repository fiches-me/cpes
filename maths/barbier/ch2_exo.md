---
title: ↔️ Calcul algébrique
---

# Exercice 3

#### ←

Si f est constante, alors $\forall x \in [a; + \infty [, f(x) = f(a)$
Or, $\forall x \in ]a;+\infty [, g(x) = \frac{f(x) - f(a)}{x-a}$
Donc $\forall x \in ] a; + \infty [, g(x) = 0$
Donc g est constante, donc g est croissante.

#### →

*Sachant que* g est croissante, **Montrons que** f est constante.
En faisant tendre g vers $+ \infty$, on obtient :
$\lim\limits_{x \to +\infty} x - a = - \infty$

Par quotient de limites, on a $\lim\limits_{x \to +\infty} g(x) = 0$

Or g est croissante. Donc, $\forall x \in ] a; +\infty,[, g(x) \leq 0$

On étude le signe de g(x) : il est du signe de f(x) - f(a).
Donc $g(x) \leq 0$
- $\Longleftrightarrow f(x) - f(a) = 0$
- $\Longleftrightarrow f(x) \leq f(a)$

Or f est croissante, donc $\forall x \in ]a; + \infty[, a \leq x, f(a) \leq f(x)$
Par double inégalité, on a f(a) = f(x)
L'égalité est aussi vrai en x = a, on a donc $\forall x \in [a; +\infty], f(x) = f(a)$.
Donc f est constante.

# Exercice 4

#### →

*Sachant que* f est constante, **Montrons que** $\forall (x, y) \in ]0; +\infty[^2, |f(x) - f(y)| \leq \frac{1}{x + y}$
F est constante. Donc, $\forall (x, y) \in ]0; +\infty[^2, |f(x) - f(y)| = 0$
De plus, x > 0 et y > 0. Donc $\frac{1}{x + y} > 0$. On a bien $\forall (x, y) \in ]0; +\infty[^2, |f(x) - f(y)| \leq \frac{1}{x + y}$

> [!TIP]
> Ici, on démontre chaque partie une à une, et non toute l'inéquation d'un coup. Cela évite de démontrer quelque chose avec ce que l'on cherche à démontrer.

#### ←
Soit a > 0 fixé. On a donc :
$\forall x \in ]0, + \infty[, |f(x) - f(a)| \le \frac{1}{x + a}$
Donc $(*) \lim\limits_{x \to + \infty} |f(x) - f(a)| \le  \frac{1}{x + a}$
Or, $$\lim\limits_{x \to + \infty} |f(x) - f(a)| = |\lim\limits_{x \to + \infty} f(x) - f(a)| = |\lim\limits_{x \to + \infty} f(x) - \lim\limits_{x \to + \infty}f(a)|$$
Étoile devient 
$$(*) |\lim\limits_{x \to + \infty} f(x) - \lim\limits_{x \to + \infty}f(a)| \le 0$$

Comme une valeur absolue est toujours positive, on a 

$$(*) |\lim\limits_{x \to + \infty} f(x) - \lim\limits_{x \to + \infty}f(a)| = 0$$

Donc $\lim\limits_{x \to + \infty} f(x) = f(a)$

Soit b fixé. On trouve de la même manière que $\lim\limits_{x \to + \infty} f(x) = f(b)$. Par unicité de la limite, on a f(a) = f(b).f est donc constante !

# Exercice 5
Soit $x \ge 0$. 
$$\sqrt{x + 1} - \sqrt{x} = \frac{(\sqrt{x + 1} - \sqrt{x})(\sqrt{x + 1} + \sqrt{x})}{\sqrt{x + 1} + \sqrt{x}} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}$$
$\lim\limits_{x \to + \infty} \sqrt{x + 1} + \sqrt{x} = + \infty$

Par contient de limites, on obtient $\lim\limits_{x \to + \infty}\sqrt{x + 1} - \sqrt{x} = 0^+$
