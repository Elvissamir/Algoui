import { motion, AnimatePresence, AnimationControls } from "framer-motion"
import { ArrayItem } from "../../../core/dataStructures/ArrayDS"

interface ArrayActionProps {
    data: ArrayItem[]
    controls: AnimationControls
}

const ArrayAction = ({data, controls }: ArrayActionProps) => {
    return (
        <div className='array-container'>
            <ul className='array-item-list'>
                <AnimatePresence> 
                    {data.map((item, index) => 
                        <motion.li 
                            className='array-item' 
                            layout
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            animate={controls}
                            custom={index}
                            key={item.id}>
                                {item.val}
                        </motion.li> 
                    )}  
                </AnimatePresence>
            </ul>
        </div>
    )
}

export default ArrayAction