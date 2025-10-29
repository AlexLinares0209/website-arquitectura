import { Link } from "react-router-dom"

const Navbar = ({ isMenuOpen, closeMenu }) => {

    const menuItems = [
        { to: "/", label: "inicio" },
        { to: "/about", label: "sobre mí" },
        { to: "/projects", label: "proyectos" },
        { to: "/services", label: "servicios" },
        { to: "/contact", label: "contacto" }
    ]

    return (
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} >
            <ul>
                {
                    menuItems.map((item) => (
                    <li key={item.to}><Link to={item.to} onClick={closeMenu}>{item.label}</Link></li>))
                }
            </ul>
        </nav>
    )
}

export default Navbar