import TemperatureApp from "./FahrenheitInput.jsx";

function CelsiusInput({ celsius, onTypeCelsius }) {
  return (
    <div className="celsius">
      <label>Celsius: </label>
      <input 
        type="number" 
        value={celsius} 
        onChange={onTypeCelsius} 
      />
    </div>
  );
}

export default CelsiusInput;