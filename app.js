const express = require('express');
const cors = require('cors');
const app = express();

// Middleware pour analyser le JSON
app.use(express.json());

// Active les CORS pour les appels du front
app.use(cors());

// Middleware de journalisation pour afficher toutes les requêtes
app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});

const messageRoutes = require('./routes/messages');
app.use('/messages', messageRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('Route non trouvée');
});

// Démarrer le serveur sur le port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
