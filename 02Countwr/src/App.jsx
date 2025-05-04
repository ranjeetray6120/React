import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'







function App() {
  const [count, setCount] = useState(0)

  // let counter = 15;

  let [counter , setConter] = useState(15);
const addvalue = () => {
  if(counter <= 50){
    setConter(counter => counter + 1)
    setConter(counter => counter +  1)
    setConter(counter => counter + 1)
    setConter(counter => counter + 1)
  }
}

const removeValue = () =>{
  if(counter >= 1)
  setConter(counter -1)
}

  return (
    <>
     <h1>Ranjeet Kumar Ray {counter}</h1>
     <button onClick={addvalue}>add value {counter}</button>
     <br/>
     <button
     onClick = {removeValue}
     >remove value {counter}</button>
    </>
  )
}

export default App
