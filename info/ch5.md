---
title: 🔢 Représentation des nombres
---

# 🔢 Représentation des nombres

🂥, Ⅴ, 5, Cinq, $101_2$ : tout ces caractères sont des représentants du même nombre : 5. 

Dans une machine, les informations sont (en)codées avec de l’électricité. On note 0 si il n'y a pas de courant et 1 si il y en a. Ces 0 et 1 sont les chiffres binaires (binary digits, bits en anglais).

Un paquet de 8 bits est appelé octet (bytes en anglais). Les octets sont ensuite organisés en mot machines de 2, 4, 8 octets (16, 32, 64 bits). Les conventions permettant d'associer un sens aux mots machines s'appellent **encodages**.

## Encodage des entiers naturels $\mathbb{N}$

### Représentation usuelle

D'habitude les nombres sont représentés en base 10 : avec 10 chiffres de 0 à 9.

Exemple : $123 = 1 \times 10^2 + 2 \times 10^1 + 3 \times 10^0$

### Représentation binaire

Le binaire utilise la base 2. On écrit donc les nombres avec des bits (et non des chiffres).

Exemple : $123_{10} = 1111011_2$

### Boutisme

Quand on écrit un groupe de bits, il y a deux façon de le lire
- de droite à gauche : le **gros-boutisme** (*big-endian*)
- de gauche à droite : le **petit-boutisme** (*little-endian*)

### Hexadécimal

Au lieu d'écrire des lignes interminables de bits, on a créé une autre notation pour simplifier la notation : l'**hexadécimal**. Cette base est composé de 16 unités, de 0 à f. 

Exemple : $6748_{10} = 11011001011100_2 = 1A5C_{16}$

On divise donc par 16 pour passer d'un base 10 à un hexadécimale. 

### Opérations Usuelles

## Encodage des entiers relatifs $\mathbb{Z}$

### Idée de bit de signe

### Complément à 2

## Encodage des flottants

Pour encoder des flottants, on suivra la norme IEEE754 (Institute of Electrical and Electronics Engineers). On décompose un flottant de 64 bits en:

- 1 bit pour le signe (noté s)
- 11 bits pour l'exposant (noté e)
- 52 bits pour la mantisse (noté m)

On doit pouvoir l'écrire, en décimal, de la manière suivante :

$$s \times m \times 2^{e-1023}$$

la mantisse est écrite en puissance de deux inversés (1/2, 1/4...).

> [!WARNING]
> Les flottants ne peuvent pas représenter tout les nombres réels (on ne peux pas écrire une infinité de nombres sur 64 bits).
