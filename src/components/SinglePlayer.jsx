
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import { removePlayer } from "../API";

export default function SinglePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const playerData = await fetchSinglePlayer(id);
        setPlayer(playerData);

      } catch (error) {
        console.error("Error fetching single player details:", error)
      }

    }
    fetchPlayer();
  }, [id]);

  // Handle delete player
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this player?");
    if (confirmed) {
      await removePlayer(id);
      alert("Player deleted successfully!");
      navigate("/"); 
    }
  };
  if (!player) return <p>Loading player details...</p>;

  return (
    <div id="box">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} style={{ width: "200px" }} />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <p>Team: {player.teamName || "Unassigned"}</p>
      <button onClick={() => navigate("/")}>Back to All Players</button>
      <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
        Delete Player
      </button>
    </div>
  );
};

