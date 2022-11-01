import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ControlsOption } from "./SectionContainer"

interface ControlsDropdownProps {   
    options: ControlsOption[]
}

const ControlsDropdown = ({ options }: ControlsDropdownProps) => {
    const [activeOptionIndex, setActiveOptionIndex] = useState<number | null>(null)

    const handleToggleOption = (index: number) => {
        if (index === activeOptionIndex) return setActiveOptionIndex(null)

        setActiveOptionIndex(index)
    }

    return (
        <div className="controls-dropdown-container">
            <ul className="controls-dropdown scroll">
                {options.map((option, index) => 
                    <li className="dropdown-option" key={index}>
                        <button 
                            onClick={() => handleToggleOption(index)}
                            className="dropdown-option-btn">{option.name}</button>
                        <AnimatePresence>
                            {index === activeOptionIndex &&
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ bounce: 0 }}
                                    className="dropdown-content">
                                        {option.content}
                                </motion.div>}
                        </AnimatePresence>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ControlsDropdown