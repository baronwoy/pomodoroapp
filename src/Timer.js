import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = '#E51C1C'
const green = '#1CE51C'

function Timer() {
    return (
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                tailColor: '#BEBEBE' 
            })} />;
            <div>

            </div>

        </div>
    );
}

export default Timer;