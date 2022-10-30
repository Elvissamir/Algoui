import useWindowResize from "../hooks/useWindowResize"
import ShowMobileControls from "../layout/ShowMobileControls"

interface SectionContainerProps {
    title: string
    description: string
    action: JSX.Element | JSX.Element[]
    controls: JSX.Element | JSX.Element[]
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
                {windowSize.width > 1024 && <div className="section-controls scroll">{controls}</div>}
                {windowSize.width <= 1024 && <ShowMobileControls controls={controls} />}
                <div className='section-action scroll'>{action}</div>
            </div>
            <div className="section-bottom">{bottom}</div>
        </section>
    )
}

export default SectionContainer