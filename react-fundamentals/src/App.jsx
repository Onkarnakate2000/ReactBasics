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


import React,{useState,useEffect} from "react";

function UnderstandRerender(){

  const [changeName,SetChangeName] = useState("My name is harkirat");


  function ChangeNameHandler(){
      SetChangeName(`My name is ${Math.random()}`)
  }
  return(<>
  <br/><br/><br /><br />
    <button onClick={ChangeNameHandler}>Click me to change the title</button>
    <br/><br />
    <ChangeText changeName={changeName}></ChangeText>
    <ChangeText changeName="My name is kiran"/>
  </>)
}

function ChangeText(props){
  return(<>
    <p>{props.changeName}</p>
  </>)
}

export default UnderstandRerender;