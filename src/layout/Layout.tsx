import { useState } from "react"
import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileControlsContext from "../context/MobileControlsContext"
import ShowMobileMenu from "./ShowMobileMenu"
import ShowNavbar from "./ShowNavbar"
import ShowMobilebar from "./ShowMobilebar"
import ShowMobileControls from "./ShowMobileControls"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showControls, setShowControls] = useState(false)
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
                <ShowMobileControls 
                    showControls={showControls} />
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