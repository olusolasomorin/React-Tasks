function RGBSlider({ label, value, onChange, colorClass }) {
    return (
        <div className="slider-group">
            <label>
                {label}: <span>[{value}]</span> 
            </label>

            <input 
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className={`slider ${colorClass}`}
            />
        </div>
    );
}

export default RGBSlider;