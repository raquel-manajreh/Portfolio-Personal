import { useState } from "react";
import "../scss/App.css";
import NavBar from "./NavBar/NavBar";
import "./NavBar/NavBar.css";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

function App() {
  const projectsList = [
    {
      name: "First PokeApi",
      link: "https://github.com/raquel-manajreh/PRIMERA-POKEAPI",
      image: "#",
    },
    {
      name: "Prueba Slack CSS",
      link: "https://github.com/raquel-manajreh/SLACK-EJERCICIO1-bootcamp",
      image: "#",
    },
    {
      name: "React Menú Bootcamp",
      link: "https://github.com/IvanBorras/Proyecto_React",
      image: "#",
    },
    {
      name: "Festivales - Angular",
      link: "https://github.com/Irenemoralees/Festival_Proyecto_Final",
      image: "#",
    }
  ];

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <h1>Mi Portfolio</h1>
      <NavBar setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === "aboutMe" ? <AboutMe /> : 
         currentPage === "contact" ? <Contact /> :  
         <Home projectsList={projectsList} />}
      </main>
    </div>
  );
}

export default App;
