---
title: "Géolocaliser 2 928 cartes postales anciennes"
date: 2026-09-01
partenaire: "Archives départementales de Vaucluse"
periode: "2026"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "geolocalisation"
image: "images/vaucluse/FRAD084_07FI007_0038.jpg"
image_alt: "Carte postale ancienne sépia : le Rhône et, à l'horizon, la silhouette d'Avignon."
resume: "Une chaîne qui lit chaque carte postale, en déduit commune, lieu-dit et monument, et la positionne sur une carte. Le résultat est publié par le Département."
chiffres:
  - valeur: "2 779"
    libelle: "cartes localisées sur 2 928"
  - valeur: "87,3 %"
    libelle: "de cartes justes aux trois niveaux, sur 592 vérifiées à la main"
  - valeur: "0,23 %"
    libelle: "d'hallucinations"
liens:
  - titre: "La carte publiée par le Département"
    url: "https://maps.vaucluse.fr/index.php/view/map?repository=archives&project=cartes_postales_vaucluse"
  - titre: "« Album de Vaucluse », billet des Archives"
    url: "https://memento.vaucluse.fr/toutes-les-ressources/album-de-vaucluse-les-cartes-postales-revelent-le-territoire"
  - titre: "Démo : essayer sur vos cartes"
    url: "https://icimathieu-cartes-portfolio.hf.space/essayer"
  - titre: "Code du prototype (hackathon)"
    url: "https://github.com/icimathieu/vaucluse"
equipe: ["Mathieu Rivière", "Maxime Létoffé", "Mathias Garnier"]
---

## Le fonds

Les Archives départementales de Vaucluse ont numérisé 2 928 cartes postales anciennes. Le lieu représenté est indiqué tantôt dans la notice, tantôt sur la carte elle-même, et parfois nulle part.

## La méthode

1. **Moissonnage** des images et des métadonnées depuis le site des Archives.
2. **Lecture** de chaque carte par un modèle vision-langage ouvert (Qwen2.5-VL, 7 milliards de paramètres) : légendes imprimées, annotations manuscrites, contenu de l'image.
3. **Géocodage en cascade** : neuf niveaux de repli, validation croisée entre la lecture du modèle et la notice (écart toléré : 2 km), rejet des points à plus de 20 km de la commune.
4. **Contrôle humain** des cas douteux, puis carte interactive.

## L'évaluation

Avant de publier un chiffre, nous avons annoté à la main 600 cartes (592 retenues, 8 cas ambigus exclus). La chaîne complète place correctement **87,3 %** des cartes aux trois niveaux — commune, lieu-dit, monument — et invente un lieu dans **0,23 %** des cas. 31 cartes ont été localisées alors qu'aucun nom de lieu n'y est lisible.

## Le livrable

Les Archives ont intégré le résultat à leur cartographie en ligne : 2 779 des 2 928 cartes y figurent. Les données sont livrées en formats ouverts, réutilisables dans un SIG.
