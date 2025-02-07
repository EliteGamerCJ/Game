# Game

## Leaderboard Functionality

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/EliteGamerCJ/Game.git
   cd Game
   ```

2. Install server dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node server.js
   ```

4. Open `index.html` in your browser to play the game and see the leaderboard.

### API Endpoints

- **GET /leaderboard**
  - Fetches the top 10 scores from the leaderboard.
  - Response format:
    ```json
    [
      {
        "username": "Player1",
        "score": 100
      },
      {
        "username": "Player2",
        "score": 90
      },
      ...
    ]
    ```

- **POST /leaderboard**
  - Submits a new score to the leaderboard.
  - Request body format:
    ```json
    {
      "username": "Player",
      "score": 50
    }
    ```

### Database Setup

The leaderboard data is stored in a MongoDB database. Make sure you have MongoDB installed and running on your local machine. The server connects to the MongoDB instance at `mongodb://localhost:27017/leaderboard`.

If you want to use a different database or connection string, update the `mongoose.connect` line in `server.js` accordingly.
