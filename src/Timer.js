import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';

const red = '#E51C1C'
const green = '#1CE51C'

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

            </div>

        </div>
    );
}

export default Timer;