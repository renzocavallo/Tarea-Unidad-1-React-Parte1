import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <nav>
        <div className="holder">
        <ul>
            <li className="activo">< Link className ="link" to ="/">Home</Link></li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Galeria</li>
            <li>Novedades</li>
            <li>Contacto</li>
        </ul>
        </div>
    </nav>
    )
}

export default Nav