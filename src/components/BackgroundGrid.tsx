import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useRef, useState } from "react"

const BackgroundGrid = () => {
    const wrapper = useRef<HTMLDivElement | null>(null)
    const [columns, setColumns] = useState(Math.floor(window.innerWidth / 50))
    const [rows, setRows] = useState(Math.floor(window.innerHeight / 50))
    const [tiles, setTiles] = useState<number[]>(new Array(columns * rows).fill(0))
    const controls = useAnimationControls()
    const [startIndex, setStartIndex] = useState(0)
    const [origin, setOrigin] = useState({x: 1, y: 1})
    const [toggle, setToggle] = useState(false)
    const [animate, setAnimate] = useState(true)

    const createGrid = () => {
        // const ncolums = Math.floor(window.innerWidth / 50)
        // const nrows = Math.floor(window.innerHeight / 50)
        const ncolums = 5
        const nrows = 4
        const ntiles = new Array(ncolums * nrows).fill(0)

        if (wrapper.current) {
            wrapper.current.style.setProperty('--columns', ncolums+'')
            wrapper.current.style.setProperty('--rows', nrows+'')
        }

        setTiles(ntiles)
        setColumns(ncolums)
        setRows(nrows)
    }

    const handleClick = async (index: number) => {
        setStartIndex(index)
        setOrigin(calculateCoords(index))
        setAnimate(true)
    }

    const startAnimation = async () => {
        await controls.start('visible')
        setToggle(!toggle)
    }

    const calculateDistance = ({x, y}: any) => {
        const dx = Math.floor(Math.pow(x - origin.x, 2))
        const dy = Math.floor(Math.pow(y - origin.y, 2))
        const d = Math.sqrt(dx + dy)

        return Math.floor(d)
    }
    
    const calculateCoords = (index: number) => {
        let x = Math.floor(index % columns + 1)
        let y = Math.floor((index / columns) + 1)

        return {x, y}
    }

    useEffect(() => {
        createGrid()

        window.addEventListener('resize', createGrid)

        return () => window.removeEventListener('resize', createGrid)
    }, [])

    useEffect(() => {
        startAnimation()
        setAnimate(false)
    }, [animate])

    const itemVariants = {
        hidden: {
          opacity: 0,
          scale: 0.5
        },
        visible: (index: number) => ({
          opacity: toggle? 1 : 0,
          transition: { 
                delay: calculateDistance(calculateCoords(index)) * 0.09, 
                duration: 0.5,
            }
        })
    };

    return (
        <div className="grid-background">
            <motion.div 
                ref={wrapper} 
                id="tiles" 
                variants={{}}
                animate={controls}
                layout
                className="tiles">
                    {tiles.map((tile, index) => 
                        <motion.div 
                            custom={index}
                            variants={itemVariants}
                            onClick={() => handleClick(index)} 
                            className="tile" 
                            key={index}>{index}</motion.div>
                    )}
            </motion.div>
        </div>
    )
}

export default BackgroundGrid