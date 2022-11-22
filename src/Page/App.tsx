import Navbar from "../components/Navbar";
import InitialUser from "../components/InitialUser";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectUser from "../components/ProjectUser";
import ServicesUser from "../components/ServicesUser";
import Knowledge from "../components/Knowledge";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

//desensolver site {
//responsivo
//Ancora [OK]
//}

//componentiza [OK]
//refatorar codigo
//teste unitarios

interface propsSkills {
  name: string;
  valueEnd: number;
}

function App() {
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);

  const body = document.querySelector("#root") as HTMLElement;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = window.document.querySelector(".header") as HTMLElement;

      header.classList.toggle(
        "scroll-active-header",
        body.getBoundingClientRect().top < 0
      );
    });
  }, [body]);

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
