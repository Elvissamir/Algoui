import ActionBtn from "./ActionBtn"

interface ResetControlsProps {
    handleReset: () => void
}

const ResetControls = ({ handleReset }: ResetControlsProps) => {
    return (
        <div className='reset-container'>
            <ActionBtn 
                action={handleReset}
                wrapperCssClass='reset-btn-container'
                text="Reset"
                disabled={false} />
        </div>
    )
}

export default ResetControls