import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';
import Pomodoro from './Pomodoro';
import ShortBreak from './Short Break';

const red = '#E51C1C'
const green = '#5CC45C'


function Timer() {
    const settingsInfo = useContext(SettingsContext)

    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work'); // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes*60)

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);


    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes)*60;
        setMode(nextMode);
        modeRef.current = nextMode
        setSecondsLeft(nextSeconds)

        secondsLeftRef.current = nextSeconds;
    }
    function breakMode() {
        const nextMode = modeRef.current === 'break'
        const nextSeconds = settingsInfo.breakMinutes*60;
        setMode(nextMode);
        modeRef.current = nextMode
        setSecondsLeft(nextSeconds)

        secondsLeftRef.current = nextSeconds;
    }

    function workMode() {
        
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        if (nextMode === 'work') {
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes)*60;
        setMode(nextMode);
        modeRef.current = nextMode
        setSecondsLeft(nextSeconds)

        secondsLeftRef.current = nextSeconds;
        }
    }


    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initTimer() {
        setSecondsLeft(settingsInfo.workMinutes * 60)

    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000 )

        return () => clearInterval(interval);
    },  [settingsInfo]);

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100) 

    const minutes = Math.floor(secondsLeft / 60); // 44.8
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0'+seconds;

    return (
        <div>
            
            <div style={{marginBottom: '20px'}} className='Set'>
                <SettingsButton onClick= {() => settingsInfo.setShowSettings(true)}/>
            </div>
            <div style={{marginBottom: '20px'}} className='Title'>
                Pomodoro Timer
            </div>
            
            
            <section className='mainbox'>

            <div style={{marginBottom: '10px' }}>
                <Pomodoro onClick={() => {setIsPaused(true); isPausedRef.current = true; workMode()}} />
                <ShortBreak  onClick={() => {setIsPaused(true); isPausedRef.current = true; breakMode()}} />
            </div>
            <CircularProgressbar 
            value={percentage} 
            text={minutes + ':' + seconds} 
            styles={buildStyles({
                textColor: '#fff',
                pathColor: mode === 'work' ? red : green,
                trailColor: '#333'
            })} />

            <div style={{marginTop: '20px;'}}>

                {isPaused 
                ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false;}} /> 
                : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true;}}/> }
                
               
            </div>
            
            </section>
            <div style={{marginTop: '20px'}}>
                Time to Graft and Work Hard!
            </div>

        </div>
    );
}





export default Timer;