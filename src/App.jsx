import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import GitHubLink from './Githublink.jsx'
import Hero from './Hero.jsx'
import ProjectCard from './ProjectCard.jsx'
import projects from './projects.js'
import Section from './Section.jsx'

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
        <Section title="Projects">
          <article className="card-jade"><ProjectCard project={projects[0]}/></article>
          <article className="card-jade"><ProjectCard project={projects[1]}/></article>
          <article className="card-jade"><ProjectCard project={projects[2]}/></article>
          <article className="card-jade"><ProjectCard project={projects[3]}/></article>
          <article className="card-jade"><ProjectCard project={projects[4]}/></article>
        </Section>
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
