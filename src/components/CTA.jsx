import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
      Have an exciting project in mind? <br className="sm:block hidden" />
      Let's bring your vision to life together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  )
}

export default CTA;
