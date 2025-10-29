import "animate.css"

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="animate__animated animate__slideInLeft">
            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <p className="animate__animated animate__slideInRight">© 2025 Sissi Perez Garcia. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer