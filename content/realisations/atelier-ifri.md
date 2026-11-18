---
title: "Spatialiser un fonds photographique sur l'Iran"
date: 2026-06-19
partenaire: "École d'été « De la fermeture au partage » (Inalco, Distam+) · INHA"
periode: "juin 2026"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "geolocalisation"
resume: "Lire automatiquement des légendes en persan et en translittération latine, en extraire lieux et monuments, puis les localiser. Un atelier et un code ouvert."
chiffres:
  - valeur: "421"
    libelle: "fiches photographiques lues"
  - valeur: "2"
    libelle: "écritures : persan et translittération latine"
  - valeur: "4"
    libelle: "carnets Colab publiés"
liens:
  - titre: "Code et carnets de l'atelier"
    url: "https://github.com/icimathieu/atelier_spatialisation_INHA"
  - titre: "L'école d'été (Inalco)"
    url: "https://www.inalco.fr/actualites/de-la-fermeture-au-partage-une-ecole-dete-internationale-consacree-au-patrimoine-de"
equipe: ["Mathieu Rivière", "Maxime Létoffé"]
---

## Le fonds

Le fonds photographique de l'Institut français de recherche en Iran compte quelque 11 000 photographies d'archéologie, d'architecture et d'ethnologie. Chaque photographie est collée sur une fiche cartonnée, légendée à la main en persan, souvent accompagnée d'une translittération latine savante. Nous avons travaillé sur un échantillon de quatre ensembles géographiques : Kermān, Tabrīz, Māzandarān et Khorāsān.

## La méthode

1. **Lecture** des légendes par un modèle OCR (chandra-ocr-2), qui restitue le persan, la translittération et la mise en page.
2. **Structuration** en commune, monument et reste de la légende, par un petit modèle de langue dont le décodage est contraint : il ne peut recopier que des fragments exacts du texte lu. Trois modèles comparés à conditions égales.
3. **Localisation** des monuments par deux voies comparées : une recherche déterministe dans Wikidata, précise mais au faible rappel, et un modèle chercheur doublé d'un modèle juge, qui retrouve environ deux fois et demie plus de monuments.
4. **Géocodage des communes** (ArcGIS, Wikidata) et carte.
5. **Exploration de l'image** : détection des zones de la fiche (photographie, légende persane, légende française) et regroupement des photographies par similarité.

## L'atelier

Le 19 juin 2026, nous avons animé la journée de spatialisation de l'école d'été : le matin sur la lecture et la structuration, l'après-midi sur la localisation. Les quatre carnets sont publiés et exécutables sur Google Colab.

Les images du fonds ne sont pas diffusées : seuls le code et les sorties textuelles le sont.
