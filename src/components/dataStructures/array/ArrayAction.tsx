import { motion, AnimatePresence, AnimationControls } from "framer-motion"
import { ArrayItem } from "../../../core/dataStructures/ArrayDS"
import { FormDataError } from "../../../core/generalTypes"
import FieldErrorInfo from "../../FieldErrorInfo"

interface ArrayActionProps {
    data: ArrayItem[]
    controls: AnimationControls
    errors: FormDataError
}

const ArrayAction = ({data, controls, errors }: ArrayActionProps) => {
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
            { errors['data'] && <FieldErrorInfo error={errors['data']} /> }
        </div>
    )
}

export default ArrayAction