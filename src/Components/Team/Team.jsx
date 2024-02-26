import React from 'react'
import {TeamImg} from '../HeroData/Hero'
import './Team.css'
const Team = () => {

  
  return (
    <>
   <div className='TeamMember'>
     <div className='container'>
     <div className='TeamRow'>
     {TeamImg.map((item)=>{
        return (
          <>
          <div className='TeamCol'>
            <div className='TeamCard'>
              <img src ={item.img} alt={item.alt} id={item.id}/>
              <h3>{item.title}✌</h3>
              <p>{item.about}</p>
            </div>
            </div>
          </>
        )
       })}
     </div>
      
     </div>
   </div>
    </>
  )
}

export default Team