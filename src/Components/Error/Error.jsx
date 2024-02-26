import React from 'react'
import './Error.css'

import { Link,} from "react-router-dom";

const Error = () => {
  return (
    <>
   <div className='error'>
      <div className='ErrorContainer'>
        <div className='CustomError'>
           <h1>Error404🚫🚫</h1>
           <h3>click here to redirect home page 👉👉 <Link to="/">Home</Link></h3>
        </div>
      </div>
   </div>


    </>
  )
}

export default Error