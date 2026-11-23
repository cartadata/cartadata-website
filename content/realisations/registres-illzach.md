---
title: "Lire seize registres de délibérations, de 1811 à 1958"
date: 2026-11-20
partenaire: "Commune d'Illzach (Haut-Rhin)"
periode: "automne 2026"
# Un seul pôle par réalisation : elle n'apparaît que sur la page de ce pôle.
pole: "htr"
resume: "Transcrire automatiquement les délibérations du conseil municipal d'Illzach, en écriture allemande Kurrent, en français et sur deux colonnes bilingues : une dizaine de modèles comparés à des transcriptions de référence, puis une chaîne de production."
# Pages d'exemple : uniquement antérieures à 1930 (pas de particuliers nommés récents).
pages:
  - image: "images/realisations/illzach-1827.jpg"
    alt: "Page manuscrite en français : séance extraordinaire du conseil municipal du 30 septembre 1827, suivie des signatures des conseillers."
    legende: "1827 · français · 14,2 % d'erreurs par caractère"
  - image: "images/realisations/illzach-1870-1876.jpg"
    alt: "Page manuscrite en écriture allemande Kurrent, registre de 1870-1876."
    legende: "1870-1876 · Kurrent · 2,7 %"
  - image: "images/realisations/illzach-1877-1884.jpg"
    alt: "Page manuscrite en écriture allemande Kurrent, registre de 1877-1884, avec des guillemets de citation en marge de chaque ligne."
    legende: "1877-1884 · Kurrent · 2,3 %"
chiffres:
  - valeur: "5,3 %"
    libelle: "d'erreurs par caractère sur l'allemand Kurrent"
  - valeur: "4,3 %"
    libelle: "sur les pages bilingues français-allemand"
  - valeur: "0,004 $"
    libelle: "de coût de calcul par page en production"
---

## Le fonds

Seize registres de délibérations du conseil municipal, de 1811 à 1958 : un siècle et demi d'histoire d'une commune alsacienne, qui change de langue au gré des annexions. On y trouve trois cas de figure : l'allemand en écriture Kurrent, le français, et des pages sur deux colonnes, français et allemand en regard.

## La méthode

1. **Des pages de référence** transcrites à la main pour chaque écriture.
2. **Une comparaison** d'une dizaine de modèles vision-langage sur ces pages, mesurée en taux d'erreur par caractère et par mot.
3. **Une combinaison de modèles** pour les registres les plus anciens : trois lectures indépendantes, un vote, puis un arbitrage, avec une sortie PageXML corrigeable dans eScriptorium.
4. **Une chaîne de production** fondée sur le meilleur modèle, qui relance automatiquement les pages restées sans réponse.

## Les scores

| Écriture | Pages de référence | Erreurs par caractère | Erreurs par mot |
|---|---|---|---|
| Allemand (Kurrent) | 3 | 5,3 % | 15,8 % |
| Bilingue | 3 | 4,3 % | 14,9 % |
| Français, début du XIXe siècle | 2 | 14,6 % | 27,2 % |

Ces mesures portent sur peu de pages : ce sont des ordres de grandeur. En français, une partie des écarts tient aux choix de transcription : la machine recopie « 30 7bre 1827 » quand la référence développe « 30e Septembre ».
