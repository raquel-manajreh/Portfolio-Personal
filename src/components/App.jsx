import { useRef, useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AbMePage from "../Pages/AbMePage/AbMePage";
import Footer from "./Footer/Footer";
import "../scss/App.css";

function App() {
  const projectsList = [
    {
      name: "First PokeApi",
      link: "https://github.com/raquel-manajreh/PRIMERA-POKEAPI",
      image: "public/Pokeapi.jpg",
    },
    {
      name: "Prueba Slack CSS",
      link: "https://github.com/raquel-manajreh/SLACK-EJERCICIO1-bootcamp",
      image: "public/Slack.jpg",
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
    },
  ];

  const [currentPage, setCurrentPage] = useState("home");
  const projectsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} projectsRef={projectsRef} />
      <main className="main">
        {currentPage === "contact" ? (
          <Contact />
        ) : currentPage === "aboutMe" ? (
          <AbMePage />
        ) : (
          <Home projectsList={projectsList} projectsRef={projectsRef} />
        )}
      </main>
      {/* Usamos currentPage para verificar si estamos en la home */}
      {currentPage === "home" && <Footer />}
    </div>
  );
}

export default App;
