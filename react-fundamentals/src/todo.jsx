
// import React, { useState, memo } from "react";

// function AppTodo() {
//   const [title, setTitle] = useState([
//     {
//         id:1, 
//         title : "Onkar", 
//         description: "the boy of uplai"},
//     {
//         id:2,
//         title : "Aishwarya", 
//         description: "the girl of uplai"
//     }
// ]);
//   <div>
//     {title.map((item)=>{
//         return(<Todo id = {id} itle={item.title} description = {item.description}></Todo>)
//     })}
    
//   </div>

// }

// function Todo({title,description}){
//     return(<div>
//         <h1>{title}</h1>
//         <h5>{description}</h5>
//     </div>)
// }

// export default AppTodo;

import React, { useState } from "react";

function AppTodo() {
  const [title, setTitle] = useState([
    { id: 1, title: "Onkar", description: "the boy of uplai" },
    { id: 2, title: "Aishwarya", description: "the girl of uplai" }
  ]);

  return (
    <div>
      {title.map((item) => {
        return (
          <Todo 
            key={item.id} // Always add a key when rendering a list of components
            title={item.title} 
            description={item.description} 
          />
        );
      })}
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

export default AppTodo;
