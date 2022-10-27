import { createContext } from 'react'

export interface MobileControlsContextI {
    showControls: boolean | null
    setShowControls: React.Dispatch<React.SetStateAction<boolean>> | null
}

const MobileControlsContext = createContext<MobileControlsContextI>({
    showControls: null,
    setShowControls: null
})

export default MobileControlsContext