---
title: "Découper les procès-verbaux de la Société des Nations"
date: 2025-04-11
partenaire: "Institut de hautes études internationales et du développement (IHEID), Genève"
periode: "printemps 2025"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "donnees"
image: "images/realisations/iheid-zones.jpg"
image_alt: "Deux pages de procès-verbaux de l'Assemblée de la Société des Nations, en français à gauche et en anglais à droite. Des cadres de couleur délimitent les colonnes et les numéros de page détectés automatiquement."
resume: "Repérer automatiquement, sur des milliers de pages bilingues, la colonne française, la colonne anglaise, les notes et les numéros de page, pour préparer la reconnaissance du texte et sa structuration."
chiffres:
  - valeur: "0,90"
    libelle: "de précision moyenne de détection (mAP50), avec 600 pages annotées"
  - valeur: "0,68"
    libelle: "avec 200 pages seulement : l'annotation paie"
  - valeur: "9"
    libelle: "types de zones : colonnes, séances, sessions, notes, numéros de page"
# Post LinkedIn associé (affiché sous le résumé, ici et sur la page du pôle).
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7469703449979510784/"
liens:
  - titre: "Le portail LoN Sampo (Aalto University)"
    url: "https://minutes.ldf.fi"
  - titre: "Le projet « Minutes of Multilateralism » (IHEID)"
    url: "https://www.graduateinstitute.ch/international-programmes/minutes-multilateralism"
---

## Le corpus

Les procès-verbaux de l'Assemblée de la Société des Nations (1920-1946) sont imprimés sur deux colonnes, le français à gauche, l'anglais à droite, avec des titres de séance, des notes de bas de page et une pagination propres à chaque langue. Le Centre for Digital Humanities and Multilateralism de l'IHEID les rend interrogeables dans le cadre du projet « Minutes of Multilateralism ».

## Notre mission

Ce fut la première mission d'ampleur de CartaData : reconnaissance du texte, repérage des entités nommées et structuration des données. Pour que chaque phrase soit rattachée à sa langue et à sa séance, il fallait d'abord découper la page.

1. **Annotation** de pages des années 1923 à 1926 dans Label Studio, selon neuf types de zones.
2. **Entraînement** d'un détecteur d'objets léger (YOLO11 nano), d'abord sur 200 pages, puis sur 600.
3. **Pré-annotation** : le modèle propose ses cadres dans Label Studio, l'annotateur n'a plus qu'à les corriger.

Les zones fréquentes (colonnes, numéros de page, notes) sont reconnues de façon fiable ; les plus rares (titres de session) demanderaient davantage d'exemples.

## Le résultat

Les données issues de ce travail alimentent aujourd'hui le portail sémantique « LoN Sampo », réalisé avec l'université Aalto : 27 000 pages de procès-verbaux et 3 000 délégués, interrogeables en ligne.
