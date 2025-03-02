// Esto está importado en la Home, y la Home en el App, para que se vea en la web.
import "./Info.css";


function Info() {
  return (
    <div className="myInfo">
    <img  alt="Mi imagen" /> 
    <div className="card">
    <h2 className="name">
        Raquel Manajreh Alaboud
    </h2>
      <p>
        📧 raquel.fsdev@gmail.com
      </p>
      <p>📱+34 608076099</p>
      <p>💾<a className="rrss" href="https://github.com/raquel-manajreh" target="_blank">
        GitHub
        </a></p>
        <p>🖥️<a className="rrss" href="https://www.linkedin.com/in/raquel-manajreh-alaboud-396811321/" target="_blank">
        Linkedin
        </a></p>
    </div>
  </div>
  )
}

export default Info;
