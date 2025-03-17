import "./Contact.css";


function Contact() {
  return (
    <>
    <div className="bodyContact">
      <h2>CONTACTO</h2>

      <section  className="cardContact">

        <form className="formContact" action="">

        <div className="divLabel">
            <label htmlFor="name">NOMBRE</label>
            <input className="input" type="text" name="name" id="name"/>
        </div>

        <div className="divLabel">
            <label htmlFor="email">E-MAIL</label>
            <input className="input" type="text" name="email" id="email"/>
        </div>
      
        <div className="divLabel">
        <label htmlFor="message">MENSAJE</label>
        <textarea className="messageInput input" id="message" name="message" rows="6.5" cols="20" placeholder="Escribe tu mensaje..."></textarea>
        
        </div>
            <button className="sendButton" >Enviar</button>
        </form>
      </section>
    </div>
   </>
  )
}

export default Contact;
