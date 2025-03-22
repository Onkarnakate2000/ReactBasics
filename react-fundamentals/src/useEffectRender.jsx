import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectRendering() {
    const [render, setRender] = useState(1); // Correct useState syntax
  
    return (
      <>
        <button onClick={() => setRender(1)}>1</button>
        <button onClick={() => setRender(2)}>2</button>
        <button onClick={() => setRender(3)}>3</button>
        <UseEffectById id={render} /> {/* Pass the selected ID to UseEffectById */}
      </>
    );
  }

function UseEffectById({id}) {
  const [todos, setTodos] = useState([]);  // Initialize state as null to handle loading
  console.log("todos : ",todos);
  useEffect(() => {
    // console.log("url : ",`https://jsonplaceholder.typicode.com/posts/${id}`)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        // console.log(response.data);
        setTodos(response.data);  // Store the joke response in state
      })
      .catch((error) => {
        console.error("Error fetching the joke:", error);
      });
  }, [id]);  // Empty dependency array means this will run only once

  return (
    <div>
     {/* {todos.length > 0 ? todos.map(item => <Todo key= {item.id} title = {item.title} description={item.body}/>):"Loding..."}*/}
     {todos?(<Todo title={todos.title} description={todos.body}/>) : "Loding..."}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default UseEffectRendering;
