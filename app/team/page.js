"use client"
import TeamCard from '@/components/TeamCard'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function page() {
  const teams = [
    {
      name: 'Lohith Ravi',
      img: "/team/imagee-12.jpg",
      linkedin: 'https://www.linkedin.com/',
      location:"Seattle,USA",
    },
    {
      name: 'Korey Jones',
      img: "/team/imagee-1.png",
      linkedin: 'https://www.linkedin.com/',
      location:"Los Angeles,USA"
    },
    {
      name: 'Harish Kuppam',
      img: "/team/imagee-11.jpg",
      linkedin: 'https://www.linkedin.com/',
      location:"Bangalore,India"

    },
  ]
  return (
    <>
      <section id="teamHero" className="py-20 relative z-0">


        <div className="container">
          <div className="text-center  z-10 relative">
            <p className='text-white !font-semibold uppercase'>
              Who We Are

            </p>
            <h2 className="text-white text-4xl lg:text-5xl mt-5 leading-tight">We are a team of innovators redefining hiring through Conversational AI. <br />
            INTVIEW <Typewriter
                  words={['streamlines interviews', 'find right talent faster', 'eliminate bias']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> 
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10">
            {teams.map((team, index) => (
              <TeamCard key={index} info={team} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page