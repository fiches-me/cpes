---
title: 🔢 Représentation des nombres
---
# 🔢 Représentation des nombres

🂥, 🯵, Ⅴ, 5, Cinq, $101_2$ : tout ces caractères sont des représentants du même nombre : 5. 

Dans une machine, les informations sont (en)codées avec de l’électricité. On note 0 si il n'y a pas de courant et 1 si il y en a. Ces 0 et 1 sont les chiffres binaires (binary digits, bits en anglais).

Un paquet de 8 bits est appelé octet (bytes en anglais). Les octets sont ensuite organisés en mot machines de 2, 4, 8 octets (16, 32, 64 bits). Les conventions permettant d'associer un sens aux mots machines s'appellent **encodages**.
## Encodage des entiers naturels $N$
### Représentation usuelle
D'habitude les nombres sont représentés en base 10 : avec 10 chiffres de 0 à 9.

Exemple : $123 = 1 \times 10^2 + 2 \times 10^1 + 3 \times 10^0$
### Représentation binaire
Le binaire utilise la base 2. On écrit donc les nombres avec des bits (et non des chiffres).

Exemple : $123_{10} = 1111011_2$