

import Header from './Header.jsx'
import About from './About.jsx'
import Greeting from './Greeting.jsx'

function randomNumer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function Fortune (){
  let fortunes = ["Your code will compile on the first try today, leaving you staring at the terminal in deep, existential suspicion.", "The bug you've been chasing for three hours will turn out to be a missing semicolon, and fixing it will make you feel like a hacker in a movie.", "CSS and JavaScript will cooperate today, resulting in a flexbox layout that centers vertically on the very first try.", "Your JSX will render on the first try without a single Cannot read properties of undefined (reading 'map') error. Cherish this fleeting moment of pure magic.", "The useEffect hook will only run once instead of entering an infinite loop of doom. The React gods have truly smiled upon you.", "Prop drilling will miraculously solve itself today, or you will accidentally discover Context API and feel like a wizard who just unlocked a forbidden spell.", "Your state updates will happen synchronously in your heart, even if they are asynchronous in React.", "You will pass data from a child component back to a parent on the very first attempt, defying centuries of beginner developer struggle.", "Your first custom hook will work seamlessly, and you will immediately want to rewrite every piece of code you've ever written." ]
let index = randomNumer (0, fortunes.length -1)
return <p>{fortunes[index]}</p>
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
    <div>
      <Greeting />
      <Header />
      <About />
      <br></br><p>A Pokémon trainer from Pallet Town.</p> <br></br>
      <p> Today's Fortune:</p>
      <Fortune />
      <GitHubLink />
    <Footer />
    </div>
  )
}

export default App
