interface ActionBtnProps {
    text: string
    wrapperCssClass: string
    disabled: boolean
    action: () => void
}

const ActionBtn = ({ action, wrapperCssClass, disabled, text }: ActionBtnProps) => {
    return (
        <div className={wrapperCssClass}>
            <button 
                onClick={action} 
                className={ disabled? 'action-btn disabled-btn' : 'action-btn' }
                disabled={disabled}
                type="button">{text}</button>
        </div>
    )
}

export default ActionBtn