import Content from "./Content"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <Content>
                <div></div>
            </Content>
            <Footer />
        </div>
    )
}

export default Layout