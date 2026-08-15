import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import './styles/App.css'

const App = () => {
  const [general, setGeneral] = useState({ name: '', email: '', phone: ''})
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  return (
    <div className="app">
    <header className="app-header">
      <h1>CV Application</h1>
     <button onClick={() => window.print()}>Download PDF</button>
    </header>
    <GeneralInfo general={general} onUpdate={setGeneral} />
    <Education items={education} onChange={setEducation} />
    <Experience items={experience} onChange={setExperience} />
    </div>
  )
}

export default App;