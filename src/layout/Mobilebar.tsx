import { useState } from "react"
import GithubIcon from "../assets/icons/GithubIcon"
import MenuIcon from "../assets/icons/MenuIcon"
import externalLinks from "../core/externalLinks"

const Mobilebar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="mobilebar-container">
            <div className="mobilebar">
                <div className="left">
                    <button className="mobile-menu-btn">
                        <p className="text">Menu</p>
                        <MenuIcon />
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