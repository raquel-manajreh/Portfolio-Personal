import { useState } from "react";
import "../scss/App.css";
import NavBar from "./NavBar/NavBar";
import "./NavBar/NavBar.css";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Home from "../Pages/Home/Home";


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
      image: "#", // URL temporal de imagen
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
  ]; //ME FALTA EL LINK A LAS IMÁGENES

  const [currentPage, setCurrentPage] = useState('home');

  
    const renderPage = () => {
      if(currentPage === 'home'){
        return <Home  projectsList={projectsList}/>;
      } else if(currentPage === 'aboutMe'){
        return <AboutMe />;
      } else {
        return <Home  projectsList={projectsList}/>;
      }
    };

  return (
    <div>
      {/* <h1>Mi Portfolio</h1> */}
      <NavBar  setCurrentPage={setCurrentPage}/>

      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;