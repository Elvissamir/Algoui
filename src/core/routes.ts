interface RouteInfo {
    name: string 
    route: string
}

interface AppRoutes {
    [key: string]: RouteInfo
}

interface DataStructureRouteTable {
    [key: string]: DataStructureRoute
}

interface DataStructureRoute extends RouteInfo {
    algorithms: AppRoutes
}

const algorithmsUrl = '/algorithms/'
const dstructuresUrl = '/data-structures/'

const dstructuresRoutes: DataStructureRouteTable = {
    array: { 
        name: 'Array', 
        route: dstructuresUrl+'array',
        algorithms: {
            selectionSort: {
                name: 'Selection Sort',
                route: dstructuresUrl+'array/selection-sort'
            },
            quickSort: {
                name: 'Quick Sort',
                route: dstructuresUrl+'array/quick-sort'
            },
            mergeSort: {
                name: 'Merge Sort',
                route: dstructuresUrl+'array/merge-sort'
            },
            binarySearch: {
                name: 'Binary Search',
                route: dstructuresUrl+'array/binary-search'
            },
            twoPointers: {
                name: 'Two Pointers',
                route: dstructuresUrl+'array/two-pointers'
            },
            slidingWindow: {
                name: 'Sliding Window',
                route: dstructuresUrl+'array/sliding-window'
            }
        } 
    },
    binaryTree: { 
        name: 'Binary Tree', 
        route: dstructuresUrl+'binary-tree',
        algorithms: {
            
        }
    },
    graphs: { 
        name: 'Graphs', 
        route: dstructuresUrl+'graphs',
        algorithms: {} 
    },
    linkedList: { 
        name: 'Linked List', 
        route: dstructuresUrl+'linked-list',
        algorithms: {}
    },
    hashTables: { 
        name: 'Hash Table', 
        route: dstructuresUrl+'hash-table',
        algorithms: {}
    },
    queue: { 
        name: 'Queue', 
        route: dstructuresUrl+'queue',
        algorithms: {}
    },
    stack: { 
        name: 'Stack', 
        route: dstructuresUrl+'stack',
        algorithms: {}
    }
}

const routes: AppRoutes = {
    home: { name: 'Home', route: '/' },
    algorithms: { name: 'Algorithms', route: algorithmsUrl },
    dstructures: { name: 'Data Structures', route: dstructuresUrl }
}

const routesArr = Object.keys(routes).map(key => routes[key])

export default routes
export {
    routesArr,
    dstructuresRoutes
}