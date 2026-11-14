//import imageUrl form './image-url.js'

//const heroPhoto = (width, height, description) => {
  //  const src = imageUrl(width, height)
   // const alt = description
    //return [src,alt]
//}

//export default heroPhoto

import imageUrl from './image-url.js'

const heroPhoto = (width, height, sat, description) => {
  const src = imageUrl(width, height, sat)
  const alt = description
  return [src, alt]
}



export default heroPhoto