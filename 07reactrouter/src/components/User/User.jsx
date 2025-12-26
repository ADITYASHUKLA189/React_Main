import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
    return (
        <>
            <div className='bg-amber-400 text-4xl text-center align-middle justify-center'>User:{userid}</div>
        </> 
    )
}

export default User
