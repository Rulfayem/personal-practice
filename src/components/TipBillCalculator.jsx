import { useState } from "react";

export default function TipBillCalculator() {

    const [billAmount, setBillAmount] = useState("");
    const [tipPercent, setTipPercent] = useState("5");

    const numberBillAmount = parseFloat(billAmount);
    const numberTipPercent = parseFloat(tipPercent);
    const tipAmount = numberBillAmount * (numberTipPercent / 100);
    const totalPrice = numberBillAmount + tipAmount;

    const showValidDisplay = !isNaN(numberBillAmount) && numberBillAmount > 0;

    return (
        <div>
            <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="Enter bill amount:"
            />
            <select value={tipPercent} onChange={(e) => setTipPercent(e.target.value)}>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
            </select>

            {showValidDisplay && (
                <div>
                    <p>Tip Amount: {tipAmount}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            )}
        </div>
    );
}