import React from 'react'
import Title from '../common/title/Title'
import AWrapper from './AWrapper'
import "./about.css"
import { homeAbout } from '../../dummydata'

const AboutCard = () => {
  return (
    <>
        <section className='aboutHome'>
            <div className='container flexSB'>
                <div className='left row'>
                    <img src='./images/img3.webp' alt=''/>
                </div>
                <div className='right row'>
                    <Title subtitle='LEARN ANYTHING' title='Larning Methodology'/>

                    <div className='items'>
                        {homeAbout.map((val)=>(
                            <div className='item flexSB'>
                            <div className='img'>
                                <img src={val.cover} alt=''/>
                            </div>
                            <div className='text'>
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                                </div>
                                </div>
                        ))}
                    </div>
                    
                 </div>
    
            </div>
                 
         </section>

    <AWrapper />

    </>
  )
}

export default AboutCard