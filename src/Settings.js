import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import { useContext } from 'react';


function Settings() {

    const settingsInfo = useContext(SettingsContext);

    return(
        <div style={{textAlign: 'left'}}>
            <label>work minutes: {settingsInfo.workMinutes}:00 </label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value = {settingsInfo.workMinutes}
                min={1}
                max = {120}
            />

            <label>break minutes: {settingsInfo.breakMinutes}:00 </label>

            <ReactSlider 
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value = {settingsInfo.breakMinutes}
                min={1}
                max = {120}
            />
        </div>
    );
}

export default Settings;