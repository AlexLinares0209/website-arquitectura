import { Link } from "react-router-dom"
import 'animate.css';

const Project = ({ project }) => {
    return (
        <div className="project">

            <div className="project-top-info animate__animated animate__slideInDown">
                <div className="breadcrumb">
                    <Link to="/projects"><span className="breadcrumb-one">projects</span></Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className="breadcrumb-two">{project.category} </span>
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className="breadcrumb-two">{project.title}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>
            </div>

            <div className="project-images">
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} - imagen ${index + 1}`} />
                ))}
            </div>


            <div className="project-details-container">
                <p className="animate__animated animate__slideInLeft">{project.description}</p>
                <div className="project-details animate__animated animate__slideInRight">
                    <div className="detail-item">
                        <span className="detail-label">Área: </span>
                        <span className="detail-value">{project.details.area}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Año: </span>
                        <span className="detail-value">{project.details.year}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Ubicación: </span>
                        <span className="detail-value">{project.details.location}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Materiales: </span>
                        <span className="detail-value">{project.details.materials}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project