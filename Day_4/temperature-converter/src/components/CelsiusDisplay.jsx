function CelsiusDisplay({ celsius }) {
  return (
    <h2>
      Celsius: {celsius ? `${celsius}°C` : '—'}
    </h2>
  );
}

export default CelsiusDisplay;
