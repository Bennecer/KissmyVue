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

#### **08/09/2020 - 10:30**
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

#### **08/09/2020 - 10:36**
Premier commit, c'est parti !

#### **08/09/2020 - 10:42**
Je viens de simplement créer les vues. Je suis plutôt confiante pour l'instant. Je vais maintenant essayer de récupérer les données de l'API sur la page Liste.

#### **08/09/2020 - 10:48**
J'ai eu un appel important, je reprends (10:52)

#### **08/09/2020 - 10:56**
J'ai installé Axios pour les appels et Bootstrap pour un meilleur rendu.

#### **08/09/2020 - 11:09**
Je constate qu'il n'y a pas de pagination et que la requête est limitée à 100 recettes à la fois. Je ferai avec.
Je regrette tellement de ne pas avoir de deuxième écran pour ce test :(

#### **08/09/2020 - 11:13**
Pour le soucis de pagination, je vais faire une requête de 10 recettes et si je clique sur un bouton pour obetnir plus de recettes, j'appellerai cette fois 20, puis 30, etc.

#### **08/09/2020 - 11:20**
Ok j'ai donc décidé de récupérer des recettes de pasta. L'appel fonctionne bien et je récupère les recettes. Elles se display bien. Maitenant je vais créer un composant "card" réutilisable.