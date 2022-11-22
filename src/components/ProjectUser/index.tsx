import { useState } from "react";
import "./styles.css";
import { projectsCard } from "../../helpers/obj";

const ProjectUser = () => {
  const [eventClickProject, setEventClickProject] = useState(1);

  const handleClickProjectPrev = () => {
    setEventClickProject((c) => c - 1);
  };

  const handleClickProjectNext = () => {
    setEventClickProject((c) => c + 1);
  };

  return (
    <div className="project-c" id="projetos">
      <h2>Projetos</h2>
      <>
        <div className="project-grid-container">
          {projectsCard["page" + eventClickProject].arrProjects.map(() => {
            return (
              <div className="card">
                <h3>Pokedex</h3>
                <p>
                  Site institucional de banco digital moderno, feito em HTML,
                  Sass e JavaScript.
                </p>
                <button>Vizualizar Projeto</button>
              </div>
            );
          })}
        </div>

        <button
          className="button-view-more"
          onClick={
            eventClickProject >= 2
              ? handleClickProjectPrev
              : handleClickProjectNext
          }
          disabled={
            projectsCard["page" + eventClickProject].arrProjects.length
              ? false
              : true
          }
        >
          {projectsCard["page" + eventClickProject] === projectsCard["page1"]
            ? "Ver Mais"
            : "Voltar"}
        </button>
      </>
    </div>
  );
};

export default ProjectUser;
