import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Header from './Components/layout/Header'
import ProjectDetail from './Pages/ProjectDetail'
import Services from './Pages/Services'

function App() {

    return (
        <>


            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/projects/:category" element={<ProjectDetail />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>





        </>
    )
}

export default App
