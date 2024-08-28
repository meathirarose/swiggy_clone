import React, { useState } from 'react'

const User = ({name, location, contact}) => {

  const [count, setCount] = useState(0);

  return (
    <div className='bg-orange-200 w-[450px] p-3 m-3'>
      <div>
        <h1 className='px-2'>Count: {count}</h1>
        <button className="bg-blue-500 text-white py-2 px-2 rounded-l-full rounded-r-full"
          onClick={()=>setCount((prevcount)=>prevcount+1)}>
        Counter
        </button>
      </div>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  )
}

export default User
