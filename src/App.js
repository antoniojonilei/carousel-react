import './App.css';
import { motion } from 'framer-motion'

import image1 from './img/img1.jpg'
import image2 from './img/img2.jpg'
import image3 from './img/img3.jpg'
import image4 from './img/img4.jpg'

const images = [image1, image2, image3, image4]

function App() {
  return (
    <div className="App">
      
      <motion.div className="carousel">
        <motion.div className="inner">

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