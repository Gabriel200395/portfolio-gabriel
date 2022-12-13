import { useRef } from "react";
import nootbook from "../../assets/nootebook.png";
import "./styles.css";

const InitialUser = () => {
  const element = useRef<HTMLParagraphElement>(null);

  /*   useEffect(() => {
    function typeWrite(e: HTMLElement) {
      const textoArray = e.innerHTML.split("");
      e.innerHTML = "";
      textoArray.forEach(function (letter: string, i: number) {
        setTimeout(function () {
          e.innerHTML += letter;
        }, 80 * i);
      });
    }

    const phrase = element.current as HTMLElement;

    typeWrite(phrase);
  }, []); */

  return (
    <div className="initial-c" id="inicio">
      <div className="grid-ebook-1">
        <div>
          <span>Olá, eu sou</span>
          <h1>Gabriel Souza</h1>
          <h4>FullStack Developer</h4>
        </div>
        <p ref={element}>
          Sou Desenvolvedor fullstack, buscando sempre melhorar e aprender
          Frontend e Backend, focado em entregar aplicações escaláveis e com
          alta qualidade de código. Atualmente estou trabalhando com tecnologias
          centradas em Javascript, com foco em ReactJS e NodeJS.
        </p>
        <button>Contato</button>
      </div>

      <div className="grid-ebook-2">
        <img src={nootbook} alt={nootbook}/>
      </div>
    </div>
  );
};

export default InitialUser;
