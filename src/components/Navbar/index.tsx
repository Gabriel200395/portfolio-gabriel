import "./styles.css";

const Navbar = () => {
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
      </nav>
    </div>
  );
};

export default Navbar;
