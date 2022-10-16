import AppRouter from "../components/AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"
import useWindowResize from "../hooks/useWindowResize"
import { AnimatePresence, motion } from "framer-motion"

const Layout = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {windowSize} = useWindowResize()

    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
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
                                <MobileMenu showMenu={showMenu} /> 
                        </motion.div>}
                </AnimatePresence>}
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