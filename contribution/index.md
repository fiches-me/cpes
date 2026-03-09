---
title: 💖 Comment Contribuer
order: 1
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Funasitien.png',
    name: 'Funasitien',
    title: 'Créateur',
    org: 'DEMOCRAFT',
    orgLink: 'https://democraft.fun',
    desc: "Mainteneur principal de fiches.me depuis 2024",
    sponsor: "https://github.com/sponsors/Funasitien",
    actionText: "Aidez Fiches.me!",
    links: [
      { icon: 'github', link: 'https://github.com/Funasitien' }
    ]
  },
  {
  avatar: "https://github.com/Javier-Cruz-Santos.png",
  name:"Javier-Cruz-Santos",
  title: "Mainteneur"
  }
]
</script>

*Créer ou contribuer à un site web peut faire peur. Mais pour rendre nos fiches les plus accessibles possible, nous avant déjà fait tout le code pour qu'il ne vous reste que les fiches*

# 🎞 Un peu de contexte...

Notre but n'est pas de vous apprendre à coder un site web - je n'ai pas *pas* de vie à ce point - mais uniquement de rendre les fiches de révision accessible à tous. **Et petit bonus :** les technologies utilisés sur [fiches.me](../index.md) sont déjà utilisés par UPS et IPP pour les TPs !

Le site se code tout seule. *Aucune magie noir dans le processus,* juste beaucoup de code au préalable - mais en résumé vos fiches sont maquillées de partout puis envoyé au Goulag où elles devient un site web. Conclusion : **Vous faites les fiches, on fait le reste.**

# ✒️ Rédiger une fiche

Pour pouvoir avoir des titres, du **gras**, de *l'italique* ou encore [des liens](#), nous utilisons un format qui répond au dous nom de **Markdown**. Vous pouvez vous référer [[101.md|à ce guide markdown]] pour comprendre comment fonctionne la mise en forme fonctionne sur md.

Il est possible de juste prendre un fichier `.txt` et de le renommer en `.md` pour qu'il soit transformé et publié sur le site, nous passerons derrière pour la mise en forme.

# 👾 GitHub

Nous utilisons GitHub pour héberger notre site. Il vous faut donc passer par github pour proposer/envoyer vos fiches. [[github.md|On a aussi fait un guide pour ça :)]]. Quand votre fiche est accepté/publié/mise à jour, notre code la contruit et elle sera en live sur le site en moins de 5 minutes !

# 👥Contributeurs

<VPTeamMembers size="medium" :members />

*La liste des contributeurs est synchronisée avec Github toutes les semaines.*
