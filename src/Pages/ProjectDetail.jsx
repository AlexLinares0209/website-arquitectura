import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import data_projects from "../data/data_projects.json"
import { pedirProjectPorId } from "../helpers/pedirDatos"
import Project from "./Project"

const ProjectDetail = () => {
    const [project, setProject] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        pedirProjectPorId(Number(id))
            .then((res) => {
                setProject(res)
            })
    }, [id])

    return (
        <div className="project-detail">
            { /* <Link to="/projects">← Volver a proyectos</Link> */}

            {
                project && <Project project={project} />
            }
        </div>
    )
}

export default ProjectDetail