import React, {useState} from 'react'
// import Image from  '<img src="/error.png" alt="Error" />'
const Error = () => {
  return (
    <div className='error-image'>
       <img src="/error.png" alt="" />
        <h1 className='nothing'>
          We have nothing to do <br />
        </h1>
        <p>Press + to add</p>
    </div>
  )
}

export default Error