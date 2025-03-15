
function NavBar({setCurrentPage}) {
  return (
   <header>
     <nav className="navBar">
          <ul className="ulList">
              <li><button onClick={()=> setCurrentPage("home")} className="home">Home</button></li>
              <li><button 
              // onClick={()=> setCurrentPage("aboutMe")} 
              className="aboutMe">About Me</button></li>
              <li><button onClick={()=> setCurrentPage("contact")} className="contact">Contact</button></li>
              <li><button className="projects">Projects</button></li>
          </ul>
     </nav>
   </header> 
  )
}

export default NavBar;
