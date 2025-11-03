import { useState, useEffect } from "react";

function CountdownTimer() {
    const getDefaultTargetDate = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        // Target October 1st
        let target = new Date(`${currentYear}-10-01T00:00:00`);

        // If October 1st of this year has already passed, target next year
        if (now > target) {
        target.setFullYear(currentYear + 1);
        }
        
        // Format for datetime-local input (YYYY-MM-DDTHH:mm)
        return target.toISOString().slice(0, 16);
    };

    // State for the target date, defaulting to the next Nigerian Independence Day
    const [targetDate, setTargetDate] = useState(getDefaultTargetDate());
    
    // State for the calculated time remaining
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    
    // State to track if the countdown has expired
    const [isExpired, setIsExpired] = useState(false);

    // Main effect for the countdown logic
    useEffect(() => {
        // Function to calculate and set the time
        const calculateTimeLeft = () => {
        const target = new Date(targetDate);
        const now = new Date();
        const difference = target - now;

        // Check if the event has started
        if (difference <= 0) {
            setIsExpired(true);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return true; // Return true to stop the interval
        }

        // Calculate time parts
        setIsExpired(false);
        setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        });
        return false; // Return false to continue
        };

        // Run the calculation immediately on load or when targetDate changes
        const stopped = calculateTimeLeft();

        // Set up the interval only if the countdown hasn't already expired
        if (!stopped) {
        const timerId = setInterval(() => {
            // Stop the interval if calculateTimeLeft returns true
            if (calculateTimeLeft()) {
            clearInterval(timerId);
            }
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        // or when targetDate changes (triggering the effect to re-run)
        return () => clearInterval(timerId);
        }
    }, [targetDate]); // Dependency array: re-run effect if targetDate changes

    // Handler for the date input
    const handleDateChange = (e) => {
        if (e.target.value) {
        setTargetDate(e.target.value);
        } else {
        // Reset to default if input is cleared
        setTargetDate(getDefaultTargetDate());
        }
    };

    // Format the target date for display
    const formattedTargetDate = new Date(targetDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Helper to pad numbers with a leading zero
    const pad = (num) => num.toString().padStart(2, '0');

    return (
        <div>
            <div className="app-container">
                <div className="timer-card">
                
                    <h1 className="timer-title">
                        🎉 Countdown Timer
                    </h1>

                    <div className="countdown-display">
                        {isExpired ? (
                        <div className="expired-message">
                            Event Started!
                        </div>
                        ) : (
                        <div className="time-grid">
                            <div className="time-box">
                                <div className="time-value">
                                    {pad(timeLeft.days)}
                                </div>
                                <div className="time-label">
                                    Days
                                </div>
                            </div>
                            <div className="time-box">
                                <div className="time-value">
                                    {pad(timeLeft.hours)}
                                </div>
                                <div className="time-label">
                                    Hours
                                </div>
                            </div>
                            <div className="time-box">
                                <div className="time-value">
                                    {pad(timeLeft.minutes)}
                                </div>
                                <div className="time-label">
                                    Minutes
                                </div>
                            </div>
                            <div className="time-box">
                                <div className="time-value">
                                    {pad(timeLeft.seconds)}
                                </div>
                                <div className="time-label">
                                    Seconds
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    
                    <div className="target-date-wrapper">
                        <div className="target-date-text">
                            {isExpired ? "The event started on:" : "Counting down to:"}
                        </div>
                        <div className="target-date">
                            {formattedTargetDate}
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="datetime" className="input-label">
                            Set a custom event date and time:
                        </label>
                        <input
                            type="datetime-local"
                            id="datetime"
                            value={targetDate}
                            onChange={handleDateChange}
                            className="date-input"
                            min={new Date().toISOString().slice(0, 16)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;