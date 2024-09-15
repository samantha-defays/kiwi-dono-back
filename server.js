const app = require('./app');
const PORT = process.env.PORT || 3000;

// Démarrer le serveur si ce n'est pas un environnement de test
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
