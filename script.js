const express = require('express');
const app = express();
const port = 3000;

let gameTime = "--:--:--";

app.use(express.json());

app.get('/api/time', (req, res) => {
    res.json({ gameTime: gameTime });
});

app.post('/api/time', (req, res) => {
    if (req.body && req.body.gameTime) {
        gameTime = req.body.gameTime;
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
