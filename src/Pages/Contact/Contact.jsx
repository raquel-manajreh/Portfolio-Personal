import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";


function Contact() {

  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Aquí lo que estamos haciendo es que cuando haya un cambio en los valores del formulario, nos quedemos con esos cambios (el valor de los inputs), un ... del formData con el valor de los imputs que haya puesto el usuario
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

// Aqui lo que estamos haciendo es el evento para cuando se envie el mensaje, que llegue al correspondiente correo y se emitan los determinados mensajitos de error o enviado con exito
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_3jjt90e',         // Service ID de EmailJS
        'template_k4po3eh',      // Template ID de EmailJS
        formData,                // Datos del formulario (nombre, email, mensaje)
        'joS61hdKGGmdXr7Z2'          // Public Key
      )

      .then(
        (response) => {
          console.log('Mensaje enviado:', response);
          setMessage({type: 'success', text: '¡Mensaje enviado correctamente!'});
          alert('¡Mensaje enviado!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },

        (error) => {
          console.log('Error al enviar el mensaje:', error);
          setMessage({ type: 'error', text: 'Hubo un error al enviar el mensaje. Intenta de nuevo.' });
        }
      );
  };

  return (
    <>
    <div className="bodyContact">
      <h2>CONTACTO</h2>

      <section  className="cardContact">

        <form className="formContact" onSubmit={handleSubmit} action="">

        <div className="divLabel">
            <label htmlFor="name">NOMBRE</label>
            <input className="input" type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
        </div>

        <div className="divLabel">
            <label htmlFor="email">E-MAIL</label>
            <input className="input" type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>
        </div>
      
        <div className="divLabel">
        <label htmlFor="message">MENSAJE</label>
        <textarea className="messageInput input" id="message" name="message" rows="6.5" cols="20" placeholder="Escribe tu mensaje..." value={formData.message} onChange={handleChange}></textarea>
        
        </div>
            <button className="sendButton" type="submit">Enviar</button>
        </form>
      </section>
    </div>
   </>
  )
}

export default Contact;

// service_3jjt90e - Servicio ID
// template_k4po3eh - Template ID
// joS61hdKGGmdXr7Z2 - Public Key



