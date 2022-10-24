import { useContext } from 'react'
import ControlsContext from '../context/MobileControlsContext'

const MobileControls = () => {
    const { mobileControls } = useContext(ControlsContext)

    return (
        <>
            <div className="operations-list-container"></div>
            <div className="field-list-container"></div>
            <div className="control-list-container"></div>
            <div className="mobile-controls">
                { mobileControls }
            </div>
        </>
    )
}

export default MobileControls