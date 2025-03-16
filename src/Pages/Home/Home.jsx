import "../Home/Home.css";
import Info from "./Info/Info";
import {cv} from "../../CV/cv";
import Experience from "./Experience/Experience";
import SkillsStack from "./SkillsStack/SkillsStack";
import { useState } from "react";
import AboutMe from "./AboutMe/AboutMe";
import CodeComponent from "./CodeComponent/CodeComponent";
// console.log(cv)

const Home = ({ projectsList }) => {

  const {person, education, experience, languajes, stack, softSkills} = cv;

  const  [skills, setSkills] = useState(true); //Que por defecto se vea el componente "SkillsStack"

  const handleClick = () => {
    setSkills(true)
  }

  return (
    <div className="homePage">
      <div className="welcome-project">
       
        <h1 className="h1">¡Bienvenido/a a mi mundo web!</h1>
        <h3 className="h3">"Proyectos que hablan por mi"</h3>

        <div className="habilitiesDiv">   {/* Componente con 3 SECCIONES */}

          <section>
            {/* SECCION 1 - Info + AboutMe como tablet */}
            <Info />
            <AboutMe data={person.aboutMe}/>
          </section>
          
          <section>
          {/* SECCION 2 - Soft Skills y experiencia */}
            <div className="containerButtons">
              <button className="tittleButton" onClick={handleClick}>SOFTSKILLS / STACK</button>
              <button className="tittleButton" onClick={()=>{setSkills(false)}}>EXPERIENCIA</button>
            </div>

            {skills ? <SkillsStack data={softSkills} data2={stack} /> : <Experience data={experience}/> }  
          </section>

          <section>
            {/*Tablet2-2: codigo
              Smartphone-1: Titulo/certificacion
              Smartphone-3: Inspiraciones (Midudev, Moureodev, etc)*/}

              <CodeComponent />

          </section>
        </div>


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
