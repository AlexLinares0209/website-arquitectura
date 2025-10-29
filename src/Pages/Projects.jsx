import { useEffect, useState } from "react"
import data_projects from "../data/data_projects.json"
import { Link } from "react-router-dom"
import Footer from "../Components/layout/Footer"
import 'animate.css';

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState("todos")

    function getProjects() {
        return new Promise((resolve, reject) => {
            resolve(data_projects)
        })
    }

    useEffect(() => {
        getProjects()
            .then((res) => setProjects(res))
    }, [])

    const filteredProjects = projects.filter((project) => filter === "todos" || project.category === filter)
    const categories = ["todos", ...new Set(projects.map((project) => project.category))]

    return (
        <div>
            <div className="title-filters-container">
                <h2 className="animate__animated animate__slideInDown">Proyectos</h2>
                <div className="filters">
                    {
                        categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={filter === category ? "active" : ""}>{category}</button>
                        ))
                    }
                </div>

                <div className="project-list">
                    {
                        filteredProjects.length > 0 &&
                        filteredProjects.map(({ id, title, images }) => (
                            <Link to={`/projects/${id}`} key={id}>
                                <div>
                                    <img src={images[0]} alt={title} />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects