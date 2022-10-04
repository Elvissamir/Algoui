import { Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import routes from '../core/routes'

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.route} element={<HomePage />} />
        </Routes>
    )
}

export default AppRouter