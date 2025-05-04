import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-800 p-6 text-3xl m-5 rounded-4xl text-white'>User : {userid} </div>
  )
}

export default User