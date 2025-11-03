import { useState, useEffect } from "react";

function Stopwatch() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);


    useEffect(() => {
        let interval = null;

        if (isRunning) {
        interval = setInterval(() => {
            setTimeInSeconds(prevTime => prevTime + 1);
        }, 1000); 
        } else if (!isRunning && timeInSeconds !== 0) {
        clearInterval(interval);
        }

        return () => {
        clearInterval(interval);
        };
    }, [isRunning]); 

  
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const paddedMinutes = String(minutes).padStart(2, '0');
        const paddedSeconds = String(seconds).padStart(2, '0');

        return `${paddedMinutes}:${paddedSeconds}`;
    };

  
    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeInSeconds(0);
        setLaps([]);
    };

    const handleLap = () => {
        if (isRunning) {
        const formattedTime = formatTime(timeInSeconds);
        setLaps(prevLaps => [formattedTime, ...prevLaps]);
        }
    };

  return (
    
    <div className="stopwatch-app">
      
        <div className="stopwatch-card">
            
            <h1 className="stopwatch-title">
            ⏱️ Stopwatch
            </h1>
            
            <div className="time-display">
            {formatTime(timeInSeconds)}
            </div>
            
            <div className="button-group">
            <button
                onClick={handleStart}
                disabled={isRunning}
                className="btn btn-start"
            >
                Start
            </button>
            <button
                onClick={handlePause}
                disabled={!isRunning}
                className="btn btn-pause"
            >
                Pause
            </button>
            <button
                onClick={handleLap}
                disabled={!isRunning}
                className="btn btn-lap"
            >
                Lap
            </button>
            <button
                onClick={handleReset}
                className="btn btn-reset"
            >
                Reset
            </button>
            </div>
            
            {laps.length > 0 && (
            <div className="laps-container">
                <h2 className="laps-title">Laps</h2>
                <div className="laps-list">
                <ul>
                    {laps.map((lap, index) => (
                    <li key={index}>
                        <span className="lap-number">Lap {laps.length - index}</span>
                        <span className="lap-time">{lap}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

export default Stopwatch;