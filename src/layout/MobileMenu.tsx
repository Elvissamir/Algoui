import Logo from "../components/Logo"
import NavList from "../components/NavList"
import Mobilebar from "./Mobilebar"

const MobileMenu = () => {
    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu">
                <div className="top">
                    <Logo />
                </div>
                <div className="nav-list-container">
                    <NavList />
                </div>
            </div>
            <Mobilebar />
        </div>
    )
}

export default MobileMenu