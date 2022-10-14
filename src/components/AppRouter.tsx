import { Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import routes, { dstructuresRoutes } from '../core/routes'
import DataStructuresPage from '../pages/DataStructuresPage'
import AlgorithmsPage from '../pages/AlgorithmsPage'
import ArrayDS from './dataStructures/ArrayDS'

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.route} element={<HomePage />} />
            <Route path={routes.dstructures.route} element={<DataStructuresPage />} />
            <Route path={dstructuresRoutes.array.route} element={<ArrayDS />} />
            <Route path={routes.algorithms.route} element={<AlgorithmsPage />} />
        </Routes>
    )
}

export default AppRouter