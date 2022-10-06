import AppRouter from "../AppRouter"
import Content from "./Content"
import Footer from "./Footer"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"

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