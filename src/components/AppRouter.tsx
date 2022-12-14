import { Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import routes, { dstructuresRoutes } from '../core/routes'
import DataStructuresPage from '../pages/DataStructuresPage'
import AlgorithmsPage from '../pages/AlgorithmsPage'
import ArrayDSPage from '../pages/dataStructures/ArrayDSPage'
import BackgroundGrid from './BackgroundGrid'

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.route} element={<HomePage />} />
            <Route path={routes.dstructures.route} element={<DataStructuresPage />} />
            <Route path={dstructuresRoutes.array.route} element={<ArrayDSPage />} />
            <Route path={routes.algorithms.route} element={<AlgorithmsPage />} />

            <Route path='/test' element={<BackgroundGrid />} />
        </Routes>
    )
}

export default AppRouter