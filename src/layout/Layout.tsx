import AppRouter from "../components/AppRouter"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"

const Layout = () => {
    return (
        <div className="layout-container">
            <Mobilebar />
            <Navbar />
            <Content>
                <AppRouter />
            </Content>
            <Footer />
        </div>
    )
}

export default Layout