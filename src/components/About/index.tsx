import React from "react"; 
import "./styles.css"
import user from "../../assets/icon.png";


// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div className="about-c">
      <div className="img-user">
        <img src={user} alt={user} />
      </div>
      <div className="about-user">
        <h2>
          Quem sou <span>.</span>
        </h2>
        <p>
          Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora). Sou
          freelancer como Front-end developer e UI Designer. Desenvolvo
          interfaces modernas e de alta qualidade, concentrado em performance,
          animações, responsividade e SEO.
        </p>
      </div>
    </div>
  );
};

export default About;
