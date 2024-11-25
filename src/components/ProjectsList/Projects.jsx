import "../ProjectsList/Projects.css";

function Projects({ projectsList }) {
    const htmlProjects = projectsList.map((item, index) => (
        <article key={index} className="smartphone">
            <div className="screen">
                <h4 className="projectName">{item.name}</h4>
                <div className="image-container">{item.image}</div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            </div>
        </article>
    )); // Hacer los "móviles/fondo con CSS"

    return (
        <div className="projects-container">
        {/* LISTADO DE PROYECTOS PINTADOS EN SMARTPHONES */}
         {htmlProjects} 
        </div>
    );
}

export default Projects;
