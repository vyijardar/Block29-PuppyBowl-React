import "../index.css"

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT/players";

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // console.log(data.data.players)
    return data.data.players;
  } catch (error) {
    console.error("Failed to fetch players:", error);
  }
}

export const addNewPlayer = async (playerData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });
    const data = await response.json();
    //console.log('Player added:', data);  // This should log the added player object
    return data;

  } catch (error) {
    console.error("Error adding new player:", err);
  }
};
export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const  data  = await response.json();
    return data.data.player;

  } catch (error) {
    console.error("Error fetching player:", error);
  }
};
export const removePlayer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = response.json();
    return data.player;

  } catch (error) {
    console.error("Error removing player:", error);
  }
};
