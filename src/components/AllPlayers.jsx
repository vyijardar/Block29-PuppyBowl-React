import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../API";
export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchPlayers() {           
                const playersData = await fetchAllPlayers();
                setPlayers(playersData);  
     }
    fetchPlayers();
    }, []);
    
    return (
        <div>
            <h1>Puppy Bowl Roster</h1>
            <h2>All Players</h2>
            {
            players.length > 0 ? (
                <ul>
                    {players.map(player => (
                        <li key={player.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                            <h3>{player.name}</h3>
                            <img src={player.imageUrl} alt={player.name} style={{ width: "150px" }} />
                            <button onClick={() => navigate(`/${player.id}`)}>View Details</button>
                        </li>
                    ))}
                </ul>) :
                (<p>No Players available.</p> )
            }
        </div>
    );
}