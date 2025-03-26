import { useState, useEffect } from "react";
import "./CodeComponent.css";
import image from "../../../images/code-Image.jpg";
import tittleImage from "../../../images/tituloBootcamp.jpg";
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaNodeJs, FaDatabase, FaGithubAlt } from "react-icons/fa";

function CodeComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta si el usuario está en una versión móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpand = () => {
    if (isMobile) {
      setIsExpanded(prevState => !prevState); // Invierte el estado correctamente
    }
  };

  return (
    <section className="section3">
      <article className={`smartphone tablet2 ${isExpanded ? "expanded" : ""}`} onClick={toggleExpand}>
        <div className="screen">
          <img className="tittleImage" src={tittleImage} alt="imagen-de-codigo" />
        </div>
      </article>

      <div className="divSmartphones">
        <article className="smartphone smartphoneCode">
          <div className="screen">
            <img className="codeImage" src={image} alt="imagen-de-titulo" />
          </div>
        </article>
        <article className="smartphone smartphoneCode">
          <div className="screen">
            <span className="iconsSpan">
              <h4>Herramientas</h4>
              <p className="screenIcons"><FaHtml5 color="#E34F26" /></p>
              <p className="screenIcons"><FaCss3 color="#1572B6" /></p>
              <p className="screenIcons"><FaJs color="#D1B400" /></p>
              <p className="screenIcons"><FaReact color="#1C7C8C" /></p>
              <p className="screenIcons"><FaAngular color="#DD0031" /></p>
              <p className="screenIcons"><FaNodeJs color="#5A8F43" /></p>
              <p className="screenIcons"><FaDatabase color="#4E4E4E" /></p>
              <p className="screenIcons"><FaGithubAlt color="#6e5494" /></p>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CodeComponent;
