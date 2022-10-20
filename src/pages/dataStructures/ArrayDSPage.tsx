import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'
import { useAnimationControls } from 'framer-motion'

const ArrayDSPage = () => {
    const controls = useAnimationControls()

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={<ArrayControls />}
            action={<ArrayAction />} />
    )
}

export default ArrayDSPage