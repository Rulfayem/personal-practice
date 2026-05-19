import { useState } from "react";

export default function TemperatureCalculations() {
    //later want to improve to show 3 boxes and can fill in any input and the other inputs will show converted temperature

    const [celcius, setCelcius] = useState("");

    const numberCelcius = parseFloat(celcius);
    const fahrenheit = (numberCelcius * 9 / 5) + 32;
    const kelvin = numberCelcius + 273.15

    const showValidDisplay = !isNaN(numberCelcius);

    return (
        <div>
            <input
                type="number" //ask why nuymber ""
                value={celcius}
                onChange={(e) => setCelcius(e.target.value)}
                placeholder="Enter celcius temperature"
            />

            {showValidDisplay && (
                <div>
                    <p>Converted Fahrenheit: {fahrenheit}</p>
                    <p>Converted Kelvin: {kelvin}</p>
                </div>
            )}
        </div>
    );
}