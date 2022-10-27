import { useContext, useEffect } from 'react'
import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'
import useArrayForm from '../../hooks/dataStructures/array/useArrayForm'
import ControlsContext from '../../context/MobileControlsContext'

const ArrayDSPage = () => {
    const {
        dataArray,
        indexInput,
        valueInput,
        factorInput,
        controls,
        includeHighLimit,
        includeLowLimit,
        highLimitInput,
        errors,
        lowLimitInput,
        executingOperation,
        handleReset,
        controlHandlers,
        handleInputChange,
    } = useArrayForm()

    const { setMobileControls } = useContext(ControlsContext)

    const arrayControls =  <ArrayControls
        indexInput={indexInput} 
        valueInput={valueInput} 
        factorInput={factorInput}
        lowLimitInput={lowLimitInput}
        includeLowLimit={includeLowLimit}
        highLimitInput={highLimitInput}
        includeHighLimit={includeHighLimit}
        executingOperation={executingOperation} 
        errors={errors}
        handlers={controlHandlers}
        handleReset={handleReset}
        handleInputChange={handleInputChange} />
    
    useEffect(() => {
        if (setMobileControls) setMobileControls(arrayControls)
    }, [ 
        indexInput, 
        valueInput, 
        factorInput, 
        lowLimitInput, 
        highLimitInput,
        includeHighLimit, 
        includeLowLimit,
        errors
    ])

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={arrayControls}
            action={<ArrayAction data={dataArray} controls={controls} />} />
    )
}

export default ArrayDSPage