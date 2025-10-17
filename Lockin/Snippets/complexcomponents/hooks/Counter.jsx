import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(timer);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
