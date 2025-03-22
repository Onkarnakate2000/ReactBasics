import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [todos, setTodos] = useState([]);  // Initialize state as null to handle loading
  console.log("todos :",todos);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);  // Store the joke response in state
      })
      .catch((error) => {
        console.error("Error fetching the joke:", error);
      });
  }, []);  // Empty dependency array means this will run only once

  return (
    <div>
     {todos.length > 0 ? todos.map(item => <Todo key= {item.id} title = {item.title} description={item.body}/>):"Loding..."}
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

export default UseEffect;
