import React, { useState } from "react";

export default function AddNewPlayer  ({ onAddPlayer })  {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "field", // default value
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlayer(formData);
    setFormData({ name: "", breed: "", status: "field", imageUrl: "" });
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
