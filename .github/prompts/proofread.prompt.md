---
name: proofread-fiche
description: "Relit et corrige des fichiers Markdown en français pour le dépôt Fiches : orthographe, grammaire, typographie (espaces insécables, guillemets, tirets), et formatage compatible VitePress. Préserver les blocs de code, le frontmatter YAML et les liens relatifs."
applyTo:
  - "**/*.md"
author: Funasitien
locale: fr
---

Instructions

- Relis le fichier Markdown indiqué et corrige les fautes d'orthographe et de grammaire en français.
- Applique les règles typographiques françaises (espaces insécables avant `; : ? !`, guillemets « » si demandé, correct usage of em-dashes and non-breaking spaces).
- Ne modifie pas le contenu des blocs de code (fenced code), des commandes shell, ni du frontmatter YAML.
- Vérifie et corrige les liens relatifs cassés quand la correction est évidente; sinon signale-les.
- Vérifie que les headings de premier niveau et les attributs title du frontmatter commencent par un même emoji.
- Si des changements structurels sont proposés (déplacement de sections, suppression longue), préfère suggérer un plan au lieu d'appliquer directement.

Output expectations

- Fournis un résumé en 3 lignes des types de corrections effectuées.
- Donne un petit changelog listant les modifications (ligne ou fragment et correction).
- Si l'utilisateur demande l'application automatique, fournis un patch unifié (diff) prêt à être appliqué.

Examples

- "Relis et corrige `bio/A1/intro.md`, puis fournis le diff prêt à appliquer."
- "Vérifie `eco/ch2/intro.md` pour la typographie française et liste les problèmes restants." 
