import { useState } from "react";
import CelsiusInput from "./CelsiusInput.jsx";
import FahrenheitInput from "./FahrenheitInput.jsx";
import CelsiusDisplay from "./CelsiusDisplay.jsx";
import FahrenheitDisplay from "./FahrenheitDisplay.jsx";

function TemperatureApp() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function handleCelsiusChange(e) {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const converted = (parseFloat(value) * 9 / 5) + 32;
    setFahrenheit(converted.toFixed(2));
  }

  function handleFahrenheitChange(e) {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const converted = (parseFloat(value) - 32) * 5 / 9;
    setCelsius(converted.toFixed(2));
  }

  return (
    <div className="temp-cont">
      <h2 className="head-text">Temperature Converter</h2>

      <CelsiusInput 
        celsius={celsius} 
        onTypeCelsius={handleCelsiusChange} 
      />
      <CelsiusDisplay celsius={celsius} />

      <FahrenheitInput 
        fahrenheit={fahrenheit} 
        onTypeFahrenheit={handleFahrenheitChange} 
      />
      <FahrenheitDisplay fahrenheit={fahrenheit} />
    </div>
  );
}

export default TemperatureApp;
