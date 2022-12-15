import "./styles.css";

const ServicesUser = () => {
  return (
    <div className="contact-c" id="contato">
      <div className="container" data-anime="left">
        <h2>Contato</h2>
        <div className="contact-grid-container">
          <div className="card">
            <a
              href="https://www.linkedin.com/in/gabriel-souza-408451196/"
              target="_blank"
            >
              <div className="container-icon">
                <i className="fab fa-linkedin" />
              </div>

              <h3>Linkedin</h3>
              <p>gabriel-souza</p>
            </a>
          </div>
          <div className="card">
            <a href="tel:+5561994629767">
              <div className="container-icon">
                <i className="fa fa-mobile" />
              </div>

              <h3>Tel e WHATSAPP</h3>
              <p>61 99462-9767</p>
            </a>
          </div>
          <div className="card">
            <a href="https://portfolio-gabriel-gs.vercel.app" target="_blank">
              <div className="container-icon">
                <i className="fa fa-globe" aria-hidden="true" />
              </div>

              <h3>WEBSITE</h3>
              <p>https://portfolio-gabriel-gs.vercel.app</p>
            </a>
          </div>
          <div className="card">
            <a href="mailto:eugabrielf@gmail.com">
              <div className="container-icon">
                <i className="fas fa-envelope" />
              </div>

              <h3>EMAIL</h3>
              <p>eugabrielf@gmail</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesUser;
