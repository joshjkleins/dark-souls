import { useState } from 'react'
import StepOne from './components/StepOne'
import DarkSoulsThree from './components/DarkSoulsThree'
import './App.css'

function App() {
  const [gameChoice, setGameChoice] = useState('')

  return (
    <div className="">
        {gameChoice == '' && <StepOne choice={setGameChoice} /> }
        {gameChoice == 'Dark Souls 3' && <DarkSoulsThree choice={setGameChoice} />}
    </div>
  )
}

export default App
