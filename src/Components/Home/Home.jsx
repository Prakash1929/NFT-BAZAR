import React from 'react'
import './Home.css'
import {images} from '../HeroData/Hero'


const Home = () => {
 
  
  return (
    <>
      <main>
        <div className='HomeContainer'>
            <div className='HomeBox'>
              <div className='box'>
                  <div className='heading-row'>
                      <div className='heading'>
                        <h1>Discover, collect, and sell extraordinary NFTs</h1>
                      </div>
                      <div className='heroslider'>
                         <img src={images[0].img} alt="Home"/>
                       
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Home