interface ContentProps {
    children: JSX.Element
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="content-container">
            <div className="content-wrapper x-container">
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Content