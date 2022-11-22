import GithubIcon from "./icons/GithubIcon"
import externalLinks from "../core/externalLinks"

const MyGithubLink = () => {
    return (
        <a className="my-github" href={externalLinks.github}>
            <p className="text">My Github</p>
            <GithubIcon />
        </a>
    )
}

export default MyGithubLink