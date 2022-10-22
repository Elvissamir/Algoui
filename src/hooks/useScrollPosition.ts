import { useEffect, useState } from "react"

const useScrollPosition = () => {
    const [ scrollPosition, setScrollPosition ] = useState(window.scrollY)

    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition)

        return () => window.removeEventListener('scroll', updateScrollPosition)
    }, [])

    return {
        scrollPosition
    }
}

export default useScrollPosition