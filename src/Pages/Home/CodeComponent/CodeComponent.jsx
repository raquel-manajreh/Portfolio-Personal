import "./CodeComponent.css";
import image from "../../../images/code-Image.jpg";
import tittleImage from "../../../images/tituloBootcamp.jpg";

function CodeComponent() {
  return (
    <section className="section3">
        <article className="smartphone tablet2">
          <div className="screen">
            <img className="tittleImage" src={tittleImage} alt="imagen-de-codigo" />
          </div>
        </article>

        <div className="divSmartphones">
            <article className="smartphone smartphoneCode">
              <div className="screen">
                <img className="codeImage" src={image} alt="imagen-de-titulo" />
              </div>
            </article>
            <article className="smartphone smartphoneCode">
              <div className="screen">
                <img className="codeImage" src={image} alt="imagen-de-titulo" />
              </div>
            </article>
        </div>
    </section>
  )
}

export default CodeComponent;

