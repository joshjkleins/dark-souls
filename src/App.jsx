import { useState } from 'react'
import StepOne from './components/StepOne'
import DarkSoulsThree from './components/DarkSoulsThree'
import './App.css'

function App() {
  const [gameChoice, setGameChoice] = useState('')

  const installHandler = async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    document.getElementById('butInstall').classList.toggle('hidden', true)
  }

  return (
    <div className="">
        {gameChoice == '' && <StepOne choice={setGameChoice} /> }
        {gameChoice == 'Dark Souls 3' && <DarkSoulsThree choice={setGameChoice} />}
        <button id="butInstall" onClick={installHandler} type="button" className="btn absolute bottom-5 left-5 text-xs">Install</button>
    </div>
  )
}

export default App
