interface RouteInfo {
    name: string 
    route: string
}

interface AppRoutes {
    [key: string]: RouteInfo
}

const routes: AppRoutes = {
    home: { name: 'Home', route: '/' },
    algorithms: { name: 'Algorithms', route: '/algorithms' },
    dstructures: { name: 'Data Structures', route: '/data-structures' }
}

export default routes