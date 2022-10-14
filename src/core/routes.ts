interface RouteInfo {
    name: string 
    route: string
}

interface AppRoutes {
    [key: string]: RouteInfo
}

const algorithmsUrl = '/algorithms/'
const dstructuresUrl = '/data-structures/'

interface DataStructureInfo extends RouteInfo {
    algorithms: AppRoutes
}

interface DataStructureRouteTable {
    [key: string]: DataStructureInfo
}

const algorithmsRoutes: AppRoutes = {
    selectionSort: {
        name: 'Selection Sort',
        route: algorithmsUrl+'/selection-sort'
    },
    quickSort: {
        name: 'Quick Sort',
        route: algorithmsUrl+'/quick-sort'
    },
    mergeSort: {
        name: 'Merge Sort',
        route: algorithmsUrl+'/merge-sort'
    },
    binarySearch: {
        name: 'Binary Search',
        route: algorithmsUrl+'/binary-search'
    },
    twoPointers: {
        name: 'Two Pointers',
        route: algorithmsUrl+'/two-pointers'
    },
    slidingWindow: {
        name: 'Sliding Window',
        route: algorithmsUrl+'/sliding-window'
    },
    BFT: { 
        name: 'Breadth First Traversal',
        route: algorithmsUrl+'breadth-first-traversal'
    },
    DFTInorder: {
        name: 'Depth First Traversal Inorder',
        route: algorithmsUrl+'depth-first-inorder'
    },
    DFTIpreorder: {
        name: 'Depth First Traversal Preorder',
        route: algorithmsUrl+'depth-first-preorder'
    },
    DFTpostorder: {
        name: 'Depth First Traversal Postorder',
        route: algorithmsUrl+'depth-first-postorder'
    },
    shortestPath: {
        name: "Dijkstra's Shortest Path",
        route: dstructuresUrl+'graphs/shortest-path'
    },
    cycleDetection: {
        name: 'Floyd Cycle Detection',
        route: dstructuresUrl+'linked-list/cycle-detection'
    }
}

const dstructuresRoutes: DataStructureRouteTable = {
    array: { 
        name: 'Array', 
        route: dstructuresUrl+'array',
        algorithms: {
            selectionSort: algorithmsRoutes.selectionSort,
            quickSort: algorithmsRoutes.quickSort,
            mergeSort: algorithmsRoutes.mergeSort,
            binarySearch: algorithmsRoutes.binarySearch,
            twoPointer: algorithmsRoutes.twoPointers,
            slidingWindow: algorithmsRoutes.slidingWindow
        } 
    },
    binaryTree: { 
        name: 'Binary Tree', 
        route: dstructuresUrl+'binary-tree',
        algorithms: {
            BFT: algorithmsRoutes.BFT,
            DFTInorder: algorithmsRoutes.DFTInorder,
            DFTIpreorder: algorithmsRoutes.DFTIpreorder,
            DFTIpostorder: algorithmsRoutes.DFTpostorder
        }
    },
    graphs: { 
        name: 'Graphs', 
        route: dstructuresUrl+'graphs',
        algorithms: {
            shortestPath: algorithmsRoutes.shortestPath
        } 
    },
    linkedList: { 
        name: 'Linked List', 
        route: dstructuresUrl+'linked-list',
        algorithms: {
            cycleDetection: algorithmsRoutes.cycleDetection
        }
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
    dstructuresRoutes,
    algorithmsRoutes,
}