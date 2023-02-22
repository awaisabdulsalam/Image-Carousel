import React, { useState } from 'react'
const App = () => {

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
    const [current, setCurrent] = useState(0);
    
    const nextImage = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    const prevImage = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

  return (
      <div className='slider'>
         <div className='left'>
            <button className="button-28" onClick={prevImage}>Previous</button>
         </div>
         {images.map((image, index) => {
          return (
            current === index && (
                <div key={image}>
                    <img src={image} alt='images' className='slider_img'/>
                </div>
            )
          )
         })}
           <div className='right'>
            <button className="button-28" onClick={nextImage}>Next</button>
         </div>
      </div>

  )
}

export default App