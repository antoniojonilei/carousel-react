import { useState, useEffect, useRef } from 'react'
import './App.css';
import { motion } from 'framer-motion'

import image1 from './img/img1-1000.jpg'
import image2 from './img/img22.jpg'
import image3 from './img/img33.jpg'
import image4 from './img/img44.jpg'

const images = [image1, image2, image3, image4, image1, image2, image3, image4]

function App() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  
  console.log(width)

  useEffect(() => {
    // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App"> 
        
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div 
          className="inner" 
          drag="x" 
          dragConstraints={{ right:0, left: -1600}} //usar o width (cálculo)
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          >

            {images.map(image => (
              <motion.div key={image} className="item">
                <img className="img" src={image} alt="texto alternatiovo"/>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

    </div>
  );
}

export default App;