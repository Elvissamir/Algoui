import SectionContainer, { ControlsOption } from '../../components/SectionContainer'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'
import useArrayForm from '../../hooks/dataStructures/array/useArrayForm'
import SortItemControls from '../../components/dataStructures/array/SortItemControls'
import MultiplyControls from '../../components/dataStructures/array/MultiplyControls'
import FilterControls from '../../components/dataStructures/array/FilterControls'
import ResetControls from '../../components/ResetControls'
import AddAndRemoveItemControls from '../../components/dataStructures/array/AddAndRemoveItemControls'

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

    const ArrayControlOptions: ControlsOption[]  = [
        {
            name: 'Add/Remove Item', 
            content: <AddAndRemoveItemControls 
                indexInput={indexInput}
                valueInput={valueInput}
                executingOperation={executingOperation}
                errors={errors}
                handlers={controlHandlers}
                handleInputChange={handleInputChange} />
        },
        {
            name: 'Sort Items',
            content: <SortItemControls
                executingOperation={executingOperation}
                handlers={controlHandlers} />
        },
        {
            name: 'Multiply Items',
            content: <MultiplyControls
            factorInput={factorInput}
            executingOperation={executingOperation}
            errors={errors}
            handleInputChange={handleInputChange}
            handlers={controlHandlers} />
        },
        {
            name: 'Filter Items',
            content: <FilterControls
                lowLimitInput={lowLimitInput}
                includeLowLimit={includeLowLimit} 
                highLimitInput={highLimitInput}
                includeHighLimit={includeHighLimit} 
                executingOperation={executingOperation}
                errors={errors}
                handlers={controlHandlers}
                handleInputChange={handleInputChange} />
        },
        {
            name: 'Reset', 
            content: <ResetControls 
                handleReset={handleReset} />
        }
    ]

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={ArrayControlOptions}
            action={<ArrayAction data={dataArray} controls={controls} errors={errors} />} />
    )
}

export default ArrayDSPage