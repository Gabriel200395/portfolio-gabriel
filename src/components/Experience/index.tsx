import { useState } from "react";
import "./styles.css";

import { experienceObj } from "../../helpers/obj";
import { buttonsActive } from "../../helpers/arrays";

const Experience = () => {
  const [experienceEventTarget, setExperienceEventTarget] =
    useState("BRB");

  const [experienceButtonActive, SetExperienceButtonActive] = useState("btn-1");

  const handleClickExperience = (experience: string, active: string) => {
    setExperienceEventTarget(experience);
    SetExperienceButtonActive(active);
  };

  return (
    <div className="experience-c">
      <div className="experience-container-grid-main" data-anime="left">
        <div>
          <h2>
            Experiência <span>.</span>
          </h2>
        </div>
        <div className="experience-container-grid-main-data">
          <div className="experience-container">
            <div className="experience-companies">
              {buttonsActive.map((button, index) => {
                return (
                  <button
                    key={index}
                    className={
                      experienceButtonActive === button.active
                        ? "button-active"
                        : "button-default"
                    }
                    onClick={() =>
                      handleClickExperience(button.flag, button.active)
                    }
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="experience-data">
            <div className="experience-data-header">
              <div className="experience-data-container-header">
                <h3>{experienceObj[experienceEventTarget].profession}</h3>
                <h4>{experienceObj[experienceEventTarget].data}</h4>
              </div>
              <h5>{experienceObj[experienceEventTarget].titulo}</h5>
            </div>
            <p>{experienceObj[experienceEventTarget].text}</p>
          </div>
        </div>

        <div className="experience-container-grid-main-data-mobile">
          <button>
            BRB - Banco de Brasilia <i className="fas fa-solid fa-plus" />
          </button>
          <button>
            GNsystems <i className="fas fa-solid fa-plus" />
          </button>
          <button>
            Intellectx <i className="fas fa-solid fa-plus" />
          </button>
          <button>
            Athan <i className="fas fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
