import { useState, useEffect } from 'react'

interface WindowSize {
    height: number
    width: number
}

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const updateWindowSize = () => {
        setWindowSize({ 
            height: window.innerHeight, 
            width: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize)

        return () => window.removeEventListener('resize', updateWindowSize)
    }, [])

    return {
        windowSize
    }
}

export default useWindowResize