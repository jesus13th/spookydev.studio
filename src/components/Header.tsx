import { IsAdmin } from '../Test/IsAdmin'
import './css/header.css'
export default function Header(){
    return (
        <header className="header">
            <a href="/"><img className='logo' src={ process.env.PUBLIC_URL + "SpookyDev_Logo.png" } alt="" /></a>
            <div className="categories">
                <a href="/">Home</a>
                <a href="/projects">Proyectos</a>
                <a href="/blogs">Blog</a>
                <a href="/contact">Contacto</a>
                { IsAdmin() && <span onClick={()=> { localStorage.removeItem("admin"); window.location.reload(); }}>Cerrar Sesion</span> }
            </div>
        </header>
    )
}