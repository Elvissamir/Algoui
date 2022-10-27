import { useState } from "react"
import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileControlsContext from "../context/MobileControlsContext"
import ShowMobileMenu from "./ShowMobileMenu"
import ShowMobilebar from "./ShowMobilebar"
import ShowMobileControls from "./ShowMobileControls"
import Navbar from "./Navbar"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMobcontrols, setShowMobcontrols] = useState(false)

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleToggleControls = () => {
        if (showMenu && !ShowMobileControls) 
            setShowMenu(false)

        if (setShowMobcontrols) setShowMobcontrols(!showMobcontrols)
    }

    return (
        <div className="layout-container">
            <ShowMobileMenu showMenu={showMenu} />
            <Navbar />
            <MobileControlsContext.Provider value={{ showControls: showMobcontrols, setShowControls: setShowMobcontrols}}>
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