
function NavBar({setCurrentPage}) {
  return (
   <header>
     <nav className="navBar">
          <ul className="ulList">
              <li><button className="home">Home</button></li>
              <li><button className="aboutMe">About Me</button></li>
              <li><button className="projects">Projects</button></li>
              <li><button className="skills">Skills</button></li>
              <li><button className="contact">Contact</button></li>
          </ul>
     </nav>
   </header> 
  )
}

export default NavBar;
