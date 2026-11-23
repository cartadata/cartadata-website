# Site de CartaData

Site de CartaData, aspirante Junior-Entreprise de l'École nationale des chartes – PSL :
**https://cartadata.github.io/cartadata-website/**
Généré avec [Hugo](https://gohugo.io) (extended ≥ 0.168), même socle que le site du master
Humanités numériques ([chartes/dh-website](https://github.com/chartes/dh-website)).

## Travailler en local

```sh
git submodule update --init   # thème educenter-hugo
hugo server                   # http://localhost:1313
```

## Où modifier quoi

| Contenu | Fichier |
|---|---|
| Les pôles (texte, prestations, spécimen, statut) | `content/poles/*.md` |
| Les réalisations (un seul `pole` chacune) | `content/realisations/*.md` |
| Les démos (un seul `pole` chacune ; la 1re est « à la une ») | `data/demos.yml` |
| Chiffres de l'année | `data/chiffres.yml` |
| Bureau, experts, photos (`accord: true` obligatoire) | `data/equipe.yml` + `assets/images/equipe/` |
| Menu, adresse, liens | `hugo.toml` |
| Styles | `assets/scss/` |

## Contribuer

On ne pousse pas directement sur `main` : une branche, puis une **pull request** vers
`main`, décrite en quelques puces (les modifications faites). Le workflow `test-build.yml`
vérifie que le site compile ; une fois la PR fusionnée, `hugo.yml` déploie sur GitHub Pages.

⚠ Le CSS compilé doit rester 100 % ASCII (voir `assets/scss/main.scss`), et dans les
gabarits on n'écrit jamais `"/" | relURL` (le site vit sous `/cartadata-website/`).
