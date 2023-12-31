import { testimonials } from "../../data.js"

function ClientTestimonial({ name, img, quote, title }) {
  return (
    <figure>
      <img src={img} alt="Profile Picture" />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <cite className="name">{name}.</cite>
        <br />
        <cite className="job-title">{title}</cite>
      </figcaption>
    </figure>
  )
}

function Testimonials() {
  return (
    <section id="testimonial-section">
      <h1>client testimonials</h1>

      <section className="testimonials">
        {testimonials.map(({ name, img, quote, title }, i) => {
          return (
            <ClientTestimonial
              name={name}
              img={img}
              quote={quote}
              title={title}
              key={i}
            />
          )
        })}
      </section>
    </section>
  )
}

export default Testimonials
