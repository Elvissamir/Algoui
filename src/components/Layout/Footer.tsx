import AlgouiIcon from "../../assets/icons/AlgouiIcon"
import CogIcon from "../../assets/icons/CogIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import LinkedinIcon from "../../assets/icons/LinkedinIcon"
import MailIcon from "../../assets/icons/MailIcon"
import WorldIcon from "../../assets/icons/WorldIcon"

const Footer = () => {
    const externalNetworks = [
        { url: '/', icon: <WorldIcon /> },
        { url: 'https://github.com/Elvissamir', icon: <GithubIcon /> },
        { url: 'https://linkedin.com/in/elvissam', icon: <LinkedinIcon /> }
    ]

    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="my-networks">
                    <p className="text-title">My Social Networks:</p>
                    <div className="my-email">
                        <MailIcon />
                        <p className="text">elvissam.software@gmail.com</p>
                    </div>
                    <div className="other-networks">
                        {externalNetworks.map((network, index) => 
                            <a key={index} href={network.url} className="external-link-icon">
                                {network.icon}
                            </a>
                        )}
                    </div>
                </div>
                <div className="developed-by">
                    <div className="top">
                        <CogIcon />
                        <p className="text">Designed and Developed</p>
                    </div>
                    <p className="text">by</p>
                    <p className="text">Elvis Carrasco</p>
                </div>
                <div className="footer-bottom">
                    <p className="text">Algo<span className="algoui-sletters">UI</span></p>
                    <AlgouiIcon />
                </div>
                <div className="footer-end">
                    <p className="text">Algorithms And Data Structures 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer