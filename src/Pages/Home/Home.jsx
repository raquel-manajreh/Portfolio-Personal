import "../Home/Home.css";

const Home = ({ projectsList }) => {
  return (
    <div className="homePage">
      <div className="welcome-project">
       <p className="myName">Raquel M.</p>
        <h1 className="h1">¡Bienvenido a mi mundo web!</h1>
        <h2>"Proyectos que hablan por mi"</h2>
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
