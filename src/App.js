
import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { useState } from 'react';

function App() {
 
  const [showSettings, setShowSettings] = useState(true);

  return (
   <main>
    <SettingsContext.Provider value= {{
      workMinutes: 45,
      breakMinutes: 15, 
    }}>

    

    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
    
   </main>
  );
}

export default App;
