---
title: "Explorer un fonds photographique par l'image"
date: 2026-06-18
partenaire: "École d'été « From Closure to Sharing » (ISMEO, L'Orientale, Inalco, DAFA, consortium Huma-Num Distam+)"
periode: "juin 2026"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "vision"
resume: "Deux carnets d'atelier pour une école d'été sur le patrimoine de l'Afghanistan et des territoires voisins : détecter les zones d'une fiche photographique, regrouper les images qui se ressemblent, puis valider."
chiffres:
  - valeur: "2"
    libelle: "carnets publiés, exécutables sur Google Colab"
  - valeur: "3"
    libelle: "zones détectées sur chaque fiche : photographie, légende persane, légende française"
  - valeur: "60"
    libelle: "fiches annotées pour entraîner le détecteur"
# Post LinkedIn associé (affiché sous le résumé, ici et sur la page du pôle).
linkedin: "https://www.linkedin.com/posts/le-consortium-humanum-distam-a-fait-appel-share-7472286609074393090-0sfG/"
liens:
  - titre: "Carnet de Mathieu Rivière et Thaïs Raffray : détection et regroupement (fonds IFRI)"
    url: "https://github.com/icimathieu/atelier_spatialisation_INHA/blob/main/scripts/2026-06-19_notebooks/morning/02_image_exploration_IFRI.ipynb"
  - titre: "Carnet de Thaïs Raffray, Chiara Tedesco et Denise Atzori : classification non supervisée"
    url: "https://github.com/DeniseAtzori/ThierryNum-ENC/blob/main/Notebooks/Clustering_efficientnet_afg.ipynb"
  - titre: "Programme de l'école d'été"
    url: "https://etudes-areales.cnrs.fr/programme-summer-school/"
equipe: ["Thaïs Raffray", "Chiara Tedesco", "Denise Atzori"]
---

## Le contexte

Le consortium Huma-Num Distam+ a fait appel à CartaData pour animer les ateliers d'intelligence artificielle de l'école d'été « From Closure to Sharing: Exploring Research Data on the Heritage of Afghanistan and Neighbouring Territories » (Paris, 15-19 juin 2026). Nos membres y ont repris les développements des hackathons du master Humanités numériques : classification d'images, transcription et spatialisation d'archives.

## Les carnets

1. **Détecter** : sur les fiches du fonds photographique de l'Institut français de recherche en Iran, un détecteur (YOLO11 nano) appris sur 60 fiches annotées isole la photographie et ses légendes, que l'on peut ensuite lire séparément.
2. **Regrouper** : les photographies sont décrites par un réseau de neurones (EfficientNet), puis regroupées par ressemblance, sans aucune étiquette préalable.
3. **Valider** : le tableau produit se charge dans l'application IAnahid, où l'on corrige les regroupements lot par lot.

Les images des fonds ne sont pas diffusées : seuls le code et la méthode le sont.
