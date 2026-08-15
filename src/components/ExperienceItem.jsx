import { useState } from 'react'

const ExperienceItem = ({ item, onUpdate, onRemove}) => {
    const [isEditing, setIsEditing] = useState(
        item.company === '' &&
        item.position === '' &&
        item.responsibilities === '' &&
        item.from === '' &&
        item.until === '',
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
            Company name
            <input
              value={draft.company}
              onChange={(e) => setDraft({ ...draft, company: e.target.value })}
            />
          </label>
          <label>
            Position title
            <input
              value={draft.position}
              onChange={(e) => setDraft({ ...draft, position: e.target.value })}
            />
          </label>
          <label>
            Main responsibilities
            <textarea
              rows="4"
              value={draft.responsibilities}
              onChange={(e) =>
                setDraft({ ...draft, responsibilities: e.target.value })
              }
            />
          </label>
          <div className="row">
            <label>
              Date from
              <input
                value={draft.from}
                onChange={(e) => setDraft({ ...draft, from: e.target.value })}
              />
            </label>
            <label>
              Date until
              <input
                value={draft.until}
                onChange={(e) => setDraft({ ...draft, until: e.target.value })}
              />
            </label>
          </div>
          <div className="entry-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        </form>
      ) : (
        <div className="display">
          <h3>{item.company}</h3>
          <p className="subtitle">
            {item.position}
            {item.from && item.until && (
              <span> · {item.from} — {item.until}</span>
            )}
          </p>
          <p className="responsibilities">{item.responsibilities}</p>
          <div className="entry-actions">
            <button onClick={edit}>Edit</button>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceItem