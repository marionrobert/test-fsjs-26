import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header >
      <h1>Movie App React</h1>
      <nav>
        {/* link pour les <a> internes */}
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  )
}

export default Header;
