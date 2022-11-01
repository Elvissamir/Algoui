import useWindowResize from "../hooks/useWindowResize"
import ShowMobileControls from "../layout/ShowMobileControls"
import ControlsDropdown from "./ControlsDropdown"

export interface ControlsOption {
    name: string 
    content: JSX.Element | JSX.Element[]
}

interface SectionContainerProps {
    title: string
    description: string
    action: JSX.Element | JSX.Element[]
    controls: ControlsOption[]
    bottom?: JSX.Element
}

const SectionContainer = ({ title, description, action, controls, bottom }: SectionContainerProps) => {
    const { windowSize } = useWindowResize()

    return (
        <section className="section-wrapper">
            <div className="section-top">
                <h1 className="section-title">{title}</h1>
            </div>
            <div className="section-info">
                <p className="text-info">{description}</p>
            </div>
            <div className="section-action-wrapper">
                {windowSize.width > 1024 && <div className="section-controls scroll">{<ControlsDropdown options={controls} />}</div>}
                {windowSize.width <= 1024 && <ShowMobileControls controls={<ControlsDropdown options={controls} />} />}
                <div className='section-action scroll'>{action}</div>
            </div>
            <div className="section-bottom">{bottom}</div>
        </section>
    )
}

export default SectionContainer