import Footer from "../Components/layout/Footer"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <div className="services">
        <h2>Mis Servicios</h2>
        <p>Ofrezco una gama completa de servicios de arquitectura para satisfacer las necesidades de mis clientes, desde el diseño conceptual 
        hasta la gestión de proyectos. Mi enfoque se centra en la creación de espacios funcionales, estéticos y sostenibles que reflejan la visión
        y personalidad de cada cliente.</p>

        <div className="services-container">
            <div className="service-card">
                <i className="fa-solid fa-pen-ruler"></i>
                <h3>Diseño Arquitectónico</h3>
                <p>Creación de diseños arquitectónicos innovadores y funcionales para proyectos residenciales, comerciales e institucionales.</p>
            </div>
            <div className="service-card">
                <i className="fa-solid fa-couch"></i>
                <h3>Diseño de Interiores</h3>
                <p>Diseño de interiores que combina estética y funcionalidad para crear espacios acogedores y personalizados.</p>
            </div>
            <div className="service-card">
                <i className="fa-solid fa-lightbulb"></i>
                <h3>Consultoría</h3>
                <p>Asesoramiento experto en todas las fases del proyecto, desde la viabilidad hasta la selección de materiales.</p>
            </div>
            <div className="service-card">
                <i className="fa-solid fa-list-check"></i>
                <h3>Gestión de Proyectos</h3>
                <p>Gestión integral de proyectos para garantizar que se cumplan los plazos, el presupuesto y la calidad.</p>
            </div>
            <div className="service-card">
                <i className="fa-solid fa-cube"></i>
                <h3>Visualización 3D</h3>
                <p>Creación de representaciones visuales realistas en 3D para visualizar el proyecto antes de su construcción.</p>
            </div>
            <div className="service-card">
                <i className="fa-solid fa-house"></i>
                <h3>Urbanismo</h3>
                <p>Planificación y diseño de espacios urbanos sostenibles y funcionales que mejoren la calidad de vida.</p>
            </div>
        </div>

        <div className="contact-container">
            <h3>Contáctame para tu próximo proyecto</h3>
            <p>Estoy lista para ayudarte a hacer realidad tus ideas. Solicita más información o un presupuesto sin compromiso.</p>
            <Link to={"/contact"} className="request-link">Solicitar más información</Link>
        </div>
        <Footer />
    </div>
  )
}

export default Services