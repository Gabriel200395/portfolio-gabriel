import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; 
import "./styles.css"


type props = {
  valueEnd: number;
  children: (value: number) => JSX.Element;
};

const ProgressProvider = ({ valueEnd, children }: props) => {
  const [value, setValue] = useState(0);

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

const Knowledge = () => {
  return (
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
  );
};

export default Knowledge;
