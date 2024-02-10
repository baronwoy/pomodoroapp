
import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { useState } from 'react';

function App() {
 
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
   <main>
    <SettingsContext.Provider value= {{
      showSettings,
      setShowSettings,
      workMinutes,
      breakMinutes, 
      setWorkMinutes,
      setBreakMinutes,
    }}>

    

    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
    
   </main>
  );
}

export default App;
