import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AbMePage from "../Pages/AbMePage/AbMePage";
import "../scss/App.css";


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
      <NavBar setCurrentPage={setCurrentPage} />
      <main>
        { currentPage === "contact" ? <Contact /> : currentPage === "aboutMe" ? <AbMePage /> : <Home projectsList={projectsList} />}
      </main>
    </div>
  );
}

export default App;
