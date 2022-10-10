import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import Mobilebar from "./Mobilebar"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="layout-container">
            <MobileMenu showMenu={showMenu} />
            <Mobilebar 
                showMenu={showMenu} 
                toggleMenu={handleToggleMenu} />
            <Content>
                <AppRouter />
            </Content>
            <Footer />
        </div>
    )
}

export default Layout