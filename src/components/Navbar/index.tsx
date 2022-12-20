import { useState } from "react";
import { listItemNav } from "../../helpers/arrays";
import "./styles.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClickOpenMenu = () => setDropdown((state) => !state);
  const handleClickCloseMenu = () => setDropdown(false);

  return (
    <div className="header">
      <nav className="nav-c">
        <div className="logo">
          <h3>G{""}S</h3>
          <p>Gabriel Souza</p>
        </div>
        <ul className="menu-web" data-testid="menu-items-web">
          {listItemNav.map((menuItem, index) => {
            return (
              <li key={index}>
                <a href={menuItem.href}>{menuItem.text}</a>
              </li>
            );
          })}
        </ul>

        <div className="dropdown">
          <button onClick={handleClickOpenMenu} data-testid="button-menu">
            <i className={dropdown ? "fa fa-times" : "fa fa-bars"} />
          </button>
        </div>
          <div className={`menu-items`}>
            <ul  className={`${dropdown ? "open-menu" : "close-menu"}` } data-testid="grid-menu">
              {listItemNav.map((menuItem, index) => {
                return (
                  <li key={index} onClick={handleClickCloseMenu}>
                    <a href={menuItem.href}>{menuItem.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
