import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import MobileControlsContext from "../../context/MobileControlsContext"
import useDisableOuterScroll from "../../hooks/useDisableOuterScroll"
import useWindowResize from "../../hooks/useWindowResize"

interface ShowMobileControlsProps {
    controls: JSX.Element | JSX.Element[]
}

const ShowMobileControls = ({ controls }: ShowMobileControlsProps) => {
    const { windowSize } = useWindowResize()
    const {showControls} = useContext(MobileControlsContext)
    useDisableOuterScroll({ disable: showControls as boolean })

    return (
        <>
            { windowSize.width <= 1024 &&
                <AnimatePresence>
                    { showControls && 
                        <motion.div
                            initial={{ translateX: '100%' }}
                            animate={{ translateX: '0%' }}
                            exit={{ translateX: '100%' }}
                            transition={{ duration: 0.5, bounce: 0 }}
                            className="mobile-controls-container scroll">
                                <div className="mobile-controls x-container">
                                    {controls}
                                </div>
                        </motion.div> }
                </AnimatePresence>}
        </>
    )
}

export default ShowMobileControls