import { useState } from 'react'

const EducationItem = ({ item, onUpdate, onRemove }) => {
  const [isEditing, setIsEditing] = useState(
    item.school === '' && item.title === '' && item.date === '',
  )
  const [draft, setDraft] = useState(item)

  const submit = (e) => {
    e.preventDefault()
    onUpdate(item.id, draft)
    setIsEditing(false)
  }

  const edit = () => {
    setDraft(item)
    setIsEditing(true)
  }

  return (
    <div className="entry">
      {isEditing ? (
        <form onSubmit={submit}>
          <label>
            School name
            <input
              value={draft.school}
              onChange={(e) => setDraft({ ...draft, school: e.target.value })}
            />
          </label>
          <label>
            Title of study
            <input
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            />
          </label>
          <label>
            Date of study
            <input
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
            />
          </label>
          <div className="entry-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        </form>
      ) : (
        <div className="display">
          <h3>{item.school}</h3>
          <p>{item.title}</p>
          <p>{item.date}</p>
          <div className="entry-actions">
            <button onClick={edit}>Edit</button>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationItem