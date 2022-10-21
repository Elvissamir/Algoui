import { useEffect } from 'react'
import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from '../../../../core/dataStructures/ArrayDS'
import useIntroArrayVariant from '../variants/useIntroArrayVariant'

interface UseIntroActionProps {
    dataArray: ArrayItem[]
    operation: ArrayOperation
    controls: AnimationControls
    afterAction: () => void
}

const useIntroAction = ({ dataArray, operation, controls, afterAction }: UseIntroActionProps) => {
    const introArrayVariant = useIntroArrayVariant()

    const introAction = async () => {
        await controls.start(introArrayVariant())

        afterAction()
    }

    useEffect(() => {
        if (operation === 'intro') introAction()
    }, [dataArray, operation])

    return {
        introAction
    }
}

export default useIntroAction