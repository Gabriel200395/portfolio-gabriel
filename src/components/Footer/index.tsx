import "./styles.css";
const Footer = () => {
  return (
    <div className="footer-c">
      <h3>Gabriel GS</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gabriel-souza-408451196/"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="mailto:eugabrielf@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </li>
        <li>
          <a href="tel:+5561994629767">
            <i className="fa fa-mobile" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
