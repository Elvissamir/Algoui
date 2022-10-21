import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'
import useArrayForm from '../../hooks/dataStructures/array/useArrayForm'

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
        handleInputChange,
    } = useArrayForm()

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={
                <ArrayControls
                    indexInput={indexInput} 
                    valueInput={valueInput} 
                    factorInput={factorInput}
                    lowLimitInput={lowLimitInput}
                    includeLowLimit={includeLowLimit}
                    highLimitInput={highLimitInput}
                    includeHighLimit={includeHighLimit}
                    executingOperation={executingOperation} 
                    errors={errors}
                    handlers={}
                    handleReset={handleReset}
                    handleInputChange={handleInputChange} />}
            action={<ArrayAction data={dataArray} controls={controls} />} />
    )
}

export default ArrayDSPage