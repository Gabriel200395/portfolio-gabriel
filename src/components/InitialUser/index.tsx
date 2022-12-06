import Animate from "@charlesvien/react-animatecss";
import { useEffect, useRef } from "react";

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
      <div>
        <span>Olá, eu sou</span>
        <h1>Gabriel Souza</h1>
        <h4>FullStack Developer</h4>
      </div>
      <p ref={element}>
        Sou Desenvolvedor fullstack, buscando sempre melhorar e aprender
        Frontend e Backend, focado em entregar aplicações escaláveis e com alta
        qualidade de código. Atualmente estou trabalhando com tecnologias
        centradas em Javascript, com foco em ReactJS e NodeJS.
      </p>
      <button>Contato</button>
    </div>
  );
};

export default InitialUser;
