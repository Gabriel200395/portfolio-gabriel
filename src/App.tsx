import { count } from "console";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import user from "./assets/icon.png";
import "./index.css";


//desensolver site {
 //responsivo 
 //efeitos 
//}

//componentiza []
//refatorar codigo
//teste unitarios

type props = {
  valueEnd: number;
  children: (value: number) => JSX.Element;
};

const ProgressProvider = ({ valueEnd, children }: props) => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((c) => c + 10);
    }, 1000);
  }, []);

  useEffect(() => {
    if (value > valueEnd) {
      return setValue(valueEnd);
    }
  }, [value]);

  return children(value);
};

function App() {
  return (
    <>
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
      <div className="initial-c">
        <div>
          <span>Olá, eu sou</span>
          <h1>Gabriel Souza</h1>
          <h4>FullStack Developer</h4>
        </div>
        <p>
          Sou desenvolvedor fullstack, buscando sempre melhorar e aprender
          Frontend e Backend, focado em entregar aplicações escaláveis e com
          alta qualidade de código. Atualmente estou trabalhando com tecnologias
          centradas em Javascript, com foco em ReactJS e NodeJS e React Native.
        </p>
        <button>Contato</button>
      </div>
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
      <div className="experience-c">
        <div className="experience-container-grid-main">
          <div>
            <h2>
              Experiência <span>.</span>
            </h2>
          </div>
          <div className="experience-container-grid-main-data">
            <div className="experience-container">
              <div className="experience-companies">
                <button className="button-active">GnSystems</button>
                <button className="button-default">Intellectx</button>
                <button className="button-default">Athan</button>
              </div>
            </div>
            <div className="experience-data">
              <div className="experience-data-header">
                <div className="experience-data-container-header">
                  <h3>Professor conteudista em Frontend</h3>
                  <h4>Nov 2021 - Atual Quase 1 ano</h4>
                </div>
                <h5>GnSystems</h5>
              </div>
              <p>
                Atualmente trabalho como professor conteudista em frontend na
                Digital House, o trabalho consiste em criar conteúdos para as
                aulas de especialização frontend. Alguns temas dos conteúdos
                realizados foram: React, Redux, TypeScript, Testes, GraphQL,
                Next.js, MUI, React Hook Form e styled-components
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-c">
        <h2>
          Projetos <span>.</span>
        </h2>
        <div className="project-grid-container">
          <div className="card">
            <h3>Pokedex</h3>
            <p>
              Site institucional de banco digital moderno, feito em HTML, Sass e
              JavaScript.
            </p>
            <button>Vizualizar Projeto</button>
          </div>
          <div className="card">
            <h3>Pokedex</h3>
            <p>
              Site institucional de banco digital moderno, feito em HTML, Sass e
              JavaScript.
            </p>
            <button>Vizualizar Projeto</button>
          </div>
          <div className="card">
            <h3>Pokedex</h3>
            <p>
              Site institucional de banco digital moderno, feito em HTML, Sass e
              JavaScript.
            </p>
            <button>Vizualizar Projeto</button>
          </div>
        </div>
      </div>
      <div className="services-c">
        <h2>
          Serviços <span>.</span>
        </h2>
        <div className="service-grid-container">
          <div className="card">
            <div className="container-icon">
              <i className="fas fa-desktop" aria-hidden="true" />
            </div>

            <h3>Frontend</h3>
            <p>
              Site institucional de banco digital moderno, feito em HTML, Sass e
              JavaScript.
            </p>
          </div>
          <div className="card">
            <div className="container-icon">
              <i className="fas fa-server" />
            </div>

            <h3>Backend</h3>
            <p>
              1 Site institucional de banco digital moderno, feito em HTML, Sass
              e JavaScript.
            </p>
          </div>
          <div className="card">
            <div className="container-icon">
              <i className="fas fa-mobile-alt" />
            </div>

            <h3>Mobile</h3>
            <p>
              Site institucional de banco digital moderno, feito em HTML, Sass e
              JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div className="knowledge-c">
        <h2>Conhecimentos</h2>
        <div className="grid-skills">
          <div className="card-skill">
            <h3>HTML</h3>
            <div className="progress">
              <ProgressProvider valueEnd={100}>
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                      textColor: "#d1d1d1",
                      pathColor: "#047c3f",
                      trailColor: "#fff",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>
          </div>
          <div className="card-skill">
            <h3>Css</h3>
            <div className="progress">
              <ProgressProvider valueEnd={80}>
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                      textColor: "#d1d1d1",
                      pathColor: "#047c3f",
                      trailColor: "#fff",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>
          </div>
          <div className="card-skill">
            <h3>Bootstrap</h3>
            <div className="progress">
              <CircularProgressbar
                value={70}
                text={`70%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>JS</h3>
            <div className="progress">
              <CircularProgressbar
                value={80}
                text={`80%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>React JS</h3>
            <div className="progress">
              <CircularProgressbar
                value={80}
                text={`80%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>React Native</h3>
            <div className="progress">
              <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>Typescript</h3>
            <div className="progress">
              <CircularProgressbar
                value={80}
                text={`80%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>Redux</h3>
            <div className="progress">
              <CircularProgressbar
                value={80}
                text={`80%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>Node JS</h3>
            <div className="progress">
              <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>Express</h3>
            <div className="progress">
              <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>Mysql</h3>
            <div className="progress">
              <CircularProgressbar
                value={40}
                text={`40%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
          <div className="card-skill">
            <h3>GitHub</h3>
            <div className="progress">
              <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                  textColor: "#d1d1d1",
                  pathColor: "#047c3f",
                  trailColor: "#fff",
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-c">
        <h3>Gabriel GS</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-souza-408451196/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto:eugabrielf@gmail.com">
              <i className="fas fa-envelope" />
            </a>
          </li>
          <li>
            <a href="tel:+5561994629767">
            <i className="fa fa-mobile" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;

//font-family: 'Montserrat', sans-serif;
