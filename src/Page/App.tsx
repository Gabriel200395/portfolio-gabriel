import { RotatingLines } from "react-loader-spinner";
import Navbar from "../components/Navbar";
import InitialUser from "../components/InitialUser";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectUser from "../components/ProjectUser";
import ServicesUser from "../components/ServicesUser";
import Knowledge from "../components/Knowledge";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const body = document.querySelector("#root") as HTMLElement;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = window.document.querySelector(".header") as HTMLElement;
      let menu = window.document.querySelector(".dropdown") as HTMLElement;

      header.classList.toggle(
        "scroll-active-header",
        body.getBoundingClientRect().top < 0
      );
      menu.classList.toggle(
        "scroll-active-menu-header",
        body.getBoundingClientRect().top < 0
      );
    });
  }, [body]);

  const gridsAnimate = () => document.querySelectorAll("[data-anime]");

  setTimeout(() => {
    gridsAnimate();
  }, 0);

  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    const target = gridsAnimate();

    target.forEach((element: HTMLElement | any) => {
      if (windowTop > element.offsetTop) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  }

  window.addEventListener("scroll", () => {
    animeScroll();
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Navbar />
          <InitialUser />
          <About />
          <Experience />
          <ProjectUser />
          <ServicesUser />
          <Knowledge />
          <Contact />
          <Footer />
        </>
      ) : (
        <div className="loading-container">
          <RotatingLines
            strokeColor="#047c3f"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
          />
        </div>
      )}
    </>
  );
}

export default App;
