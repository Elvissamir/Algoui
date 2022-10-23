import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import InputPackField from "../../InputPackField"

interface FilterFieldsProps {
    lowLimitInput: string 
    includeLowLimit: boolean 
    highLimitInput: string 
    includeHighLimit: boolean 
    executingOperation: boolean 
    errors: FormDataError
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FilterFields = ({
        lowLimitInput, includeLowLimit,
        highLimitInput, includeHighLimit,
        executingOperation, errors,
        handleInputChange
    }: FilterFieldsProps) => {
    return (
        <>
            <div className="lower-input-container">
                <InputPackField 
                    inputId="low-val"
                    inputValue={lowLimitInput}
                    inputType='number'
                    label="Filter lower than:" 
                    checkId="low-check" 
                    checkName="low-val"
                    disabled={executingOperation}
                    checked={includeLowLimit} 
                    handleChange={handleInputChange}
                    error={errors['low-val']} />  
                </div>
            <div className="higher-input-container">    
                <InputPackField 
                    inputId="high-val"
                    inputValue={highLimitInput}
                    inputType='number'
                    disabled={executingOperation}
                    label="Filter higher than:" 
                    checkId="high-check" 
                    checkName="high-val"
                    checked={includeHighLimit} 
                    handleChange={handleInputChange}
                    error={errors['high-val']} />
            </div>
        </>
    )
}

export default FilterFields