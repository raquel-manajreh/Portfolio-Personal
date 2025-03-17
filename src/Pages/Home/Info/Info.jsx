import "./Info.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Info() {
  return (
    <div className="myInfo">
    <div className="card">
    <h2 className="name">
        Raquel Manajreh Alaboud
    </h2>
      <p>
        📧 raquel.fsdev@gmail.com
      </p>
      <p>📱+34 608076099</p>
      <p><FaGithub className="icons" style={{ color: '#1A1A1A', fontSize: '20px' }} /><a className="rrss" href="https://github.com/raquel-manajreh" target="_blank">GitHub</a></p>
        <p><FaLinkedin className="icons" style={{ color: '#1A1A1A', fontSize: '20px' }} /><a className="rrss" href="https://www.linkedin.com/in/raquel-manajreh-alaboud-396811321/" target="_blank">
        Linkedin
        </a></p>
    </div>
  </div>
  )
}

export default Info;