import { useState, useEffect } from 'react'
import { AnimationControls } from "framer-motion"
import { ArrayItem } from '../../../../core/dataStructures/ArrayDS'

interface UseIntroActionProps {
    dataArray: ArrayItem[]
    controls: AnimationControls
    afterAction: () => void
}

const useIntroAction = ({ dataArray, controls, afterAction }: UseIntroActionProps) => {
    const [introOperation, setIntroOperation] = useState()

    const introAction = async () => {
        // await controls.start(displayArrayVariants())

        afterAction()
    }

    useEffect(() => {
        if (introOperation) introAction()
    }, [dataArray, introOperation])

    return {
        introAction
    }
}

export default useIntroAction