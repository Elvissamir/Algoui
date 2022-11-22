import ControlsIcon from "../icons/ControlsIcon"

interface MobilebarProps {
    showMenu: boolean
    toggleControls: () => void
    toggleMenu: () => void
}

const Mobilebar = ({showMenu, toggleMenu, toggleControls}: MobilebarProps) => {
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
                    <button onClick={toggleControls} className="controls-btn">
                        <p className="text">Controls</p>
                        <ControlsIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mobilebar