import imageAbout from "../assets/images/about/image_aboutme.jpg";
import Footer from "../Components/layout/Footer";

const About = () => {
    return (
        <div className="aboutMe">
            <h2 className="animate__animated animate__slideInDown">Sobre mí</h2>
            <ul className="animate__animated animate__slideInLeft">
                <li><i className="fa-solid fa-user"></i> Sissi Perez Garcia</li>
                <li><i className="fa-solid fa-location-dot"></i> Lima, Perú</li>
                <li><i className="fa-solid fa-graduation-cap"></i> Estudiante de Arquitectura en la UPC (Universidad Peruana de Ciencias Aplicadas)</li>
            </ul>
            <img src={imageAbout} alt="imagen about me" className="image-about-me" />
            <section className="animate__animated animate__slideInLeft">
                <p>Desde pequeña, siempre me ha fascinado cómo los espacios pueden influir en nuestras vidas. Mi pasión por la arquitectura me ha llevado a crear diseños que no solo son estéticamente agradables, sino también funcionales y sostenibles, buscando siempre un equilibrio perfecto entre la forma y la función.</p>
            </section>
            <section className="animate__animated animate__slideInRight">
                <h3>Biografía</h3>
                <p>
                    Actualmente cursando mis estudios en la Universidad Peruana de Ciencias Aplicadas (UPC), estoy en camino a
                    convertirme en una arquitecta con una visión fresca y contemporánea. Mi formación académica me está
                    proporcionando una base sólida en principios de diseño, tecnologías constructivas y sostenibilidad, preparándome
                    para enfrentar los desafíos del mundo profesional con creatividad y rigor.
                </p>
            </section>

            <section className="animate__animated animate__slideInLeft">
                <h3>Filosofía de Diseño</h3>
                <p>
                    Mi filosofía se basa en la creencia de que la buena arquitectura puede mejorar la calidad de vida. Me esfuerzo por
                    crear espacios que sean inspiradores, eficientes y respetuosos con el medio ambiente. Cada proyecto es un diálogo
                    entre el cliente, el lugar y la materia, buscando soluciones únicas y atemporales.
                </p>
            </section>

            <section className="animate__animated animate__slideInRight">
                <h3>Experiencia</h3>
                <p>
                    Aunque mi carrera profesional está en sus inicios, he participado activamente en proyectos académicos y concursos
                    universitarios que me han permitido desarrollar mis habilidades en diseño conceptual, modelado 3D y presentación
                    de proyectos. Estoy ansiosa por aplicar mis conocimientos teóricos en proyectos reales y colaborar con profesionales
                    del sector.
                </p>
            </section>

            <section className="animate__animated animate__slideInLeft">
                <h3>Reconocimientos</h3>
                <ul>
                    <li>Proyecto Destacado en Exposición Anual de la Facultad de Arquitectura - UPC 2023</li>
                    <li>Participación en el Workshop Internacional de Diseño Urbano Sostenible - 2022</li>
                    <li>Mención honorífica en Concurso de Ideas para Vivienda Social - 2024</li>
                </ul>
            </section>

            <Footer />
        </div>
    )
}

export default About