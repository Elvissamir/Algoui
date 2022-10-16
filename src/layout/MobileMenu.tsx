import Logo from "../components/Logo"
import NavList from "../components/NavList"

const MobileMenu = () => {
    return (
        <div className="mobile-menu"> 
            <div className="top">
                <Logo />
            </div>
            <div className="nav-list-container">
                <NavList />
            </div>
        </div>
    )
}

export default MobileMenu