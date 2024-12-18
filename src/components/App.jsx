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
      image: "https://via.placeholder.com/120x210",
    },
    {
      name: "Prueba Slack CSS",
      link: "https://github.com/raquel-manajreh/SLACK-EJERCICIO1-bootcamp",
      image: "https://via.placeholder.com/120x210", // URL temporal de imagen
    },
    {
      name: "React Menú Bootcamp",
      link: "https://github.com/IvanBorras/Proyecto_React",
      image: "https://via.placeholder.com/120x210",
    },
    {
      name: "Festivales - Angular",
      link: "https://github.com/Irenemoralees/Festival_Proyecto_Final",
      image: "https://via.placeholder.com/120x210", // URL temporal de imagen
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

// TENGO QUE ARREGLAR EL COMPONENTE PARA QUE CUANDO CLIKO CN HOME ME VAYA A HOME Y CUANDO ABOUT ME ME VAYA ALLÍ.
// CREO QUE ES MEJOR CREAR UNA PAGINA DE HOME Y PARTIR DE AHÍ.