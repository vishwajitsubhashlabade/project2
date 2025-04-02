// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [playerStats, setPlayerStats] = useState(null);
  const playerId = '12345'; // Example player ID, replace with real player ID

  useEffect(() => {
    const fetchPlayerStats = async () => {
      const response = await axios.get(`http://localhost:5000/api/player/${playerId}`);
      setPlayerStats(response.data);
    };

    fetchPlayerStats();
  }, [playerId]);

  return (
    <div className="App">
      <h1>Player Stats</h1>
      {playerStats ? (
        <div>
          <h2>{playerStats.name}</h2>
          <p>Runs: {playerStats.runs}</p>
          <p>Average: {playerStats.average}</p>
          {/* Add more player stats */}
        </div>
      ) : (
        <p>Loading player stats...</p>
      )}
    </div>
  );
}

export default App;
