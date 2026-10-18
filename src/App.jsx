import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import SignuppagePortfolioCard from './SignuppagePortfolioCard.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import PokedexPortfolioCard from './PokedexPortfolioCard.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import GitHubLink from './Githublink.jsx'
import Hero from './Hero.jsx'
import ClickLabPortfoiloCard from './ClickLabPortfoiloCard.jsx'
import FeedTheBeast from './FeedTheBeast.jsx'


function App() {
  return (
    <div className="container">
      <Greeting />
      <Header />
      <Hero/>
      <About />
      <br></br><p>A Pokémon trainer from Pallet Town.</p> <br></br>
      <p> Today's Fortune:</p>
      <Fortune />
      <GitHubLink />
      <p>Check out my projects below!</p>
      <div className="grid">
        <article className="card-jade"><SignuppagePortfolioCard /></article>
        <article className="card-jade"><DataPlaylistPortfolioCard /></article>
        <article className="card-jade"><PokedexPortfolioCard /></article>
        <article className="card-jade"><ClickLabPortfoiloCard /></article>
        <article className="card-jade"><FeedTheBeast /></article>
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
