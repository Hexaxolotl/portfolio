import {useState} from 'react'

function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "A playlist page that loads its songs from my own data API."
  let liveUrl = "https://hexaxolotl.github.io/data-playlist/"
  let repoUrl = "https://github.com/Hexaxolotl/data-playlist"
  const [likes, setLike] = useState(0)

  const addLike = ()=>{
    setLike(likes + 1)
  }
  
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} role="button">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default DataPlaylistPortfolioCard
