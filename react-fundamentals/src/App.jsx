// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(true); // Track if the timer is running
//   const [timer, setTimer] = useState(null); // Store the timer ID to clear it

//   useEffect(() => {
//     // Start the timer only if it's running
//     if (isRunning) {
//       const timerId = setInterval(() => {
//         setCount((prevCount) => prevCount + 1); // Increment count every second
//       }, 1000);
      
//       // Store the timer ID in state
//       setTimer(timerId);

//       // Cleanup function to clear the interval when the component unmounts or when isRunning changes
//       return () => clearInterval(timerId);
//     }
//   }, [isRunning]); // Re-run the effect if `isRunning` state changes

//   // Function to stop the timer
//   const stopTimer = () => {
//     setIsRunning(false); // Set isRunning to false to stop the interval
//     if (timer) {
//       clearInterval(timer); // Clear the interval manually
//     }
//   };

//  const startTimer = () => {
//     setIsRunning(true); // Set isRunning to false to stop the interval
//   };

//   return (
//     <div>
//       <h1>Timer: {count}s</h1>
//       <button onClick={stopTimer}>Stop Timer</button>
//         <button onClick={startTimer}>Start Timer</button>
//     </div>
//   );
// }

// export default Timer;
import React, { useState, memo } from "react";

function UnderstandRerender() {
  const [changeName, setChangeName] = useState("My name is Harkirat");

  function ChangeNameHandler() {
    setChangeName(`My name is ${Math.random()}`);
  }

  return (
    <>
      <br />
      <br />
      <button onClick={ChangeNameHandler}>Click me to change the title</button>
      <br />
      <br />

      {/* Only the dynamic ChangeText component re-renders */}
      <DynamicChangeText changeName={changeName} />

      {/* Static ChangeText components remain the same */}
      <StaticChangeText />
      <StaticChangeText />
      <StaticChangeText />
      <StaticChangeText />
      <StaticChangeText />
      <StaticChangeText />
      <StaticChangeText />
    </>
  );
}

// Component for dynamic change, will rerender only when changeName changes
const DynamicChangeText = memo(({ changeName }) => {
  console.log("Dynamic ChangeText re-rendered");
  return <div>{changeName}</div>;
});

// Component for static change, will not re-render when props don't change
const StaticChangeText = memo(() => {
  console.log("Static ChangeText re-rendered");
  return <div>My name is Kiran</div>;
});

export default UnderstandRerender;

