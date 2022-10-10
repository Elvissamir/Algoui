import { useState } from "react"
import Logo from "../components/Logo"
import NavList from "../components/NavList"
import Mobilebar from "./Mobilebar"

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="mobile-menu-container">
            <div className={showMenu? "mobile-menu open" : 'mobile-menu'}> 
                <div className="top">
                    <Logo />
                </div>
                <div className="nav-list-container">
                    <NavList />
                </div>
            </div>
            <Mobilebar 
                showMenu={showMenu} 
                toggleMenu={handleToggleMenu} />
        </div>
    )
}

export default MobileMenu