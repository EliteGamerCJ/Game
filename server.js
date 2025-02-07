const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/leaderboard', { useNewUrlParser: true, useUnifiedTopology: true });

const scoreSchema = new mongoose.Schema({
    username: String,
    score: Number
});

const Score = mongoose.model('Score', scoreSchema);

app.get('/leaderboard', async (req, res) => {
    try {
        const scores = await Score.find().sort({ score: -1 }).limit(10);
        res.json(scores);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leaderboard data' });
    }
});

app.post('/leaderboard', async (req, res) => {
    const { username, score } = req.body;

    try {
        const newScore = new Score({ username, score });
        await newScore.save();
        res.status(201).json(newScore);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit score' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
