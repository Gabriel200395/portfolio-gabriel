import React from "react";
import "./styles.css";
import user from "../../assets/icon.png";

const About = () => {
  return (
    <div className="about-c" id="quem-sou">
      <div className="container" data-anime="left">
        <div className="img-user">
          <img src={user} alt={user} />
        </div>
        <div className="about-user">
          <h2>
            Vou contar um pouco sobre meu trabalho<span>...</span>
          </h2>
          <p>
            Sou Formado em Gestão da Tecnologia da Informação, Atuo no mercado
            como front-end Developer, oferecendo soluções completas para
            sistemas web, mobile, desktop, e sistemas integrados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
