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

#### **08/09/2020 - 11:36**
Le composant que j'ai nommé Recipe fonctionne bien, je commit et je passe à la pagination. Pour l'instant j'avance bien, je suis contente.

#### **08/09/2020 - 11:45**
Le chargement de nouveaux éléments fonctionne. Par contre j'ai un problème de cookie, il faudrait que je rajoute un attribut SameSite. Je n'ai jamais rencontré cette erreur dans ma vie de développeuse. J'essaierai de le corriger à la fin du test, pour l'instant je continue. D'ailleurs maintenant je vais m'intéresser au store pour stocker mes recettes.

#### **08/09/2020 - 12:04**
Le store fonctionne, j'arrive à stocker les recettes youpi ! Je peux me commander à manger hehe.

#### **08/09/2020 - 12:41**
Ma nourriture n'est toujours pas arrivée :'( Je continue en attendant. Avec la page Détails.

#### **08/09/2020 - 12:53**
Ma nourriture est arrivée ! Une pause s'impose.

#### **08/09/2020 - 13:41**
Je reprends ! 

#### **08/09/2020 - 13:53**
Je n'arrivais pas à passer une prop de la liste aux détails. C'est parce que j'avais oublié props: true dans le router...

#### **08/09/2020 - 14:00**
J'arrive à faire une nouvelle requête pour récupérer les détails de la recette (je dois faire un nouvel appel api pour cela). Comme prévu, au reload, j'ai une erreur car la prop n'est plus là. Donc je vais la stocker en localstorage.

#### **08/09/2020 - 14:25**
Ok Houston nous avons un problème... L'api limitait le nombre d'appels et j'ai dépassé le nombre autorisé :D Je vais essayer de générer une nouvelle clé... Croisez les doigts avec moi svp !

#### **08/09/2020 - 14:28**
Bon bon bon ça ne fonctionne pas ! Je vais devoir recréer un compte avec une autre adresse. I'll be back.

#### **08/09/2020 - 14:31**
OK C'EST BON

#### **08/09/2020 - 14:44**
Il y a une erreur qui me semble incohérente. Elle me dit que certaines informations dans la page détails sont undefined mais finalement elles sont bien affichées. Je penche pour un problème au niveau du lifecycle. Cette erreur ne m'empêche pas d'avancer donc je continue et j'essaierai de la résoudre à la fin.

#### **08/09/2020 - 15:05**
J'ai fini d'entrer les détails de recette que je souhaitais voir affichés. Maintenant je vais faire en sorte de pouvoir naviguer entre les recettes.

#### **08/09/2020 - 15:21**
J'ai encore un problème d'accès à l'api, trop de requêtes, je recommence ma manip. N'hsitez pas à m'appeler si le problème réitère quand je vous enverrai le test !

#### **08/09/2020 - 15:30**
La navigation fonctionne correctement. On peut naviguer de recette en recette et on peut raffraichir la page car les dernières données sont stockées en localstorage.

#### **08/09/2020 - 16:50**
J'ai réussi à gérer l'ajout de favoris mais j'ai un bug qui persiste et je ne trouve pas de solution à ce problème. Lorsque je reviens sur la liste, la data isFavorite ne fonctionne pas correctement alors que je la track avec la console Vue et des console.log. Aussi, sur la page favoris, lorsque j'ai plusieurs favoris et que je retire un autre que le dernier, le favori suivant celui que j'ai enlevé a aussi un bug sur la data isFavorite. 
Là je bloque vraiment... Je ne vais pas aller plus loin sur les favoris. Si j'avais des collègues avec moi j'aurais demandé de l'aide pour cela.
Je vais maintenant passer à une présentation potable de la page d'accueil et je vais également créer un footer avant de rendre le test.

#### **08/09/2020 - 16:56**
J'ai remarqué un autre problème lorsque je suis sur la page détails en venant des favoris. Je règle ça.

#### **08/09/2020 - 17:04**
Ok C'est corrigé, je passe à la page d'accueil.