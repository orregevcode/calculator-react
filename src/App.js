import "./styles.css";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("0"); // Current input value
  const [operator, setOperator] = useState(null); // Selected operator
  const [secondNumber, setSecondNumber] = useState("0"); // Second operand
  const [result, setRes] = useState(0); // Result of the calculation

  /**
   * Performs the calculation based on the operator selected.
   * @param {string} opr - The operator to perform the calculation.
   * @param {number} firstNum - The first operand.
   * @param {number} secNum - The second operand.
   * @param {Function} setRes - Function to update the result state.
   */
  const handleEqual = (opr, firstNum, secNum, setRes) => {
    switch (opr) {
      case "+":
        const sum = parseFloat(firstNum) + parseFloat(secNum);
        setRes(sum);
        setInput(sum.toString());
        setSecondNumber("0");
        setOperator(null); // Reset the operator after calculation
        break;
      case "-":
        const difference = parseFloat(firstNum) - parseFloat(secNum);
        setRes(difference);
        setInput(difference);
        setSecondNumber("0");
        setOperator(null); // Reset the operator after calculation
        break;
      case "*":
        const multiply = parseFloat(firstNum) * parseFloat(secNum);
        setRes(multiply);
        setInput(multiply);
        setSecondNumber("0");
        setOperator(null); // Reset the operator after calculation
        break;
      case "%":
        const percentage = (parseFloat(firstNum) / 100).toFixed(2);

        setRes(percentage);
        setInput(percentage);
        setSecondNumber("0");
        setOperator(null);
        break;
      case "÷":
        const division = parseFloat(firstNum) / parseFloat(secNum);
        setRes(division);
        setInput(division);
        setSecondNumber("0");
        setOperator(null); // Reset the operator after calculation
        break;
    }
  };

  /**
   * Handles the click event for number buttons.
   * @param {string} value - The value of the clicked button.
   */
  function handleClick(value) {
    if (operator === null) {
      setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
    } else {
      setSecondNumber((prevSecondNumber) =>
        prevSecondNumber === "0" ? value : prevSecondNumber + value
      );
    }
  }

  /**
   * Handles the click event for operator buttons.
   * @param {string} value - The operator value.
   */
  function handleSign(value) {
    setOperator(value);
  }

  /**
   * Converts the current input, operator, second number, and result to a string.
   * @param {string} value - Current input value.
   * @param {string} sign - Selected operator.
   * @param {string} secondNumber - Second operand.
   * @param {number} res - Result of the calculation.
   * @returns {string} String representation of the calculation.
   */
  function toString(value, sign, secondNumber, res) {
    const numberValue = parseFloat(value);
    const secoundNumber = parseFloat(secondNumber);
    return sign === null
      ? numberValue.toLocaleString()
      : numberValue.toLocaleString() +
          sign +
          (secondNumber === "0" ? "" : secoundNumber.toLocaleString());
  }

  /**
   * Handles the click event for the clear (AC) button.
   * @param {string} value - Value of the clear button (not used).
   */
  const handleClear = (value) => {
    setInput("0");
    setOperator(null);
    setSecondNumber("0");
    setRes(0);
  };

  /**
   * Toggles the sign of the current input.
   */
  const handlePlusMinus = () => {
    setInput((prevInput) => {
      const currentValue = parseFloat(prevInput);
      if (currentValue === 0 || isNaN(currentValue)) return prevInput;
      return (-currentValue).toString();
    });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="screen">
          <div className="screen-value">
            {toString(input, operator, secondNumber, result)}
          </div>
        </div>
        <div className="buttonBox">
          <button
            onClick={() => handleClear("AC")}
            className="btn btn-function"
          >
            AC
          </button>
          <button
            onClick={() => handlePlusMinus()}
            className="btn btn-function"
          >
            ±
          </button>
          <button onClick={() => handleSign("%")} className="btn btn-function ">
            %
          </button>
          <button onClick={() => handleSign("÷")} className=" btn-operator">
            ÷
          </button>
          <button onClick={() => handleClick("7")} className="btn">
            7
          </button>
          <button onClick={() => handleClick("8")} className="btn">
            8
          </button>
          <button onClick={() => handleClick("9")} className="btn">
            9
          </button>
          <button
            onClick={() => handleSign("*")}
            className=" btn-multiply btn-operator"
          >
            x
          </button>
          <button onClick={() => handleClick("4")} className="btn">
            4
          </button>
          <button onClick={() => handleClick("5")} className="btn">
            5
          </button>
          <button onClick={() => handleClick("6")} className="btn">
            6
          </button>
          <button onClick={() => handleSign("-")} className=" btn-operator">
            −
          </button>
          <button onClick={() => handleClick("1")} className="btn">
            1
          </button>
          <button onClick={() => handleClick("2")} className="btn">
            2
          </button>
          <button onClick={() => handleClick("3")} className="btn">
            3
          </button>
          <button onClick={() => handleSign("+")} class=" btn-operator ">
            +
          </button>
          <button onClick={() => handleClick("0")} className=" btn-zeros">
            0
          </button>
          <button className="btn btn-decimal">.</button>
          <button
            onClick={() => handleEqual(operator, input, secondNumber, setRes)}
            className=" btn-operator "
          >
            =
          </button>
        </div>
        <div className="bottom-line"></div>
      </div>
    </div>
  );
}
