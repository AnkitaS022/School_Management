import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"


const Hero = () => {
  return (
    <>
        <section className='hero'>
          <div className='container'>
            <div className='row'>
              <Title subtitle= 'WELCOME TO SES' title='Sunrise English School'/>
              <p>We Sunrise English School, would like to accompany your child’s adventure with our education right from beginning! We teachers are always active to make education experience at school more fun and exciting. </p>
              <div className='button'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button >
                  VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='marigin'></div>
    </>
  )
}

export default Hero