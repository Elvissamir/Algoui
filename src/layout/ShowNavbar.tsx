import useWindowResize from "../hooks/useWindowResize"
import Navbar from "./Navbar"

const ShowNavbar = () => {
    const { windowSize } = useWindowResize()

    return (
        <>
            { windowSize.width > 1024 && <Navbar />}
        </>
    )
}

export default ShowNavbar