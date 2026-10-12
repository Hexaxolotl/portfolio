import imageUrl from './image-url.js'
import './hero.css'

function Hero() {

    const src = imageUrl(1200, 500)

  return (
    <div className="hero">
      <img src={imageUrl(1200, 500)} alt="Hello World" />
    </div>
  )
}

export default Hero