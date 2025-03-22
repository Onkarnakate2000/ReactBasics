import { useState } from 'react'
import './App.css'

function App() {
 
  return (
    <>
     <HeaderWithButton/>
     <Header title = "My name is raman"/>
     <Header title = "My name is ranam"></Header>
    </>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is harkirat")
  function titleChanger(){
    setTitle(`My name is ${Math.random()}`)
  }

  return(<>
      <button onClick={titleChanger}>you can change my name</button>
      <Header title = {title}/>
  </>)
}

function Header(props){
  return(<>
      <p>{props.title}</p>
  </>)
}

export default App
