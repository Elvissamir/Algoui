import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useRef, useState } from "react"

const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(244, 81, 30)",
    "rgb(76, 175, 80)",
    "rgb(33, 150, 243)",
    "rgb(156, 39, 176)"
]

const BackgroundGrid = () => {
    const wrapper = useRef<HTMLDivElement | null>(null)
    const [columns, setColumns] = useState(Math.floor(window.innerWidth / 50))
    const [rows, setRows] = useState(Math.floor(window.innerHeight / 50))
    const [tiles, setTiles] = useState<number[]>(new Array(columns * rows).fill(0))
    const controls = useAnimationControls()
    const [animate, setAnimate] = useState(true)

    const createGrid = () => {
        const ncolums = Math.floor(window.innerWidth / 50)
        const nrows = Math.floor(window.innerHeight / 50)
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
        setAnimate(true)
    }

    const startAnimation = async () => {
        await controls.start('visible')
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
        visible: (delay: number) => ({
          opacity: 1,
          scale: 1,
          transition: { delay }
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
                            key={index}></motion.div>
                    )}
            </motion.div>
        </div>
    )
}

export default BackgroundGrid