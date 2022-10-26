import { AnimatePresence, motion } from "framer-motion"
import useDisableOuterScroll from "../hooks/useDisableOuterScroll"
import useWindowResize from "../hooks/useWindowResize"
import MobileControls from "./MobileControls"

interface ShowMobileControlsProps {
    showControls: boolean
}

const ShowMobileControls = ({ showControls }: ShowMobileControlsProps) => {
    const { windowSize } = useWindowResize()
    useDisableOuterScroll({ disable: showControls })

    return (
        <>
            { windowSize.width < 1024 &&
                <AnimatePresence>
                    { showControls && 
                        <motion.div
                            initial={{ translateX: '100%' }}
                            animate={{ translateX: '0%' }}
                            exit={{ translateX: '100%' }}
                            transition={{ duration: 0.5, bounce: 0 }}
                            className="mobile-controls-container scroll">
                                <MobileControls />
                        </motion.div> }
                </AnimatePresence>}
        </>
    )
}

export default ShowMobileControls