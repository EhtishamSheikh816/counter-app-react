import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <h1 className="head1">Counting App</h1>
        <span className="countSec">
          <p className="countText">{count}</p>
        </span>
        <div className="btnSec">
          <button
            onClick={() => setCount((sub) => sub - 1)}
            disabled={count <= -99}
          >
            ➖
          </button>
          <button onClick={() => setCount(0)}>🔄</button>
          <button
            onClick={() => setCount((add) => add + 1)}
            disabled={count >= 99}
          >
            ➕
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
