import { useEffect } from "react"

interface UseDisableOuterScrollProps {
    disable: boolean
}

const useDisableOuterScroll = ({ disable }: UseDisableOuterScrollProps) => {
    useEffect(() => {
        if (disable) document.body.style.overflowY = 'hidden'
        else document.body.style.overflowY = 'scroll'

    }, [ disable ])
}

export default useDisableOuterScroll