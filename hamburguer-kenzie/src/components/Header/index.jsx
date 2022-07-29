import "./styles.css";
import { BiSearchAlt2 } from "react-icons/bi";
const Header = ({ showProducts }) => {
  return (
    <header>
      <div className="Logo">
        <h1 className="titleBurguer">Burguer</h1>
        <h3 className="titleKenzie">Kenzie</h3>
      </div>

      <div className="inputHeader">
        <input
          onChange={showProducts}
          type="text"
          placeholder="Digitar Pesquisa"
          
        />
         <BiSearchAlt2 />
       
      </div>
    </header>
  );
};
export default Header;
