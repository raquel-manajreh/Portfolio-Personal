import "./NavBar.css";

function NavBar({setCurrentPage}) {
  return (
   <header>
     <nav className="navBar">
          <ul className="ulList">
              <li><button onClick={()=> setCurrentPage("home")} className="home">HOME</button></li>
              <li><button 
              onClick={()=> setCurrentPage("aboutMe")} 
              className="aboutMe">ABOUT ME</button></li>
              <li><button onClick={()=> setCurrentPage("contact")} className="contact">CONTACT</button></li>
              <li><button className="projects">PROJECTS</button></li>
          </ul>
     </nav>
   </header> 
  )
}

export default NavBar;
