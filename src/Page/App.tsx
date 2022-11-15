import Navbar from "../components/Navbar";
import InitialUser from "../components/InitialUser";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectUser from "../components/ProjectUser";
import ServicesUser from "../components/ServicesUser";
import Knowledge from "../components/Knowledge";
import Footer from "../components/Footer";

//desensolver site {
//responsivo
//efeitos
//Ancora
//}

//componentiza [OK]
//refatorar codigo
//teste unitarios

function App() {
  return (
    <>
      <Navbar />
      <InitialUser />
      <About />
      <Experience  />
      <ProjectUser />
      <ServicesUser />
      <Knowledge  />
      <Footer />
    </>
  );
}

export default App;

//font-family: 'Montserrat', sans-serif;
