import React, { useState } from 'react'
import './FAQ.css'
import FaqData from '../HeroData/FaqData'
import Accordian from './Accordian'

const Faq = () => {
 const [item , setItem]=useState(FaqData)
  
  return (
    <>
      <div className='Faq'>
          <div className='Faqcontainer'>
          {
            item.map((data)=>{
          return (
            <>
              <Accordian key={item.id} {...data}/>
            </>
          )
            })
          }
          </div>
      </div>

    </>
  )
}

export default Faq