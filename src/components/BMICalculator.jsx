import { useState } from "react";
import { Button } from "react-bootstrap";

export default function BMICalculator() {

    const [weight, setWeight] = useState("");
    const numberWeight = parseFloat(weight);
    const [height, setHeight] = useState("");
    const numberHeight = parseFloat(height);

    const BMI = numberWeight / ((numberHeight / 100) ** 2);
    //can make BMI category function, much neater, better than current display very messy

    const showDisplay = !isNaN(numberWeight) && !isNaN(numberHeight) && numberWeight > 0 && numberHeight > 0;

    return (
        <div>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in KG"
            />
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height in CM"
            />

            {showDisplay && (
                <div>
                    <p>{BMI.toFixed(1)}</p>
                    <p>{BMI < 18.5 ? "Underweight" : ""} {BMI >= 18.5 && BMI < 25 ? "Normal weight" : ""} {BMI >= 25 && BMI < 30 ? "Overweight" : ""} {BMI >= 30 ? "Obese" : ""}</p>
                </div>
            )}
        </div>
    );
}