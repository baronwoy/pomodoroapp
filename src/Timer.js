import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const red = '#E51C1C'


function Timer() {
    return (
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor: '#333'
            })} />

            <div style={{marginTop: '20px;'}}>
                <PlayButton />
                <PauseButton />

            </div>
            <div style={{marginTop: '20px'}}>

            </div>

        </div>
    );
}

export default Timer;