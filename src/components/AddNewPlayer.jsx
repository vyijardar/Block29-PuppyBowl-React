import React, { useState } from "react";
import { addNewPlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function AddNewPlayer() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        status: "field",
        imageUrl: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addNewPlayer(formData);
            alert("Player added successfully!");
            navigate("/");
           
        } catch (error) {
            setError("Failed to add player.");
            console.error(error);
        }

    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Player</h3>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Breed"
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="field">Field</option>
                <option value="bench">Bench</option>
            </select>
            <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <button type="submit">Submit</button>
        </form>
    );
};