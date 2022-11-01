import { ControlsOption } from "./SectionContainer"

interface ControlsDropdownProps {   
    options: ControlsOption[]
}

const ControlsDropdown = ({ options }: ControlsDropdownProps) => {
    return (
        <div className="controls-dropdown-container">
            <ul className="controls-dropdown scroll">
                {options.map((option, index) => 
                    <li className="dropdown-option" key={index}>
                        <button className="dropdown-option-btn">{option.name}</button>
                        <div className="dropdown-content">{option.content}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ControlsDropdown