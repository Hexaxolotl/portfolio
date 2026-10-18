
import {useState} from 'react'


function FeedTheBeast(){
    let name = "Feed the Beast"
    let description = "This project was a feed the beast game. You have to feed the monster by clicking on the food. You win if you beat the timer or reach 10 points."
    let liveUrl = "https://studio.code.org/projects/applab/17288a79-cf69-4264-8263-4a8fb5b8dccd"
    const [likes, setLike]=useState(0)

    const addLike = ()=>{
        setLike(likes + 1)
}

return (
    <article>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
            <a href={liveUrl} role="button">Play</a>
        </p>
        <button onClick={addLike}>Like {likes}</button>
    </article>
)
}

export default FeedTheBeast

