---
title: ➿ Dérivées
finished: true
---

# ➿ Dérivées

## Dérivées

| Fonction        | Dérivée                             |
| --------------- | ----------------------------------- |
| $x^n$           | $nx^{n-1}$                          |
| $\frac{1}{x^n}$ | $-\frac{n}{x^{n+1}}$                |
| $\sqrt{x}$      | $\frac{1}{2\sqrt{x}}$               |
| $u + v$         | $u\prime + v\prime$                 |
| $\lambda u$     | $\lambda u\prime$                   |
| $uv$            | $u\prime v + v\prime u$             |
| $\frac{1}{u}$   | $-\frac{u\prime}{u^2}$              |
| $\frac{u}{v}$   | $\frac{u\prime v - v\prime u}{v^2}$ |
| $u^n$           | $nu\prime u^{n-1}$                  |
| $\sqrt{u}$      | $\frac{u\prime}{2\sqrt{u}}$         |
| $e^u$           | $u\prime e^u$                       |
| $f(ax + b)$     | $af\prime (ax+b)$                   |
| $ln(u)$         | $\frac{u\prime}{u}$                 |

## Primitives

| Fonction               | Primitive             |
| ---------------------- | --------------------- |
| $k$ (constante)        | $kx + c$              |
| $x$                    | $\frac{1}{2}x^2 + c$  |
| $x^2$                  | $\frac{1}{3}x^3+c$    |
| $x^n$                  | $\frac{x^{n+1}}{n+1}$ |
| $-\frac{1}{x^2}$       | $\frac{1}{x} +c$      |
| $\frac{1}{x}$          | $ln(x) + c$           |
| $\frac{1}{\sqrt{x}}$   | $2\sqrt{x} + c$       |
| $e^x$                  | $e^x + c$             |
| $u\prime + v\prime$    | $u + v$               |
| $\lambda u\prime$      | $\lambda u$           |
| $2u\prime u$           | $u^2$                 |
| $u\prime u^n$          | $\frac{u^{n+1}}{n+1}$ |
| $-\frac{u\prime}{u^2}$ | $\frac{1}{u}$         |
| $u\prime e^u$          | $e^u$                 |
| $\frac{u\prime}{u}$    | $ln(u)$               |

## Intégrales

### Formules

- Formule générale : $\int_{a}^{b} f(x) \, dx = [F(x)]_{a}^{b} = F(b) - F(a)$
- $\int_{a}^{a} f(x) \, dx = 0$
- $\int_{a}^{b} f(x) \, dx = - \int_{b}^{a} f(x) \, dx$
- Linéarité : $\int_{a}^{b} (f + g)(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{a}^{b} g(x) \, dx$ et $h \int_{a}^{b} f(x) \, dx = \int_{a}^{b} hf(x) \, dx$
- Relation de Chasles : $\int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx$

### Intégration par parties

- $\int_{a}^{b} u\prime (x) v(x) \, dx = [u(x) v(x)]_{a}^{b} - \int_{a}^{b} u (x) v(x)\prime$
- Règle pour connaitre quelle fonction utiliser en tant que $u\prime$ : **ALPES**
  - **A** pour *arcos*
  - **L** pour *logarithme*
  - **P** pour *polynomes*
  - **E** pour *exponentiel*
  - **S** pour *sinusoïde*
