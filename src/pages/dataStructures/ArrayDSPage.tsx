import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'
import { useAnimationControls } from 'framer-motion'
import useArrayForm from '../../hooks/dataStructures/array/useArrayForm'

const ArrayDSPage = () => {
    const {} = useArrayForm()
    const controls = useAnimationControls()

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={<ArrayControls />}
            action={<ArrayAction data={} controls={controls} />} />
    )
}

export default ArrayDSPage