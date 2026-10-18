import {useState} from 'react'
import './hero.css'
import heroPhoto from './hero-photo.js'
//import imageUrl from './image-url.js'


function Hero() {
  const photos = [
    "photo-1643272148406-d09ca2d79dee?",
    "photo-1530209925954-8aecf4eb1e43?",
    "photo-1503416997304-7f8bf166c121?"
  ]
  const description = [
    "A photo of flowers in a field",
    "A photo of a statue with plants on it",
    "A photo of the phases of the moon"
  ]

  const [sat, setSat]=useState(0)
  const [index, setIndex] = useState(0)
  const [blur, setBlur] = useState(0)


  const nextPhoto = () => {
  if (index === photos.length - 1) {
    setIndex(0)
  } else {
    setIndex(index + 1)
  }
}

  const previousPhoto = () => {
  if (index === 0) {
    setIndex(photos.length - 1)
  } else {
    setIndex(index - 1)
  }
}

  const showColor = ()=>{
    setSat(0)
  }

  const showBlackAndWhite =()=>{
    setSat(-100)
  }

  const [S, A] = heroPhoto(photos[index],500,500, sat, description[index])


  const moreBlur = ()=>{
    setBlur = (blur + 100)
  }
    const removeBlur = () => {
    setBlur(0)
  }
  
  return (
    <div>
      <div className="hero">
        <img src={S + "&blur=" + blur} alt={A}/>
      </div>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and white</button>
        <button onClick={moreBlur}>More Blur</button>

      </p>
    </div> 
)
}

export default Hero