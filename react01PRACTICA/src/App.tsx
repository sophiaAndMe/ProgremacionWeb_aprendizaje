import './App.css'
import HolaMundo from "./HolaMundo.tsx";
import HolaMundo2 from "./HolaMundo2.tsx";
import HolaMundo3, {type Hello3Props} from "./HolaMundo3.tsx";
import {useState} from "react";
import Contador from "./Contador.tsx";

function App() {

    const [text, setText] = useState("");

    const handleClick = () => {

      if(text === "React"){
        setText("TypeScript")
      }else{
        setText("React")
      }
    }




  const handleAlert = () => {
    alert(`Lo haz lograo Jhon `)
  }

  const props : Hello3Props = {
      name : "Jhomimi <3",
  }

  return (
    <>
      Hola <span> {text}</span>
      <br/>
      <button onClick={handleClick}>
        Haz click si quieres cambiar el texto</button>
      <br/>
    <button onClick={handleAlert}>
      Haz click para la alerta
    </button>
      <br/>
      <HolaMundo/>
      <br/>
      <HolaMundo2 name={"Jhon"} edad={23}/>
      <br/>
      <HolaMundo3 name={"Odalis"} edad={23}/>
      <HolaMundo3 {...props}/>
      <hr/>
      <Contador/>
    </>
  )
}

export default App
