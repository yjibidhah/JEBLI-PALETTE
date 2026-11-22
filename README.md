# JEBLI PALETTE — Thème classique V7 (vert doux, crème et bois)

Site vitrine original avec photographie des palettes, catalogue filtrable, fiches produits, navigation mobile, chiffres, FAQ, contact et demande de devis.

## Ouvrir en local

Décompressez l'archive et ouvrez `index.html` dans Chrome ou Edge. Les images et logos sont inclus dans `assets/` et fonctionnent sans connexion. Les polices utilisent Google Fonts avec polices de secours locales.

## Publication GitHub + Cloudflare Pages

Ce dépôt est relié au projet Cloudflare Pages `jebli-palette` (domaine prévu : https://jebli-palette.pages.dev/). Le site est statique (HTML/CSS/JS), sans build. Les modifications de la branche `main` devraient déclencher un déploiement automatique dès que l'intégration GitHub–Cloudflare est active.

### Thème en vigueur

`index.html` charge `styles.css`, puis `classic-theme.css` pour retrouver les couleurs vert doux, crème et brun bois du design précédent. Le catalogue, les photos et les coordonnées restent inchangés.

### Vérification du déploiement

Contrôler dans Cloudflare > Workers & Pages > `jebli-palette` > Deployments que le dernier commit de `main` est bien publié. Si un commit n'apparaît pas, vérifier dans Settings > Builds > Git repository l'autorisation de l'application GitHub Cloudflare Workers and Pages.

## Contact

- Téléphone / WhatsApp : +212 660 406043
- Email de réception prévu : jeblipalette@outlook.com
- Le formulaire utilise FormSubmit seulement lorsque le site est hébergé et connecté à Internet. L'adresse doit être activée par son titulaire lors du premier envoi. En local, un lien `mailto:` permet d'ouvrir la messagerie. L'envoi automatique ne peut pas être garanti avant activation et test en conditions réelles.
- Pour modifier les coordonnées, ouvrez `config.js` (pensez aussi à changer les liens affichés dans `index.html`).

## Avant une publication publique

- Vérifier les chiffres **+200 clients**, **+50 membres**, **+15 années d'expérience**, fournis pour le projet.
- Les **20 logos** dans « Ils nous ont fait confiance » sont des exemples de présentation issus de la capture fournie et **ne constituent pas des preuves de collaboration**. Ne pas publier comme clients sans confirmation et autorisation.
- Valider les formats, descriptions, disponibilités et éventuelles normes/certifications des produits.

## Images

Toutes les photos de palettes ont été fournies directement pour le projet. Versions optimisées (JPEG) dans `assets/photos/`. Aucun hébergement Google Drive n'est nécessaire pour les afficher.
