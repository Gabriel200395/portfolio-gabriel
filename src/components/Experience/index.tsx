import "./styles.css";

const Experience = () => {
  return (
    <div className="experience-c" >
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
  );
};

export default Experience;
