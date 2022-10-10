import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"
import useWindowResize from "../hooks/useWindowResize"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {windowSize} = useWindowResize()

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="layout-container">
            { windowSize.width < 1024 && <MobileMenu showMenu={showMenu} />}
            { windowSize.width < 1024 && <Mobilebar showMenu={showMenu} toggleMenu={handleToggleMenu} />}
            { windowSize.width > 1024 && <Navbar />}
            <Content>
                <AppRouter />
            </Content>
            <Footer />
        </div>
    )
}

export default Layout