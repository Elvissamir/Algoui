
import NavList from "../NavList"
import useScrollPosition from "../../hooks/useScrollPosition"
import useWindowResize from "../../hooks/useWindowResize"
import Logo from "../Logo"

const Navbar = () => {
    const { windowSize } = useWindowResize()
    const { scrollPosition } = useScrollPosition()

    return (
        <div className='navbar-container'>
            <div className={scrollPosition > 0? 'navbar-wrapper navbar-scrolled' : 'navbar-wrapper'}>
                <div className='navbar x-container'>
                    <Logo />
                    { windowSize.width > 1024 && <NavList /> }
                </div>
            </div>
        </div>
    )
}

export default Navbar