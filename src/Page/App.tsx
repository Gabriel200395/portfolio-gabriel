import Navbar from "../components/Navbar";
import InitialUser from "../components/InitialUser";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectUser from "../components/ProjectUser";
import ServicesUser from "../components/ServicesUser";
import Knowledge from "../components/Knowledge";
import Footer from "../components/Footer";
import { useEffect } from "react";

//desensolver site {
//responsivo
//Ancora [OK]
//}

//componentiza [OK]
//refatorar codigo
//teste unitarios

function App() {
  const body = document.querySelector("#root") as HTMLElement;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = window.document.querySelector(".header") as HTMLElement;
      if (body.getBoundingClientRect().top < 0) {
        header.classList.add("scroll-active-header");
      } else {
        header.classList.remove("scroll-active-header");
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <InitialUser />
      <About />
      <Experience />
      <ProjectUser />
      <ServicesUser />
      <Knowledge />
      <Footer />
    </>
  );
}

export default App;

//font-family: 'Montserrat', sans-serif;
