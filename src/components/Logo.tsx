import { Link } from "react-router-dom"
import AlgouiIcon from "./icons/AlgouiIcon"
import routes from "../core/routes"

const Logo = () => {
    return (
        <Link className="logo" to={ routes.home.route }>
            <p className="text">Algo<span className="special-text">UI</span></p>
            <AlgouiIcon />
        </Link>
    )
}

export default Logo