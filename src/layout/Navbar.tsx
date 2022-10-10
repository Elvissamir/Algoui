import Logo from "../components/Logo"
import NavList from "../components/NavList"

const Navbar = () => {
    return (
        <div className="navbar-container x-container">
            <div className="navbar">
                <Logo />
                <NavList />
            </div>
        </div>
    )
}

export default Navbar