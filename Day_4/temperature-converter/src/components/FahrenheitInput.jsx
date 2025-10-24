
function FahrenheitInput({ fahrenheit, onTypeFahrenheit }) {
  return (
    <div className="fahren">
      <label>Fahrenheit: </label>
      <input 
        type="number" 
        value={fahrenheit} 
        onChange={onTypeFahrenheit} 
      />
    </div>
  );
}

export default FahrenheitInput;
