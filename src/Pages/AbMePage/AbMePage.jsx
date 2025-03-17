import "./AbMePage.css";
import { FaHtml5 , FaCss3 , FaJs , FaReact , FaAngular , FaNodeJs , FaDatabase , FaGithubAlt } from 'react-icons/fa';


function AbMePage() {
  return (
    
  <div className="divAbMe">
   
    <section className="about-me cardContact">
    <h2 className="about-title">SOBRE MÍ</h2>
    
    <div className="about-content">
      <p>
        ¡Hola! Soy una <strong>desarrolladora web</strong> apasionada por crear experiencias digitales atractivas y funcionales.
        Me encanta trabajar con tecnologías como <strong>React</strong>, <strong>JavaScript</strong> y <strong>CSS</strong>, enfocándome en la estética y la usabilidad.
      </p>
      <p>
        Me gusta aprender constantemente y resolver retos creativos. Busco siempre escribir <strong>código limpio</strong> y aportar soluciones que marquen la diferencia.
      </p>
      <p>
        Fuera del teclado disfruto compartiendo conocimientos, explorando nuevas herramientas y colaborando en proyectos que inspiren.
      </p>
      <h3 className="skills-title">Tecnologías que uso:</h3>
      <ul className="skills-list">
        <li><FaReact color="#1C7C8C" size="20px"/> React</li>
        <li><FaJs color="#D1B400" size="20px" /> JavaScript</li>
        <li><FaHtml5 color="#E34F26" size="20px" /> <FaCss3 color="#1572B6" size="20px"/> HTML & CSS</li>
        <li><FaAngular color="#DD0031" size="20px" /> Angular</li>
        <li><FaDatabase color="#4E4E4E" size="20px" /> MongoDB</li>
        <li><FaNodeJs color="#5A8F43" size="20px" /> NodeJs</li>
        <li><FaGithubAlt color="#6e5494" size="20px" /> GitHub</li>
      </ul>
    </div>
    </section>

    <section>
      <img className="myPhoto" src="src\images\foto1-CV.png" alt="imagen-mia" />
    </section>

  </div>

  )
}

export default AbMePage;
