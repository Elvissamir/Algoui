import useWindowResize from "../hooks/useWindowResize"
import Mobilebar from "./Mobilebar"

interface ShowMobilebarProps {
    showMenu: boolean 
    toggleMenu: () => void
    toggleControls: () => void
}

const ShowMobilebar = ({ showMenu, toggleMenu, toggleControls }: ShowMobilebarProps) => {
    const { windowSize } = useWindowResize()

    return (
        <>
            { windowSize.width < 1024 && 
                <Mobilebar 
                    showMenu={showMenu} 
                    toggleMenu={toggleMenu} 
                    toggleControls={toggleControls} />}
        </>
    )
}

export default ShowMobilebar