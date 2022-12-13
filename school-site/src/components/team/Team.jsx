import React from 'react'
import './team.css'
import Back from '../common/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
        <Back title='Activities' />
        <section className='team padding'>
            <div className='container grid'>
                <TeamCard />
            </div>
        </section>
    </>
  )
}

export default Team