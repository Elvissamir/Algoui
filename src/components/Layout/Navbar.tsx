import { Link } from "react-router-dom"
import routes from "../../core/routes"

const Navbar = () => {
    const routesList = Object.keys(routes)

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link className="nav-logo" to={routes.home.route}></Link>
                <ul className="nav-link-list">
                    {routesList.map((routeKey, index) => 
                        <li className="nav-item" key={index}>
                            <Link 
                                className="nav-link" 
                                to={routes[routeKey as keyof typeof routes].route}>
                                    {routes[routeKey as keyof typeof routes].name}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar