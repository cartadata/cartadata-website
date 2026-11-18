---
title: "Structuration de données"
court: "Structuration de données"
numero: "IV"
weight: 4
accroche: "Encodage, nettoyage et normalisation : transformer des transcriptions, des inventaires ou des tableurs en données propres, documentées et réutilisables."
prestations:
  - "Encodage et structuration : XML, JSON, CSV, références bibliographiques (BibTeX, Zotero)."
  - "Nettoyage et normalisation de jeux de données (Excel, SQL, Python)."
  - "Extraction d'informations depuis du texte libre par modèles de langue, avec garde-fous contre l'invention."
  - "Correction et re-correction de données existantes par modèles de langue, sous contrôle humain."
  - "Collecte par moissonnage web et interrogation d'API (Wikidata, BnF, api.gouv.fr)."
  - "Modélisation de bases de données et interopérabilité."
  - "Data visualisation : graphiques et infographies (Python, Tableau)."
methodes:
  - "Décodage contraint : le modèle ne peut recopier que des fragments du texte source"
  - "Vérité terrain annotée à la main pour mesurer la qualité"
  - "Alignement sur des référentiels (Wikidata, référentiels officiels)"
specimen:
  type: "code"
  titre: "La fiche lue au pôle I, structurée"
  code: |
    {
      "fiche":    "IFRI_FAP_10273_R",
      "region":   "Khorassan",
      "commune":  "Ferdowsi",
      "monument": "Ferdowsi Imamzādeh Tūn"
    }
  source: "Sortie du modèle Gemma 3 (4B) à décodage contraint : chaque valeur est une sous-chaîne exacte de la lecture OCR. Le modèle peut s'abstenir, il ne peut pas réécrire."
---
