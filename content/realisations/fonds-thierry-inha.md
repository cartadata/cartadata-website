---
title: "Pré-indexer le fonds Thierry de l'INHA"
date: 2026-01-30
partenaire: "Institut national d'histoire de l'art (INHA) · hackathon du master Humanités numériques"
periode: "janvier 2026"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "vision"
resume: "Classer automatiquement des milliers de photographies du patrimoine arménien et géorgien par type de vue et par sujet, puis faire valider ces propositions par les experts dans une application dédiée."
chiffres:
  - valeur: "8 196"
    libelle: "vues numérisées, en 297 lots IIIF"
  - valeur: "1 335"
    libelle: "vues indexées par des experts, pour apprendre"
  - valeur: "1"
    libelle: "application de validation en ligne : IAnahid"
liens:
  - titre: "Code, carnets et modèles (GitHub)"
    url: "https://github.com/DeniseAtzori/ThierryNum-ENC"
  - titre: "L'application IAnahid"
    url: "https://ielenia-ianahid-test.hf.space/"
equipe: ["Denise Atzori", "Thaïs Raffray", "Chiara Tedesco"]
---

## Le fonds

Le fonds Nicole et Jean-Michel Thierry de l'INHA réunit quelque 100 000 photographies, films et dossiers de recherche (1950-2017). Un premier volet, consacré au patrimoine arménien et géorgien, a été numérisé pour être documenté par une communauté d'experts.

## La méthode

1. **Type de vue** : un classifieur d'images (YOLO11 nano) appris sur les vues déjà indexées.
2. **Sujet** : trop peu d'exemples par sujet pour un apprentissage supervisé ; les images sont donc regroupées par ressemblance (DINOv2, EfficientNet), après comparaison de plusieurs modèles.
3. **Validation** : l'application IAnahid présente les images lot par lot. L'expert accepte ou corrige le type et le sujet pour tout un lot, peut faire rédiger une légende par un modèle de langue, puis exporte un tableau prêt pour le catalogue.

L'IA trie, l'expert valide : le temps d'indexation est consacré aux cas difficiles.
