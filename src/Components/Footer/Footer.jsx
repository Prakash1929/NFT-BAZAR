import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
   <>
    <footer>
    <div className='footer-container'>
    <div className='row-footer'>
          <div className='col-md-50'>
             <div className='sm-footer-links'>
             <ul>
                <li>
                  <Link>
                  <span
                        className="fa fa-instagram"
                        style={{ fontSize: "26px" }}
                      ></span>
                  </Link>
                </li>
                <li>
                  <Link>
                  <span
                  
                      class="fa fa-twitter"
                      style={{ fontSize: "26px" }}
                    ></span>
                  </Link>
                </li>
                <li>
                  <Link>
                  <span
                  
                      class="fa fa-linkedin"
                      style={{ fontSize: "26px" }}
                    ></span>
                  </Link>
                </li>
              </ul>
             </div>
          </div>
          <div className='col-md-50'>
               <div className='copymark'>
                       <h3> &copy; 2024 NFT PROJECT </h3>
                       
                       
               </div>
          </div>
        </div>
           </div>
      
    </footer>
   </>
  )
}

export default Footer