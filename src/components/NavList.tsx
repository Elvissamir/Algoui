import { Link } from "react-router-dom"
import { routesArr } from "../core/routes"

const NavList = () => {
    return (
        <nav className="nav-menu">
            <ul className="nav-list">
                    {routesArr.map((route, index) => 
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={route.route}>{route.name}</Link>
                        </li>
                    )}
                </ul>
        </nav>
    )
}

export default NavList