import '../styles/Section.css'

const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
)

export default Section