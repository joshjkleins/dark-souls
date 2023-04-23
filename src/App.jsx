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
        <button id="butInstall" type="button" className="btn absolute bottom-5 left-5 text-xs hidden">Install</button>
    </div>
  )
}

export default App
