import { useRef, useEffect } from "react";
import nootbook from "../../assets/nootebook.png";
import "./styles.css";

const InitialUser = () => {
  return (
    <div className="initial-c" id="inicio">
      <div className="grid-info-user">
        <div>
          <span>Olá, eu sou</span>
          <h1>Gabriel Souza</h1>
          <h4>FullStack Developer</h4>
        </div>
        <p>
          Sou Desenvolvedor fullstack, buscando sempre melhorar e aprender
          Frontend e Backend, focado em entregar aplicações escaláveis e com
          alta qualidade de código. Atualmente estou trabalhando com tecnologias
          centradas em Javascript.
        </p>
        <button>Contato</button>
      </div>

      <div className="grid-ebook">
        <img src={nootbook} alt={nootbook} />
      </div>
    </div>
  );
};

export default InitialUser;
