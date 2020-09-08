# kiss my Test - Vue.js
Bienvenue dans mon carnet de bord pour le test frontend de kiss my !

## Progression

### Installation

#### **08/09/2020 - 10:16**
* Projet récupéré sur le gitlab et pushé sur la branche bennecer-maella disponible sur https://github.com/Bennecer/KissmyVue.git
* Vue-CLI installé, yarn install et yarn serve ont fonctionné parfaitement.

### Réflexion

#### **08/09/2020 - 10:19**
Re re relecture des instructions, choix api, première réflexion de la structure sur papier.

#### **08/09/202 - 10:30**
Je choisis de prendre l'api spoonacular pour récupérer des recettes. Le lien ici : https://spoonacular.com/
J'ai réfléchi sur papier comment je voulais procéder :
* Créer les vues et set le router dans un premier temps
* En ce qui concerne le contenu :
  * Selon le temps que je mets, une page d'accueil pour présenter le projet.
  * Une page "Liste" pour défiler les recettes. Selon le nombre renvoyer par l'api, je ferai soit une requette globale soit une sélection spécifique de recettes (par exemple des recettes de pasta uniquement).
  * Une page "Détails" qui donnera la procédure de la recette ainsi que des informations supplémentaires.
  * Une page "Favoris" pour visualiser les recettes qu'on préfère.
* Ayant eu le problème auparavant, je ferai attention à la persistance des données. Par exemple si je passe des informations via le router et que je refresh la page Détails admettons, mes données seront perdues. Alors comme décrit dans le test pour les favoris, je vais stocker les dernières données dans le localstorage pour ne pas avoir ce problème.

### Développement

#### **08/09/202 - 10:36**
Premier commit, c'est parti !