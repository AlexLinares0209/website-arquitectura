import Footer from '../Components/layout/Footer'
import { useState } from 'react'

const Contact = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(valores);
    }

    const handleValores = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="contact">
                <div className="contact-form">
                    <h2 className='animate__animated animate__slideInDown'>Hablemos de tu Proyecto</h2>
                    <form className='animate__animated animate__slideInLeft' onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={valores.nombre}
                                onChange={handleValores}
                                placeholder='Introduce tu nombre completo' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={valores.email}
                                onChange={handleValores}
                                placeholder='Introduce tu dirección de email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Teléfono (opcional)</label>
                            <input
                                type="text"
                                name="telefono"
                                value={valores.telefono}
                                onChange={handleValores}
                                placeholder='Introduce tu número de teléfono' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Mensaje</label>
                            <textarea
                                name="mensaje"
                                placeholder='Cuéntame sobre tu proyecto...'></textarea>
                        </div>
                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3 className='animate__animated animate__slideInLeft'>Información de Contacto</h3>
                    <ul className='animate__animated animate__slideInRight'>
                        <li><i className='fa-solid fa-location-dot'></i> <span>Lima, Perú</span></li>
                        <li><i className='fa-solid fa-envelope'></i> <span>hola@arquitecta.com</span></li>
                        <li><i className='fa-solid fa-phone'></i> <span>+51 901204711</span></li>
                    </ul>
                    <h3 className='animate__animated animate__slideInLeft'>Ubicación de Estudio</h3>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5886710276695!2d-77.09677578811385!3d-12.062844688125804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c95c56cecab1%3A0x2b65bd23efeb00c!2sAv.%20Venezuela%205355%2C%20San%20Miguel%2015088!5e0!3m2!1ses!2spe!4v1759983137128!5m2!1ses!2spe"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact