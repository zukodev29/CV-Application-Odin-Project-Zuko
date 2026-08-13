import {useState} from 'react'
import Section from './Section'
import '../styles/GeneralInfo.css'

const GeneralInfo = ({ general, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState(general)

   const submit = (e) => {
    e.preventDefault()
    onUpdate(draft)
    setIsEditing(false)
   }

   const edit = () => {
    setDraft(general)
    setIsEditing(true)
   }

   return (
    <Section title='General Information'>
        {isEditing ? (
        <form onSubmit={submit}>
        <label>
        Name
        <input 
        type='email'
        value={draft.email}
        onChange={(e) => setDraft({ ...draft, email: e.target.value})}
        />
        </label>
        <label>
        Phone 
        <input 
        value={draft.phone}
        onChange={(e) => setDraft ({ ...draft, phone: e.target.value})}
        />
        </label>
        <button type='submit'>Submit</button>
        </form>
        ) : (
            <div className='display'>
            <p>{general.name}</p>
            <p>{general.email}</p>
            <p>{general.phone}</p>
            <button onClick={edit}>Edit</button>
            </div>
        )}
    </Section>
   )
}

export default GeneralInfo