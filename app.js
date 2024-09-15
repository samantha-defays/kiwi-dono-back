const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

// Middleware de journalisation pour afficher toutes les requêtes
app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});

// Route de test
app.get('/api/messages', (req, res) => {
    res.json([
        { id: 1, text: 'Message 1' },
        { id: 2, text: 'Message 2' }
    ]);
});

const messageRoutes = require('./routes/messages');
app.use('/messages', messageRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('Route non trouvée');
});

module.exports = app;
