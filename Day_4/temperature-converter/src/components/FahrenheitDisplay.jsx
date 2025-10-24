function FahrenheitDisplay({ fahrenheit }) {
  return (
    <h2>
      Fahrenheit: {fahrenheit ? `${fahrenheit}°F` : '—'}
    </h2>
  );
}

export default FahrenheitDisplay;
