import { Link } from "react-router-dom";
import '../component/Header.css'
function Header({ currentPage }) {
  return (
    <header >
      
      <nav className="app-link">
        <ul>
          <li>
            {currentPage === "home" ? (
              <strong>
                <Link to="/">Home</Link>
              </strong>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>
          <li>
            {currentPage === "liste" ? (
              <strong>
                <Link to="/liste">Liste des cocktails</Link>
              </strong>
            ) : (
              <Link to="/liste">Liste des cocktails</Link>
            )}
          </li>
          <li>
            {currentPage === "random" ? (
              <strong>
                <Link to="/random">Cocktail aléatoire</Link>
              </strong>
            ) : (
              <Link to="/random">Cocktail aléatoire</Link>
            )}
          </li>
          <li>
            {currentPage === "ingredients" ? (
              <strong>
                <Link to="/ingredients">ingredients</Link>
              </strong>
            ) : (
              <Link to="/ingredients">ingredients</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/**
 * import { Link } from "react-router-dom";
import Footer from "./Footer";


function Header(){
    return(
<>
        <header>
            <img src="" alt="" />
            <h1>Nos belles perles !</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">le top 5</Link></li>
                    <li><Link to="/">choisi ta celebrité</Link></li>
                </ul>
            </nav>
        </header>
        
        </>
    )
}
export default Header;
*/