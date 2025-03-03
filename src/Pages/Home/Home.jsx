import "../Home/Home.css";
import Info from "./Info/Info";
import {cv} from "../../CV/cv";
// console.log(cv)

const Home = ({ projectsList }) => {

  const {person, education, experience, languajes, stack, softSkills} = cv;

  return (
    <div className="homePage">
      <div className="welcome-project">
       
        <h1 className="h1">¡Bienvenido a mi mundo web!</h1>
        <h2>"Proyectos que hablan por mi"</h2>
        <section>

        {/* COMPONENTES DENTRO DE LA HOME */}
          <Info /> 


          
          {/* AQUÍ VA LA SECCIÓN DE MI CV LIGADO AL ARCHIVO JSON */}
        </section>

      </div>
      <ul className="projects-container">
        {projectsList.map((project, index) => (
          <li key={index} className="smartphone">
            <div className="screen">
              <h3 className="projectName">{project.name}</h3>
              <img src={project.image} alt={project.name} className="project-image" />
              <a className="image-container" href={project.link} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
