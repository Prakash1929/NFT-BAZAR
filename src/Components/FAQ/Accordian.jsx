import React, { useState } from 'react'
import './FAQ.css'


const Accordian = ({que , ans}) => {
    const [show , setShow]=useState()
  return (
    <>
       <div className='accordian'>
       <div className='container'>
          <div className='AccordianQuestion'>
          
              <h3 onClick={()=> setShow(!show)}>{show?"🔼 ":"🔽"}  {que}</h3>
          </div>
         {
            show &&  <p className='answer'>{ans}</p>
         }
          
       </div>

       </div>
    </>
  )
}

export default Accordian