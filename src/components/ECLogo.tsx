import CircuitIcon from "./icons/CircuitIcon"

const ECLogo = () => {
    /*
      <div className="square-logo">
            <div className="logo-top">
                <p className="ec-letter">EC</p>
                <ECCircuit />
            </div>
            <div className="square-logo-line"></div>
            <p className="ec-logo-footer">Software Engineer</p>
        </div>
        <div className="square-logo-2">
            <div className="logo-top">
                <p className="ec-letter">EC</p>
                <ECCircuit />
            </div>
            <div className="square-logo-line"></div>
            <p className="ec-logo-footer">Software Engineer</p>
        </div>
        <div className="square-logo-3">
            <div className="logo-top">
                <p className="ec-letter">EC</p>
                <ECCircuit />
            </div>
            <div className="square-logo-line"></div>
            <p className="ec-logo-footer">Software Engineer</p>
        </div>
        <div className="square-logo-4">
            <div className="logo-top">
                <p className="ec-letter">EC</p>
                <ECCircuit />
            </div>
            <div className="square-logo-line"></div>
            <p className="ec-logo-footer">Software Engineer</p>
        </div>

          <div className="ec-logo">
                <CircuitIcon />
                <p className="ec-logo-text">ELVIS CARRASCO</p>
                <div className="ec-logo-line"></div>
                <p className="ec-logo-footer">Software Engineer</p>
            </div>
        */

    return (
        <div className="ec-logo-container">         
            <div className="ec-logo">
                <a className="logo-link" href="/">
                    <CircuitIcon />
                    <div className="ec-logo-text">
                        <p className="E">ELVIS</p>
                        <p className="C">CARRASCO</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ECLogo