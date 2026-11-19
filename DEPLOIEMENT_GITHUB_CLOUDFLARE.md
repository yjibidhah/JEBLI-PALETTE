# JEBLI PALETTE — Publier le site sur GitHub + Cloudflare Pages

Le site est **statique** (HTML, CSS, JavaScript, photos locales). Il n'utilise pas de Next.js, Vite ni de compilation Node. La page d'accueil est `index.html` à la racine du dépôt.

## 1. Créer le dépôt GitHub (une seule fois)

Ouvrir https://github.com/new connecté à votre compte GitHub et créer un dépôt nommé **jebli-palette**. Choisir **Private** ou **Public** selon votre préférence. **Ne pas cocher** les options d'ajout automatique de README, .gitignore ou licence (les fichiers sont déjà fournis).

## 2. Envoyer les fichiers vers GitHub

Sur Windows avec Git installé :

1. Extraire entièrement le ZIP de ce dossier.
2. Ouvrir un terminal PowerShell dans le dossier extrait **où se trouve index.html**.
3. Exécuter :

```powershell
git init
git branch -M main
git add .
git commit -m "JEBLI PALETTE - version Signature V6"
git remote add origin https://github.com/yjibidhah/jebli-palette.git
git push -u origin main
```

Si Git réclame une authentification, vous connecter à votre compte GitHub avec la méthode proposée par Git Credential Manager. Ne partagez jamais votre mot de passe ou jeton d'accès.

**Autre option** : avec GitHub Desktop, cloner le dépôt vide, copier tous les fichiers de ce dossier à sa racine, puis `Commit to main` et `Push origin`.

## 3. Connecter Cloudflare Pages à GitHub

1. Ouvrir https://dash.cloudflare.com/ puis **Workers & Pages**.
2. Choisir **Create application → Pages → Connect to Git**.
3. Autoriser Cloudflare à lire le dépôt GitHub **jebli-palette**.
4. Choisir le dépôt, puis **Begin setup**.
5. Renseigner :
   - **Project name** : `jebli-palette` (si le nom est disponible)
   - **Production branch** : `main`
   - **Framework preset** : `None` / aucun
   - **Build command** : vide
   - **Build output directory** : `.` (racine du dépôt)
   - **Root directory** : vide ou `/` selon l'interface
6. Cliquer sur **Save and Deploy**.

Le site sera disponible sur une URL Cloudflare Pages semblable à `https://jebli-palette.pages.dev` **si ce nom est disponible**. Le tableau de bord fournit la vraie URL après déploiement.

Après cela, les mises à jour envoyées vers la branche `main` seront automatiquement redéployées par Cloudflare Pages.

## 4. Contact et devis

- Téléphone : +212 660 406043
- Email : jeblipalette@outlook.com
- Le formulaire utilise **FormSubmit**. Le propriétaire de l'adresse email doit confirmer l'activation lors du premier envoi ; tester en conditions réelles après publication.

## Avant de rendre le site public

Les logos de la section « Ils nous ont fait confiance » et les indicateurs (+200 clients, etc.) étaient fournis comme maquette. Vérifier que ces entreprises sont réellement clientes et que l'utilisation des logos est autorisée, et confirmer les chiffres avant la diffusion publique.

## Remarque

Créer un projet Cloudflare Pages **avec Git** dès le départ : un projet créé en **Direct Upload** ne peut pas être converti par la suite en projet Git-integrated sans créer un nouveau projet Pages.

Documentation officielle Cloudflare :
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
