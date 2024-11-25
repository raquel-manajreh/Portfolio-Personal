import "../scss/App.css";
import NavBar from "./NavBar/NavBar";
import "./NavBar/NavBar.css";
import Projects from "./ProjectsList/Projects";


function App() {

  const projectsList = [
    {name: 'Prueba Slack CSS', link: 'https://github.com/raquel-manajreh/SLACK-EJERCICIO1-bootcamp', image: '#'},
    {name: 'First PokeApi', link: 'https://github.com/raquel-manajreh/PRIMERA-POKEAPI', image: '#'},
    {name: 'React Menú Bootcamp', link: 'https://github.com/IvanBorras/Proyecto_React', image: '#'},
    {name: 'Festivals Project Bootcamp', link: 'https://github.com/Irenemoralees/Festival_Proyecto_Final', image: '#'},
    {name: 'Biblioteca Infinita', link: 'https://github.com/raquel-manajreh/BIBLIOTECA-INFINITA', image: '#'}
  ] //ME FALTA EL LINK A LAS IMAGES

  return (
    <div>
      {/* <h1>Mi Portfolio</h1> */}
      <NavBar />

      <Projects  projectsList={projectsList}/>
    </div>
  );
}

export default App;
