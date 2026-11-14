import {useState} from 'react'
/*grabs React's state hook so this card can track data that changes when a user interacts with it.*/

function ProjectCard({project}) {
  const [likes, setLike] = useState(0)
  const [open, setOpen] = useState (false)
  
  const addLike = ()=>{
    setLike(likes + 1) /* this is a function that updates the likes state */
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  let text = project.description
  if (open){
    text = project.description + " " + project.details
  }

  let label = "Show More"
  if (open) {
    label = "Show Less"
  }
  
  return (
    <article>
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl} role="button">See it live</a> · <a href={project.repoUrl} role="button" >Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default ProjectCard