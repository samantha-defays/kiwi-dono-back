import express from 'express';
const router = express.Router();

let messages = [];

// GET
router.get('/', (req, res) => {
    res.status(200).json(messages);
});

// GET by ID
router.get('/:id', (req, res) => {
    const message = messages.find(m => m.id === parseInt(req.params.id));
    if (!message) {
        return res.status(404).json({ error: 'Message non trouvé' });
    }
    res.status(200).json(message);
});

// POST
router.post('/', (req, res) => {
    const newMessage = {
        id: messages.length + 1,
        text: req.body.text
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// PUT
router.put('/:id', (req, res) => {
    const messageIndex = messages.findIndex(m => m.id === parseInt(req.params.id));
    if (messageIndex == -1) {
        return res.status(404).json({ error: 'Message non trouvé' });
    }

    // Mettre à jour le message
    messages[messageIndex].text = req.body.text;
    res.status(200).json(messages[messageIndex]);
});

// DELETE
router.delete('/:id', (req, res) => {
    console.log(req);
    
    const messageIndex = messages.findIndex(m => m.id === parseInt(req.params.id));
    if (messageIndex === -1) {
        return res.status(404).json({ error: 'Message non trouvé' });
    }

    const deletedMessage = messages.splice(messageIndex, 1);
    res.status(200).json(req.params.id);
});

export default router;
