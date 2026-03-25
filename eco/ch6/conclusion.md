---
title: 📌 Conclusion
order: 4
---

# Conclusion : qu'en est t-il du marché du travail

Ce modèle oublie totalement la présence du marché du travail. Or, on observe quand même des liens entre conso et prod. Or, les conso sont aussi travailleurs (dans la vraie vie), ce qui crée ici une confrontation (plus haut/bas salaire). Ce modèle ne considère donc pas ses conflits (arbitrage travail/loisir, $u(\mathcal{l}, q) = \mathcal{l} ^\alpha (q - \bar{q})$).

## Lien entre la forme de l'offre de travail et le minimum de survie

On introduit ici une formulation simple pour illustrer le lien entre la forme de la fonction d'utilité et le « minimum de survie » en consommation $\bar q$.

Considérons un agent qui choisit le travail fourni $\ell$ et la consommation $q$, avec salaire horaire $w$ et prix du bien $p$ ; la contrainte de revenu est
$$p\,q = w\,\ell.$$ 
Prenons la forme utile dans la littérature pédagogique
$$u(\ell,q)=\ell^{\alpha}(q-\bar q),\qquad \alpha>0.$$ 

Remplaçant $q$ par $w\ell/p$ on obtient la fonction objective en $\ell$ :
$$U(\ell)=\ell^{\alpha}\Big(\frac{w\ell}{p}-\bar q\Big).$$
La condition du premier ordre (pour une solution intérieure \(\ell>0\)) est
$$\frac{dU}{d\ell}=\ell^{\alpha-1}\Big((\alpha+1)\frac{w\ell}{p}-\alpha\bar q\Big)=0,$$
d'où
$$\ell^*=rac{\alpha\,\bar q\,p}{(\alpha+1)w}.$$ 
On en déduit la consommation associée
$$q^*=\frac{w\ell^*}{p}=\frac{\alpha}{\alpha+1}\,\bar q<\bar q.$$ 

Conclusion immédiate : pour cette spécification multiplicative, la solution intérieure donne toujours $q^*<\bar q$, donc le « minimum de survie » $\bar q$ est en pratique contraignant et l'optimum réel devient un coin où la contrainte $q\ge\bar q$ s'impose.

Quand la contrainte de survie lie, l'agent doit fournir au moins
$$\ell_{\min}=\frac{p\,\bar q}{w},$$
pour atteindre $q=\bar q$. Cette quantité minimale de travail décroît quand le salaire $w$ augmente : une hausse du salaire réduit les heures nécessaires pour atteindre le minimum de survie.

Interprétation économique courte :
- Avec une utilité multiplicative comme ci‑dessus, l'optimum intérieur tend à produire une consommation inférieure au seuil de survie, donc le seuil devient un coin contraignant. 
- Sous ce coin contraint, une hausse du salaire réduit le travail minimal requis (effet substitution/income canal distincts selon la forme fonctionnelle). 
- De façon générale, la pente et la convexité de la fonction d'utilité (ici le paramètre $\alpha$) déterminent le signe et la taille de la réponse du travail au salaire — le travail peut croître ou décroître avec $w$ selon la spécification et selon si la contrainte de survie est active.

Souhaites‑tu que je reformule cela plus simplement, ou que j'ajoute un petit graphe illustratif et un exemple numérique dans [eco/ch6/conclusion.md](eco/ch6/conclusion.md#L1-L1) ?