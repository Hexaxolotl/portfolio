import {useState} from 'react'
import './hero.css'
import heroPhoto from './hero-photo.js'
//import imageUrl from './image-url.js'
function Hero() {
  
  
  const [sat, setSat]=useState(0)
  
  const showColor = ()=>{
    setSat(0)
  }

  const showBlackAndWhite =()=>{
    setSat(-100)
  }

  const [S, A]= heroPhoto(500,500, 0,"hello world")

  return (
    <div>
      <div className="hero">
        <img src={S} alt={A}/>
      </div>
      <p className="hero-buttons">
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and white</button>
      </p>
    </div> 
)
}

export default Hero