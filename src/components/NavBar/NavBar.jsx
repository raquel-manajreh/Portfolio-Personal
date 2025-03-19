import "./NavBar.css";

function NavBar({setCurrentPage , projectsRef}) {

  const handleScrollToProjects = () => {
    setCurrentPage("home"); //Nos aseguramos que de por sí estamos en la HOME
    setTimeout(() => {
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView();
      }
    }, 100); //Le damos un poco de tiempo para renderizar Home antes de hacer el scroll
  };

  const handleClickToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  return (
   <header>
     <nav className="navBar">
          <ul className="ulList">
              <li><button onClick={handleClickToHome} className="home">HOME</button></li>
              <li><button 
              onClick={()=> setCurrentPage("aboutMe")} 
              className="aboutMe">ABOUT ME</button></li>
              <li><button onClick={()=> setCurrentPage("contact")} className="contact">CONTACT</button></li>
              <li><button onClick={handleScrollToProjects} className="projects">PROJECTS</button></li>
          </ul>
     </nav>
   </header> 
  )
}

export default NavBar;

// onClick={()=> setCurrentPage("home")} - Este onClick le tenñia antes de poner el scroll para que cambiase la pagina a Home cuando estaba en algun otro componente. 
