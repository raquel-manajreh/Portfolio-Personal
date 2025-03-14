import "./Contact.css";


function Contact() {
  return (
    <form action="">
    <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name"/>
    </div>

    <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"/>
    </div>
        
    <div>
    <label htmlFor="message">Mensaje</label>
    <input type="text" name="message" id="message"/>
    </div>

        <button>Enviar</button>


    </form>
  )
}

export default Contact;
