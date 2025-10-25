import { useState } from "react";

function ColorDisplay({ red, green, blue }) {
    const [copied, setCopied] = useState(false);

    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const rgb = `(${red}, ${green}, ${blue})`;
    const hex = `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase()

    function handleCopy() {
        const textarea = document.createElement('textarea');
        textarea.value = hex;
        document.body.appendChild(textarea)
        textarea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.log('Failed to copy hex');
        }
        document.body.removeChild(textarea);
    };

    return (
        <div className="color-display">
            <div className="color-preview" style={{backgroundColor: `rgb(${rgb})` }}></div>
            
            <div className="color-values">
                <p>RGB: {rgb}</p>
                <p>Hex: {hex}</p>
            </div>
            
            <div className="copy-button-container">
                <button onClick={handleCopy} disabled={copied} className={`copy-button ${copied ? 'green' :'blue'}`}>
                    {copied ? 'Copied!' : 'Copy Hex'}
                </button>
            </div>
        </div>
    )
}

export default ColorDisplay;