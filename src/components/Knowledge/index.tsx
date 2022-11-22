import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./styles.css";

const Knowledge = () => {
  return (
    <div className="knowledge-c" id="conhecimentos">
      <h2>Conhecimentos</h2>
      <div className="grid-skills">
        <div className="card-skill">
          <h3>HTML</h3>
          <div className="progress">
            <CircularProgressbar
              value={100}
              text={`${100}%`}
              styles={buildStyles({
                textColor: "#d1d1d1",
                pathColor: "#047c3f",
                trailColor: "#fff",
              })}
            />
          </div>
        </div>
        <div className="card-skill">
          <h3>Css</h3>
          <div className="progress">
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={buildStyles({
                textColor: "#d1d1d1",
                pathColor: "#047c3f",
                trailColor: "#fff",
              })}
            />
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
  );
};

export default Knowledge;
