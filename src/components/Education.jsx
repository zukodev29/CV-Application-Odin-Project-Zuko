import Section from './Section';
import EducationItem from './EducationItem';
import '../styles/Education.css'

const Education = ({ items, onChange}) => {
   const add = () =>
    onChange([
      ...items,
      { id: crypto.randomUUID(), school: '', title: '', date: '' },
    ])

  const update = (id, updated) =>
    onChange(items.map((item) => (item.id === id ? updated : item)))

  const remove = (id) => onChange(items.filter((item) => item.id !== id))

  return (
      <Section title="Educational Experience">
      {items.map((item) => (
        <EducationItem
          key={item.id}
          item={item}
          onUpdate={update}
          onRemove={remove}
        />
      ))}
      <button className='add-button' onClick={add}>
        Add Education
      </button>
      </Section>
)
}

export default Education