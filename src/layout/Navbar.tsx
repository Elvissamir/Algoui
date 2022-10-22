import Logo from "../components/Logo"
import NavList from "../components/NavList"
import useScrollPosition from "../hooks/useScrollPosition"

const Navbar = () => {
    const { scrollPosition } = useScrollPosition()

    return (
        <div className="navbar-container">
            <div className={ scrollPosition > 0? 'navbar-wrapper navbar-scrolled' : 'navbar-wrapper'}>
                <div className='navbar x-container'>
                    <Logo />
                    <NavList />
                </div>
            </div>
        </div>
    )
}

export default Navbar