function About() {
  return (
    <section id="about-section">
      <article className="about-article">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <button className="lm-btn transform-btn">learn more</button>
      </article>

      <div className="transform-img"></div>

      <div className="stand-out-img"></div>

      <article className="about-article">
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button className="lm-btn stand-out-btn">learn more</button>
      </article>

      <article className="graphic">
        <article className="about-article-text">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </article>
      </article>

      <article className="photo">
        <article className="about-article-text">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </article>
      </article>
    </section>
  )
}

export default About
