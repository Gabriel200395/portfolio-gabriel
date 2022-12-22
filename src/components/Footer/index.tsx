import "./styles.css";
import logo from "../../assets/img/logo.png"
const Footer = () => {
  return (
    <div className="footer-c">
      <h3>Desenvolvido de por GabrielSouza @2022.</h3> 
      <img src={logo} alt={logo} height={"22px"}/>
    </div>
  );
};

export default Footer;
