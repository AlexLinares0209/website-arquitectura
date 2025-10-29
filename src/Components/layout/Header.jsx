import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo"><span>Sissi Perez Garcia</span></Link>

                {/* menu toggle por defecto tiene el valor display: none */}

                <i className={`menu-toggle fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
                    onClick={toggleMenu}
                ></i>

                <Navbar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
            </div>
        </header>
    )
}

export default Header