const axios = require('axios');

// Fetch player stats using CricAPI
const getPlayerStats = async (playerId) => {
  try {
    const response = await axios.get(`https://cricapi.com/api/playerStats`, {
      params: {
        playerID: playerId,
        apiKey: 'YOUR_API_KEY' // Replace with your CricAPI key
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching player stats:", error);
  }
};
