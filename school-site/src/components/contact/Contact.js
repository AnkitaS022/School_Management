import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = ' https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d937.923583370592!2d75.35848288040202!3d19.895124920558796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670833136349!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade '
 return (
    <>
        <Back title='Contact Us'/>
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe title='myFrame' src={map}></iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>SUNRISE ENGLISH SCHOOL</p>

                    <div className='items grid2'>
                        <div className='box'>
                            <h4>ADDRESS:</h4>
                            <p>Plot No-37, Oppo. Saptapdi Mangal Karyalaya, N-8, Cidco, Aurangabad</p>
                        </div>
                        <div className='box'>
                            <h4>Email:</h4>
                            <p>sespricipal@gmail.com</p>
                        </div>
                        <div className='box'>
                            <h4>Phone:</h4>
                            <p>7895468923</p>
                        </div>
                    </div>
                    <form action=''>
                        <div className='flexSB'>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <input type='email' placeholder='Subject'/>
                        <textarea cols='30' rows='10'>
                            Create a message here.....
                        </textarea>
                        <button className='primary-btn'>SEND MESSAGE</button>
                    </form>
                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact