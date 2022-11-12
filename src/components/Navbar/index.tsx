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
          <li>Ínicio</li>
          <li>Quem Sou</li>
          <li>Projetos</li>
          <li>Serviços</li>
          <li>Conhecimentos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
