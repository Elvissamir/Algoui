import { AnimatePresence, motion } from "framer-motion"
import useWindowResize from "../../hooks/useWindowResize"
import MobileMenu from "./MobileMenu"

interface ShowMobileMenuProps {
    showMenu: boolean
}

const ShowMobileMenu = ({ showMenu }: ShowMobileMenuProps) => {
    const { windowSize } = useWindowResize()

    return (
        <>
            { windowSize.width <= 1024 && 
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
        </>
    )
}

export default ShowMobileMenu