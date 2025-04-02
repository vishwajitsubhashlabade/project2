import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerStats = ({ playerId }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    // Fetch player stats from API when the component mounts
    const fetchPlayerStats = async () => {
      const response = await axios.get(`https://api.example.com/player/${playerId}`);
      setPlayerData(response.data);
    };
    fetchPlayerStats();
  }, [playerId]);

  if (!playerData) return <p>Loading...</p>;

  return (
    <div className="player-stats">
      <h2>{playerData.name}</h2>
      <img src={playerData.imageURL} alt={playerData.name} />
      <div className="stats">
        <h3>Test Format</h3>
        <p>Runs: {playerData.testStats.runs}</p>
        <p>Average: {playerData.testStats.average}</p>
        <p>Strike Rate: {playerData.testStats.strikeRate}</p>
        <h3>ODI Format</h3>
        <p>Runs: {playerData.odiStats.runs}</p>
        <p>Average: {playerData.odiStats.average}</p>
        <h3>T20 Format</h3>
        <p>Runs: {playerData.t20Stats.runs}</p>
        <p>Average: {playerData.t20Stats.average}</p>
      </div>
    </div>
  );
};

export default PlayerStats;
