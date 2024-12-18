import "../Home/Home.css";

const Home = ({ projectsList }) => {
  return (
    <div className="projects-container">
      <h1>Bienvenido a mi Portfolio</h1>
      <ul>
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
