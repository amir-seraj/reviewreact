import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>/<Link to="/search">Search</Link>/
      <Link to="/tweet">Tweet</Link>/<Link to="/CRM">CRM</Link>
    </nav>
  );
};

export default Navbar;
