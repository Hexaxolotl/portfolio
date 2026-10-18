import {useState} from 'react'



function ClickLabPortfoiloCard(){
    let name = "Click Lab"
    let description = "I made a small quiz about human bodies. If you answer correctly there will be a sound, and the score goes up by one."
    let liveUrl = "https://hexaxolotl.github.io/click-lab/"
    let repoUrl = "https://github.com/Hexaxolotl/click-lab"
    const [likes, setLike]=useState(0)

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

export default ClickLabPortfoiloCard