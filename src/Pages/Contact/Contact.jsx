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
            <input type="text" name="name" id="name"/>
        </div>

        <div className="divLabel">
            <label htmlFor="email">E-MAIL</label>
            <input type="text" name="email" id="email"/>
        </div>
      
        <div className="divLabel">
        <label htmlFor="message">MENSAJE</label>

        <input className="messageInput" type="text" name="message" id="message"/>
        </div>
            <button className="sendButton" >Enviar</button>
        </form>
      </section>
    </div>
   </>
  )
}

export default Contact;
