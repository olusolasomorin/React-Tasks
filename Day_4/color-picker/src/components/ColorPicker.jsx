import React from "react";
import RGBSlider from "./RGBSlider";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import './ColorPicker.css'

function ColorPicker() {
    const [red, setRed] = useState(9);
    const [green, setGreen] = useState(100);
    const [blue, setBlue] = useState(50);

    return (
        <div className="color-picker">
            <h1 className="">
                🎨 Color Picker
            </h1>

            <div className="sliders-container">
                <RGBSlider
                label="Red"
                value={red}
                onChange={setRed}
                colorClass="slider-red"
                />
                <RGBSlider
                label="Green"
                value={green}
                onChange={setGreen}
                colorClass="slider-green"
                />
                <RGBSlider
                label="Blue"
                value={blue}
                onChange={setBlue}
                colorClass="slider-blue"
                />
            </div>

            <ColorDisplay red={red} green={green} blue={blue} />
        </div>
    )
}

export default ColorPicker;