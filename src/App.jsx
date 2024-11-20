import { Routes, Route } from "react-router-dom"
import './App.css'
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import AddNewPlayer from "./components/AddNewPlayer";
import NavBar from "./components/NavBar";


function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App
