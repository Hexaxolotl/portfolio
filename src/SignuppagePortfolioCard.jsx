function SignuppagePortfolioCard() {
  let name = "Odyssey Tavern"
  let description = "A Signup page for a guild I made."
  let liveUrl = "https://hexaxolotl.github.io/signup-page/#why"
  let repoUrl = "https://github.com/Hexaxolotl/REPO"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} role="button" >Read the code</a>
      </p>
    </article>
  )
}

export default SignuppagePortfolioCard