
import React, { useState, useEffect } from "react";
function LifeCycle() {
  const [count, setCount] = useState(0);

  // Mounting (runs once)
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating (runs when count changes)
  useEffect(() => {
    console.log("Component Updated - Count:", count);
  }, [count]);

  return (
    <div>
      <h1>React Lifecycle Example</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
export default LifeCycle;
