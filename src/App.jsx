import RectangleCalculations from "./components/RectangleCalculations";
import TemperatureCalculations from "./components/TemperatureCalculations";
import TipBillCalculator from "./components/TipBillCalculator";
import ShoppingList from "./components/ShoppingList";
import QuizApp from "./components/SimpleQuiz";
import CountdownTimer from "./components/CountdownTimer";
import BMICalculator from "./components/BMICalculator";

export default function App() {
  return (
    <div>
      <RectangleCalculations />
      <TemperatureCalculations />
      <TipBillCalculator />
      <ShoppingList />
      <QuizApp />
      <CountdownTimer />
      <BMICalculator />
    </div>
  );
}