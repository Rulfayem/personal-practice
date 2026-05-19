import { useState } from "react";

export default function RectangleCalculations() {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const numberLength = parseFloat(length);
  const numberWidth = parseFloat(width);
  const rectangleArea = numberLength * numberWidth;
  const rectanglePerimeter = 2 * (numberLength + numberWidth);

  const isValidForDisplay = !isNaN(numberLength) && !isNaN(numberWidth) && numberLength > 0 && numberWidth > 0;

  return (
    <div>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        placeholder="Enter length"
      />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Enter width"
      />

      {isValidForDisplay && (
        <div>
          <p>Area: {rectangleArea}</p>
          <p>Perimeter: {rectanglePerimeter}</p>
        </div>
      )}
    </div>
  );
}