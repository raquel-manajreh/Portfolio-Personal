import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import "./NavBar.css";

function NavBar({setCurrentPage , projectsRef}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToProjects = () => {
    setCurrentPage("home"); //Nos aseguramos que de por sí estamos en la HOME
    setMenuOpen(false); //Para cerrar el menu

    setTimeout(() => {
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView();
      }
    }, 100); //Le damos un poco de tiempo para renderizar Home antes de hacer el scroll
  };

  const handleClickToHome = () => {
    setCurrentPage("home");
    setMenuOpen(false); //Para cerrar el menu también
    window.scrollTo(0, 0);
  };

  const handleClickToAboutMe = () => {
    setCurrentPage("aboutMe");
    setMenuOpen(false);
  };

  const handleClickToContact = () => {
    setCurrentPage("contact");
    setMenuOpen(false); // Cierra el menú
  };

  const openMenu = () => {
    setMenuOpen(prevState => !prevState); //Que cambie el estado al hacer click en la hamburguesa
  };

  return (
   <header>
   <nav className="navBar">
        <div className="hamburguer" onClick={openMenu}><FaBars /></div>
        <ul className={`ulList ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={handleClickToHome} className="home">HOME</button></li>
          <li><button onClick={handleClickToAboutMe} className="aboutMe">SOBRE MI</button></li>
          <li><button onClick={handleClickToContact} className="contact">CONTACTO</button></li>
          <li><button onClick={handleScrollToProjects} className="projects">PROYECTOS</button></li>
        </ul>
      </nav>
   </header> 
  )
}

export default NavBar;