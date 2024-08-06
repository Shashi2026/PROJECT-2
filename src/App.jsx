import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  //LOGIC

  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter a valid height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));

      if (bmi < 25) {
        setmessage("you are underweight");
      } else if (bmi >= 25) {
        setmessage("you are healthy weight");
      } else {
        setmessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="cointainer">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(event) => setheight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
