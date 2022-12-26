import "./styles.css";
import user from "../../assets/img/icon.jpeg";

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
            Formado em Gestão da Tecnologia da Informação desde de
            Dezembro/2019, atuo no mercado como programador Front-end,
            oferecendo soluções completas para sistemas web, mobile, desktop, e
            sistemas integrados. Atualmente faço parte do time de
            Desenvolvimento da Imprensa Nacional de Brasília.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
