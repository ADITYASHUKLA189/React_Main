import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  //  const [data,setdata]=useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ADITYASHUKLA189')
  //   .then(response=> response.json())
  //   .then(data=>{
  //     console.log(data)
  //     setdata(data)
  //   })
  // },[

  // ])
  const data=useLoaderData()
  return (
    <>
      <div className='text-center bg-blue-300 m-4 p-4 text-4xl '>Github followers:{data.followers}
        <img src={data.avatar_url} alt='gitpicture' width={300} />
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/ADITYASHUKLA189')
   return response.json()
}