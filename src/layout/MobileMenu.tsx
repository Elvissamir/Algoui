import Logo from "../components/Logo"
import NavList from "../components/NavList"

interface MobileMenuProps {
    showMenu: boolean
}

const MobileMenu = ({ showMenu }: MobileMenuProps) => {
    return (
        <div className={showMenu? "mobile-menu-container open" : 'mobile-menu-container'}>
            <div className="mobile-menu"> 
                <div className="top">
                    <Logo />
                </div>
                <div className="nav-list-container">
                    <NavList />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu