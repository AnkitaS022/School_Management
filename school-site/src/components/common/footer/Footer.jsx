import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <section className='newletter'>
        <div className='container flexSB'>
            <div className='left row'>
                <h1>Contact us-</h1>
                <span>Feel free to reach us for your questions.</span>
                
            </div>
            <div className='right now'>
                <input type='text' placeholder='Enter email address' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>

    <footer>
        <div className='container padding'>
            <div className='box logo'>
               <h1>SES</h1>
                <span>SUNRISE ENGLISH SCHOOL</span>
                
            </div>
            <div className='box link'>
           <span> © 2022 Dr. Shikshan Prasarak Mandal Org. All rights reserved.</span>
                
            </div>
           
        </div>
    </footer>
    </>
  )
}

export default Footer