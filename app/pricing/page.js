import Faq from '@/components/Faq'
import { Icon } from '@iconify/react'
import React from 'react'
import Marquee from 'react-fast-marquee'

function page() {
  return (
    <>
   
      <section id='pricingHero' className='py-10 lg:py-20 '>
        <div className="container">
          <h1 className='text-center text-white text-4xl lg:text-6xl'>Pricing</h1>

        </div>
      </section>
      <section id='pricingPlans' className='pb-10 lg:pb-20 -mt-10 lg:-mt-20 relative z-10'>
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-10">
            <div className="crd p-8 lg:p-10">
              <h3>
                Gold
              </h3>
              <h2>
                $1.25
              </h2>
              <p className="duration">
                Per Minute
              </p>
              <p className='des'>
               Interviews under 15 min
              </p>
              <a href="#" className="btn !bg-[#5ec900]  !border-[#5ec900] text-white">
                Get Now
              </a>
            </div>
            <div className="crd p-8 lg:p-10">
              <h3>
                Silver
              </h3>
              <h2>
                $1.10
              </h2>
              <p className="duration">
                Per Minute
              </p>
              <p className='des'>
                Interviews under 30 min
              </p>
              <a href="#" className="btn !bg-[#5ec900]  !border-[#5ec900] text-white">
                Get Now
              </a>
            </div>
            <div className="crd p-8 lg:p-10">
              <h3>
                Platinum
              </h3>
              <h2>
                $1
              </h2>
              <p className="duration">
                Per Minute
              </p>
              <p className='des'>
               Interviews under 1 hour
              </p>
              <a href="#" className="btn !bg-[#5ec900]  !border-[#5ec900] text-white">
                Get Now
              </a>
            </div>
            <div className="crd p-8 lg:p-10">
              <h3>
                Enterprise
              </h3>
              {/* <h2>
                $1.25
              </h2> */}
              {/* <p className="duration">
                Per Minute
              </p> */}
              <p className='text-5xl mt-4 mb-10'>
               Talk to us
              </p>
              <a href="#" className="btn !bg-[#5ec900]  !border-[#5ec900] text-white">
                Get Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="pricingFeatures" className="py-10 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-5">
            <div>
              <h2 className='ttl !text-white'>
                Features
              </h2>
              <ul>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Adipiscing eli sed eiusmod
                </li>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Tempor incididunt

                </li>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Labore et dolore magna

                </li>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Adipiscing eli sed eiusmod

                </li>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Tempor incididunt

                </li>
                <li>
                  <Icon icon="uis:check" width="24" height="24" />
                  Labore et dolore magna

                </li>
              </ul>
            </div>
            <div className='lg:col-span-2'>
              <h4 className='text-xl lg:text-2xl mb-2 text-white'>
                Choose your plan

              </h4>
              <p className='lg:text-lg'>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut sed lorem diam nonumy odit aut fugit, sed quia
              </p>
              <h4 className="mt-5 lg:mt-10 text-xl lg:text-2xl mb-2 text-white">
                About
              </h4>
              <p className='lg:text-lg'>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut sed lorem diam nonumy odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut sed lorem diam nonumy odit aut fugit, sed quia


              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-10 lg:py-20'>
        <Marquee speed={120} autoFill={true}>
          <div className='text-indigo-600 font-bold text-6xl lg:text-9xl flex items-center'>

            AI
            <span className='px-4 inline-block text-center'>
              .
            </span>
            Gaming
          </div>
        </Marquee>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h3 className='ttl !text-white'>
                FAQ
              </h3>
            </div>
            <div className="lg:col-span-3">
              <Faq items={[
                {
                  title: 'What is a FAQ?',
                  content: 'A FAQ is a list of frequently asked questions and answers on a particular topic.'
                },
                {
                  title: 'What is a FAQ?',
                  content: 'A FAQ is a list of frequently asked questions and answers on a particular topic.'
                },
                {
                  title: 'What is a FAQ?',
                  content: 'A FAQ is a list of frequently asked questions and answers on a particular topic.'
                },
              ]} />
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default page