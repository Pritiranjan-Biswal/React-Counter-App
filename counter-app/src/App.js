
import './App.css';
import { useState } from "react";
function App() {
  
  const [count, setCount]=useState(0);

  function increaseHandler() {
    setCount(count+1);
  }


  function decreaseHandler() {
    setCount(count-1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="container">
      <div className="increamentdecreament">Increament & Decreament</div>

      <div className="box">
        <button onClick={decreaseHandler} className='bdecreaseHandler'>-</button>
        <div>
          {count}
        </div>
        <button onClick={increaseHandler}>
          +
        </button>
      </div>
      <button onClick={resetHandler} className="reset">
        reset
      </button>
    </div>
  );
}

export default App;
