import "./styles.css";

const ServicesUser = () => {
  return (
    <div className="services-c" id="servicos">
      <div  className="container"data-anime="left">
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
              Sites Institucionais e Sistemas Integrados.
            </p> 
          </div>
          <div className="card">
            <div className="container-icon">
              <i className="fas fa-server" />
            </div>

            <h3>Backend</h3>
           <p>
              Sistemas Intregados com Apis Rest e Banco de Dados.
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesUser;
