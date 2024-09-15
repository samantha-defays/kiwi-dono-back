import express from 'express';
import cors from 'cors'; 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});

app.get('/api/messages', (req, res) => {
    res.json([
        { id: 1, text: 'Message 1' },
        { id: 2, text: 'Message 2' }
    ]);
});

import messageRoutes from './routes/messages.js';
app.use('/messages', messageRoutes);

app.use((req, res, next) => {
    res.status(404).send('Route non trouvée');
});

export default app;
