import { Link } from "react-router-dom";

export default function NavBar  () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-player">Add New Player</Link>
    </nav>
  );
};
