import { createContext } from 'react'

export interface MobileControlsContextI {
    mobileControls: JSX.Element | null
    setMobileControls: React.Dispatch<React.SetStateAction<JSX.Element | null>> | null
}

const MobileControlsContext = createContext<MobileControlsContextI>({
    mobileControls: null, 
    setMobileControls: null
})

export default MobileControlsContext