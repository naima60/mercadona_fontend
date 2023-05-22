# mercadona_fontend

# Description de l’application
Cette application frontend est développée dans le cadre de ma formation développeur web Python.  Elle représente un site vitrine du super marché espagnol « Mercadona » à titre d’exemple seulement.
Ce projet frontend est développé en utilisant React pour la création de l'interface utilisateur de mon application. Il communique avec deux API REST créées dans une autre application Django pour la partie backend  afin de récupérer et envoyer les données nécessaires représentant les produits et leur catégories. Vous trouverez ci-dessous le lien Git du projet backend avec Django.

# Lien application Django (backend) 
Afin de visualiser les produits que j’ai déjà stocké dans la base de données hébergée sur le site alwaysdata , il convient d’installer le projet suivant sur votre machine à l’aide du fichier Readme le concernant : 
Lien : https://github.com/naima60/backend_mercadona.git

# Accéder au site Mercadona sans l’installer sur votre machine
Copier/coller cette url dans votre navigateur : https://naima60.github.io/mercadona_fontend/

ou

A partir de votre position actuelle, aller dans settings\pages\ dans l’encadré  Your site is live at : cliquer sur  le lien :  https://naima60.github.io/mercadona_fontend/

# Installation du projet sur votre machine
1. Version node.js à installer 
v18.15.0 (https://nodejs.org/fr/download/releases)

2. Clonez ce dépôt sur votre machine locale en exécutant la commande :
git clone https://github.com/naima60/mercadona_fontend.git

3. Ouvrez le projet avec un éditeur de code comme Visual studio code 

4. Pour installer les dépendances JavaScript, exécutez la commande :
 npm install

## Structure du projet
- `src/`: Contient le code source de l'application.
- `components/`: Composants réutilisables.
-  `public/`: Fichier public statique.

## Utilisation
1. Pour démarrer l'application en mode développement, exécutez la commande :
npm start
2. Accédez à `http://localhost:3000` dans votre navigateur pour voir l'application.

## Fonctionnalités
- Accès à la liste des produits : cliquer sur le bouton Produits de la barre de navigation.
- Visualiser les promotions : Le prix des produits en promotion apparait en rouge.
- Trier les produits par catégorie : à partir de la liste des produits, cliquer sur un bouton des catégories présentes, le système interroge la base des données et affiche uniquement les produits affectés à cette dernière.

## Auteur
Naima Boutrah


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
