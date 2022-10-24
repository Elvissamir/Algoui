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
            { windowSize.width < 1024 && 
                <AnimatePresence>
                    { showMenu && 
                        <motion.div
                            initial={{ translateX: '-100%' }}
                            animate={{ translateX: '0%' }}
                            exit={{ translateX: '-100%' }}
                            transition={{ duration: 0.5, bounce: 0 }}
                            className="mobile-menu-container">
                                <MobileMenu /> 
                        </motion.div>}
                </AnimatePresence>}
            <MobileControlsContext.Provider value={{ mobileControls, setMobileControls }}>
                { windowSize.width < 1024 &&
                    <AnimatePresence>
                        { showControls && 
                            <motion.div
                                initial={{ translateX: '100%' }}
                                animate={{ translateX: '0%' }}
                                exit={{ translateX: '100%' }}
                                transition={{ duration: 0.5, bounce: 0 }}
                                className="mobile-controls-container">
                                    <MobileControls />
                            </motion.div> }
                    </AnimatePresence>}
                { windowSize.width < 1024 && 
                    <Mobilebar 
                        showMenu={showMenu} 
                        toggleMenu={handleToggleMenu} 
                        toggleControls={handleToggleControls} />}
                { windowSize.width > 1024 && <Navbar />}
                <Content>
                    <AppRouter />
                </Content>
            </MobileControlsContext.Provider>
            <Footer />
        </div>
    )
}

export default Layout