import './App.css'
import Candidate from './Component/Candidates.jsx'
import { juniorNames } from './data'

function App() {
  return (
    <>
      {juniorNames.map((name, index) => (
        <Candidate key={index} name={name} />
      ))}
    </>
  )
}

export default App
