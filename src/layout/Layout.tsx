import AppRouter from "../components/AppRouter"
import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"

const Layout = () => {
    return (
        <div className="layout-container">
            <MobileMenu />
            <Content>
                <AppRouter />
            </Content>
            <Footer />
        </div>
    )
}

export default Layout