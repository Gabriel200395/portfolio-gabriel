import "./styles.css"

const ServicesUser = () => {
  return (
    <div className="services-c">
      <h2>
        Serviços <span>.</span>
      </h2>
      <div className="service-grid-container">
        <div className="card">
          <div className="container-icon">
            <i className="fas fa-desktop" aria-hidden="true" />
          </div>

          <h3>Frontend</h3>
          <p>
            Site institucional de banco digital moderno, feito em HTML, Sass e
            JavaScript.
          </p>
        </div>
        <div className="card">
          <div className="container-icon">
            <i className="fas fa-server" />
          </div>

          <h3>Backend</h3>
          <p>
            1 Site institucional de banco digital moderno, feito em HTML, Sass e
            JavaScript.
          </p>
        </div>
        <div className="card">
          <div className="container-icon">
            <i className="fas fa-mobile-alt" />
          </div>

          <h3>Mobile</h3>
          <p>
            Site institucional de banco digital moderno, feito em HTML, Sass e
            JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesUser;
