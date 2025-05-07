import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Conponents/Login'
import Profile from './Conponents/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
    <h1
    className='bg-green-700 p-7 rounded-3xl'
    >
      Ranjeet Kumar Ray
    </h1>

    <Login />

    <Profile />
  </UserContextProvider>
  )
}

export default App
