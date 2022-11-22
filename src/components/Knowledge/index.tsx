import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { skills } from "../../helpers/arrays";
import "./styles.css";

const Knowledge = () => {

  return (
    <div className="knowledge-c" id="conhecimentos">
      <h2>Conhecimentos</h2>
      <div className="grid-skills">
        {skills.map((skill, index) => {
          return (
            <div className="card-skill" key={index}>
              <h3>{skill.name}</h3>
              <div className="progress">
                <CircularProgressbar
                  value={skill.value}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    textColor: "#d1d1d1",
                    pathColor: "#047c3f",
                    trailColor: "#fff",
                  })}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Knowledge;
