import { useEffect, useState } from "react";
import "./styles.css";
import { projectsCard } from "../../helpers/obj";

const ProjectUser = () => {
  const [eventClickProject, setEventClickProject] = useState(1);

  const scrollBody = (topScroll: number) =>
    window.scroll({ top: topScroll, left: 0, behavior: "smooth" });

  const handleClickProjectPrev = () => {
    setEventClickProject((c) => c - 1);
    scrollBody(1550);
  };

  const handleClickProjectNext = () => {
    setEventClickProject((c) => c + 1);
    scrollBody(1950);
  };

  return (
    <div className="project-c" id="projetos">
      <h2>Projetos</h2>
      <>
        <div className="project-grid-container">
          {projectsCard["page" + eventClickProject].arrProjects.map(
            (project, index) => {
              return (
                <div className="card" key={index}>
                  <h3>{project.titulo}</h3>
                  <p>
                    Site institucional de banco digital moderno, feito em HTML,
                    Sass e JavaScript.
                  </p>
                  <button>Vizualizar Projeto</button>
                </div>
              );
            }
          )}
        </div>

        <button
          className="button-view-more"
          onClick={
            eventClickProject >= 2
              ? handleClickProjectPrev
              : handleClickProjectNext
          }
          disabled={projectsCard["page" + eventClickProject] ? false : true}
        >
          {eventClickProject === 1 ? "Ver Mais" : "Voltar"}
        </button>
      </>
    </div>
  );
};

export default ProjectUser;
