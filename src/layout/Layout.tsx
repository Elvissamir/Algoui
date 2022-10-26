import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"
import useWindowResize from "../hooks/useWindowResize"
import { AnimatePresence, motion } from "framer-motion"
import MobileControls from "./MobileControls"
import MobileControlsContext from "../context/MobileControlsContext"
import ShowMobileMenu from "./ShowMobileMenu"
import ShowNavbar from "./ShowNavbar"
import ShowMobilebar from "./ShowMobilebar"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showControls, setShowControls] = useState(false)
    const {windowSize} = useWindowResize()
    const [mobileControls, setMobileControls] = useState<JSX.Element | null>(null)

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleToggleControls = () => {
        if (showMenu && !showControls) 
            setShowMenu(false)

        setShowControls(!showControls)
    }

    return (
        <div className="layout-container">
            <ShowMobileMenu showMenu={showMenu} />
            <ShowNavbar />
            <MobileControlsContext.Provider value={{ mobileControls, setMobileControls }}>
                
                <ShowMobilebar 
                    showMenu={showMenu} 
                    toggleMenu={handleToggleMenu}
                    toggleControls={handleToggleControls} />
                <Content>
                    <AppRouter />
                </Content>
            </MobileControlsContext.Provider>
            <Footer />
        </div>
    )
}

export default Layout