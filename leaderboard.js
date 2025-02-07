const leaderboard = {
    apiUrl: 'https://your-api-url.com/leaderboard',

    fetchLeaderboard: async function() {
        try {
            const response = await fetch(this.apiUrl);
            const data = await response.json();
            this.displayLeaderboard(data);
        } catch (error) {
            console.error('Error fetching leaderboard data:', error);
        }
    },

    displayLeaderboard: function(data) {
        const leaderboardSection = document.getElementById('leaderboard');
        leaderboardSection.innerHTML = '<h2>Leaderboard</h2>';
        const list = document.createElement('ol');
        data.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = `${entry.username}: ${entry.score}`;
            list.appendChild(listItem);
        });
        leaderboardSection.appendChild(list);
    },

    submitScore: async function(username, score) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, score })
            });
            const data = await response.json();
            this.fetchLeaderboard();
        } catch (error) {
            console.error('Error submitting score:', error);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    leaderboard.fetchLeaderboard();
});
