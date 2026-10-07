import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import SignuppagePortfolioCard from './SignuppagePortfolioCard.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import PokedexPortfolioCard from './PokedexPortfolioCard.jsx'
import Fortune from './Fortune.jsx'


function randomNumer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Hexaxolotl</p>
}

function GitHubLink() {
let url = "http://github.com/Hexaxolotl"
let label = "My Github"
return <a href={url}>{label}</a>
}


function App() {
  return (
    <div className="container">
      <Greeting />
      <Header />
      <About />
      <br></br><p>A Pokémon trainer from Pallet Town.</p> <br></br>
      <p> Today's Fortune:</p>
      <Fortune />
      <GitHubLink />
      <p>Check out my projects below!</p>
      <div className="grid">
        <article className="card-jade"><SignuppagePortfolioCard /></article>
        <article className="card-azure"><DataPlaylistPortfolioCard /></article>
        <article className="card-pumpkin"><PokedexPortfolioCard /></article>
      </div>
      <br></br>
      <p>👨🏻‍💻🛠️More projects in the making!🛠️👨🏻‍💻</p>
      <p>Thanks for visiting my portfolio!</p>
      <br></br>
    <Footer />
    </div>
  )
}

export default App
