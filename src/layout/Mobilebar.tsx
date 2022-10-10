import GithubIcon from "../assets/icons/GithubIcon"
import externalLinks from "../core/externalLinks"

interface MobilebarProps {
    showMenu: boolean
    toggleMenu: () => void
}

const Mobilebar = ({showMenu, toggleMenu}: MobilebarProps) => {
    return (
        <div className="mobilebar-container">
            <div className="mobilebar">
                <div className="left">
                    <button onClick={toggleMenu} className="mobile-menu-btn">
                        <p className="text">Menu</p>
                        <div className={showMenu? 'menu-x-icon open' : 'menu-x-icon'}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div className="vertical-line"></div>
                <div className="right">
                    <a className="my-github" href={externalLinks.github}>
                        <p className="text">My Github</p>
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobilebar