import { ChangeEvent, useEffect, useState } from "react";
import "./styles.css";

import { experienceObj } from "../../helpers/obj";
import { buttonsActive } from "../../helpers/arrays";
import { Console } from "console";

const Experience = () => {
  const [experienceEventTarget, setExperienceEventTarget] = useState("BRB");

  const [experienceButtonActive, SetExperienceButtonActive] = useState("btn-1");

  const [collapseEventTarget, setCollapseEventTarget] = useState("");
  const [toogle, setToogle] = useState(false);

  const handleClickExperience = (experience: string, active: string) => {
    setExperienceEventTarget(experience);
    SetExperienceButtonActive(active);
  };

  const handleClickCollapseExperience = (experience: string) => {
    setCollapseEventTarget(experience);
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
      </div>
    </div>
  );
};

export default Experience;
