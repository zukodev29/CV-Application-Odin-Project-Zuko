import Section from './Section.jsx'
import ExperienceItem from './ExperienceItem.jsx'
import '../styles/Experience.css'

const Experience = ({ items, onChange }) => {
  const add = () =>
    onChange([
      ...items,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        until: '',
      },
    ])

  const update = (id, updated) =>
    onChange(items.map((item) => (item.id === id ? updated : item)))

  const remove = (id) => onChange(items.filter((item) => item.id !== id))

  return (
    <Section title="Practical Experience">
      {items.map((item) => (
        <ExperienceItem
          key={item.id}
          item={item}
          onUpdate={update}
          onRemove={remove}
        />
      ))}
      <button className="add-button" onClick={add}>
        Add Experience
      </button>
    </Section>
  )
}

export default Experience