import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClickDropdown = () => setDropdown((state) => !state);
  const handleClickCloseMenu = () => setDropdown(false);

  return (
    <div className="header">
      <nav className="nav-c">
        <div className="logo">
          <h3>G{""}S</h3>
          <p>Gabriel Souza</p>
        </div>
        <ul>
          <li>
            <a href="#inicio">Ínicio</a>
          </li>
          <li>
            <a href="#quem-sou">Quem sou</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#conhecimentos">Conhecimentos</a>
          </li>
        </ul>

        <div className="dropdown">
          <button onClick={handleClickDropdown}>
            <i className={dropdown ? "fa fa-times" : "fa fa-bars"} />
          </button>
        </div>
        {dropdown && (
          <div className="menu-items">
            <ul>
              <li onClick={handleClickCloseMenu}>
                <a href="#inicio">Ínicio</a>
              </li>
              <li onClick={handleClickCloseMenu}>
                <a href="#quem-sou">Quem sou</a>
              </li>
              <li onClick={handleClickCloseMenu}>
                <a href="#projetos">Projetos</a>
              </li>
              <li onClick={handleClickCloseMenu}>
                <a href="#servicos">Serviços</a>
              </li>
              <li onClick={handleClickCloseMenu}>
                <a href="#conhecimentos">Conhecimentos</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
