import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => 
  // {
  //   fetch('https://api.github.com/users/ranjeetray6120')
  //   .then(reponse => reponse.json())
  //   .then(data => {
  //       console.log(data);
  //       setData(data);
  //     }
  //   )
  
  // },[])
  return (
    <div>
        <h1 className='bg-gray-600 shadow-2xl text-3xl rounded-2xl text-center p-10 m-10 text-yellow-50'>
          Public Response : {data.public_repos} 
          <img 
          className='rounded-full ml-30'
          src={data.avatar_url} alt="" />
          
          </h1>
          
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ranjeetray6120')
  return response.json();
}