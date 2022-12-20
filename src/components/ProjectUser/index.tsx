import { useEffect, useState } from "react";
import "./styles.css";
import { projectsCard } from "../../helpers/obj";

const ProjectUser = () => {
  const [eventClickProject, setEventClickProject] = useState(1);

  const scrollBody = (topScroll: number) =>
    window.scroll({ top: topScroll, left: 0, behavior: "smooth" });

  const handleClickProjectPrev = () => {
    setEventClickProject((c) => c - 1);

    if (window.screen.width <= 1200) {
      return scrollBody(2150);
    }
    scrollBody(1550);
  };

  const handleClickProjectNext = () => {
    setEventClickProject((c) => c + 1);
    if (window.screen.width <= 1200) {
      return scrollBody(3050);
    }
    scrollBody(2050);
  };

  return (
    <div className="project-c" id="projetos">
      <div className="container" data-anime="left">
        <h2>Projetos</h2>
        <>
          <div className="project-grid-container">
            {projectsCard["page" + eventClickProject].arrProjects.map(
              (project, index) => {
                return (
                  <div className="card" key={index}>
                    <h3>{project.titulo}</h3>
                    <p>{project.text}</p>

                    {project.link && (
                      <a href={project.link} target="_blank">
                        {project.buttonText}
                      </a>
                    )}
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
    </div>
  );
};

export default ProjectUser;
