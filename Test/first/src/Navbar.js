import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>This is my blog</h1></Link>
      <div className="links">
        <Link
          to="/create"
          style={{
            color: "red",
            backgroundColor: "pink",
          }}
        >
          Add Blog
        </Link>
        <Link to="#b" style={{ color: "blue" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
