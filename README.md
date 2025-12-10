**TP API Node.js TypeScript — PEDRO MASUNGU Paulina**

Le projet consiste à la création d'une API complète avec Express, TypeScript et SQLite.

Notre objectif est d'apprendre à structurer une API moderne et entièrement fonctionnelle avec création, récupération, suppression et modification d'utilisateurs et comprendre le fonctionnement réel côté serveur.

------------------------------------------------------------------------------------------

**1.Installation du Projet**

**Les outils à utiliser pour mettre en place le projet**
Node

npm

VS Code

SQLite intégré via better-sqlite3

-->La commande pour installer les dépendances
    npm install
-->La commande Pour démarrer l’API en mode développement avec Nodemon
    npm run dev

Le serveur démarre sur le PORT=4000
http://localhost:4000

-------------------------------------------------------------------------------------------

**2.Strcture du projet**

<img width="270" height="466" alt="image" src="https://github.com/user-attachments/assets/9e980489-7ffc-4143-9863-8b68c2d17a2b" />

-------------------------------------------------------------------------------------------

**3.Fonctionnalités de l’API**

Route GET /users: sert à récupèrer la liste des utilisateurs.

Route GET /users/id :Récupère un utilisateur par son ID.

Route POST /users: sert à ajouter un utilisateur avec le nom et email.

Route PUT /users/id: sert à mettre à jour un utilisateur. On utilisent COALESCE pour garde les valeurs inchangées.

Route DELETE /users/id: Sert à supprimer un utilisateur par son ID.

---------------------------------------------------------------------------------------------

**4.Les tests via Curl et Thunder Client**


**4.1 Teste de serveur** 

<img width="503" height="132" alt="image" src="https://github.com/user-attachments/assets/08eab0bb-2d08-4e8a-9372-7771a386dc74" />

<img width="583" height="71" alt="image" src="https://github.com/user-attachments/assets/126ee1ff-1a96-4d29-b853-6195f1ad9aee" />


**4.2 GET  Récupérer tous les utilisateurs** 

Avant l'ajout d'utilisateurs:

<img width="1126" height="447" alt="image" src="https://github.com/user-attachments/assets/5822f8f3-1e03-4576-b7f7-95ad4eea6478" />

Après l'ajout d'utulisateurs sans les ID:

<img width="620" height="753" alt="image" src="https://github.com/user-attachments/assets/aacbe838-9833-47b1-bbfb-05c90a7534e9" />

Avec Les ID:

<img width="892" height="154" alt="image" src="https://github.com/user-attachments/assets/5bd212e4-0a9e-4211-8a98-4ef25d8db5d2" />


**4.3 POST Ajouter un utilisateur** 

<img width="964" height="515" alt="image" src="https://github.com/user-attachments/assets/88404498-b7b6-40c3-838b-dbc4987a39c0" />


**4.4 GET Récupérer un utilisateur par son ID**

Avec Curl:

<img width="670" height="86" alt="image" src="https://github.com/user-attachments/assets/f1994ed9-392a-4537-aba4-5519008a6c97" />

Sur Thunder Client:

<img width="515" height="502" alt="image" src="https://github.com/user-attachments/assets/d8ac5a76-60bd-472c-8c8f-12fda208bb97" />

**4.5 PUT Modifier un utilisateur**

<img width="679" height="295" alt="image" src="https://github.com/user-attachments/assets/78ea7f82-debe-456e-9639-bb32b0c65345" />

Après la modification

<img width="468" height="702" alt="image" src="https://github.com/user-attachments/assets/84c44ba4-687e-4180-9f13-147fee1ee7d6" />


**4.6 DELETE Supprimer un utilisateur**

Avant la suppression

<img width="622" height="818" alt="image" src="https://github.com/user-attachments/assets/94eb8591-38b0-4af8-a3be-6086a0caf107" />

Après la suppression

<img width="674" height="204" alt="image" src="https://github.com/user-attachments/assets/37566a66-b6cd-4d8c-be39-c9ea6a37002b" />

<img width="648" height="72" alt="image" src="https://github.com/user-attachments/assets/a0c05b7e-c25b-47ff-9161-96c9fd1f6a80" />


La liste à jour après la suppression d'utilisateur

<img width="718" height="118" alt="image" src="https://github.com/user-attachments/assets/cd47cef5-00e6-4989-8ebb-214b1e986f0c" />


-----------------------------------------------------------------------------------------


**Bounus**

CRUD Complet

Bases de données (database.db)

API testeée avec Thunder Client et CURL


-------------------------------------------------------------------------------------------


**5.Auteur**
Ce projet a été réalisé par PEDRO MASUNGU Paulina, Étudiante en informatique.

--------------------------------------------------------------------------------------------








