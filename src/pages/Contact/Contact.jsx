import React, { useState } from 'react';
import styles from './Contact.module.css'
const Contact = () =>{
    const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar con un backend o servicio externo
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente');
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  const whatsappNumber = '573058290062'; // Tu número con código de país sin símbolos
  const whatsappMessage = `Hola, mi nombre es ${formData.nombre} y quiero más información.`;

   return (
        <>
        <section className={styles.sectionContainer}>
           <div className={styles.container}>
                <h2>Contáctanos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className={styles.input}
                />
                <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                required
                className={styles.input}
                />
                <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows="20"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className={styles.textarea}
                />
                <button type="submit" className={styles.button}>Enviar</button>
            </form>

            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
            >
                📱 Escríbenos por WhatsApp
            </a>
        </div>

        </section>
             
        </>
    )
}

export default Contact;