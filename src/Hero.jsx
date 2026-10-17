import imageUrl from './image-url.js'
import './hero.css'
import heroPhoto from './hero-photo.js'

function Hero() {
  const [S, A]= heroPhoto(1200,500, 0,"hello world")

  return (
    <div className="hero">
      <img src={S} alt={A}/>
    </div>
  )
}

export default Hero