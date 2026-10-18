import {useState} from 'react'

function PokedexPortfolioCard() {
  let name = "Pokedex"
  let description = "My level 2 capstone project. I choose to build a pokedex that loads its data from the PokeAPI."
  let liveUrl = "https://Hexaxolotl.github.io/capstone-level-2/"
  let repoUrl = "https://github.com/Hexaxolotl/capstone-level-2"
   const [likes, setLike]= useState(0)
  
      const addLike = ()=>{
          setLike(likes + 1)
      }
  
  
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} role="button" >Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default PokedexPortfolioCard