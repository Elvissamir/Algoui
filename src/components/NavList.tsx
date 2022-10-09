import { Link } from "react-router-dom"
import { routesArr } from "../core/routes"

const NavList = () => {
    return (
        <nav className="nav-menu">
            <ul className="mobile-menu-list">
                    {routesArr.map((route, index) => 
                        <li className="mobile-item" key={index}>
                            <Link to={route.route}>{route.name}</Link>
                        </li>
                    )}
                </ul>
        </nav>
    )
}

export default NavList