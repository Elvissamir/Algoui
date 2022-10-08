interface ContentProps {
    children: JSX.Element
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="content-container">
            <main className="content">
                {children}
            </main>
        </div>
    )
}

export default Content