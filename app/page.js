'use client'
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";
import { Checkbox } from 'antd';
import CategoryCard from '@/components/CategoryCard';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ReviewsCard from '@/components/ReviewsCard';
import ColectionsSlider from '@/components/ColectionsSlider';
import FeatureCard from '@/components/FeatureCard';
import MarqueeComponent from '@/components/Marquee';
import SolutionCard from '@/components/SolutionCard';
import ProblemCard from '@/components/ProblemCard';
import ImageGallery from '@/components/ImageGallery';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [filterCategories, setFilterCategories] = useState(['all'])

  useEffect(() => {
    if (filterCategories.length <= 0) {
      setFilterCategories(['all'])
      return
    }
    if (filterCategories.length > 1) {
      setFilterCategories(filterCategories.filter(filter => filter != "all"))
    }

  }, [filterCategories])
  return (
    <>
      <section id="hero">


        <div className="container">
          <div className="videoWrp pt-16 lg:pt-20 relative">
            <video className="w-full absolute top-0 left-0 rounded-[24px]" src="/videos/video-bg.mp4" autoPlay={true} loop muted></video>
            <div className="text-center z-10 relative">
              <div className="badge ">
                Try It
              </div>
              <h2 className="text-white">The Conversational AI Marketplace for Every Need<br />
                <Typewriter
                  words={['Hiring', 'Survey', 'Engage','Social']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> With INTVIEW
              </h2>
              <p className='desc w-full text-center'>Streamline Communication, Empowers Connections, Drive Decisions</p>

            <ImageGallery/>
            </div>
          </div>
        </div>
      </section>

    
      
       <div className="mt-16 relative z-10 lg:mt-20 container mb-28">
          <MarqueeComponent/>
        </div>
      

    

      <section id="aiPContent" className='pb-10 lg:pb-0'>
        <div className="container">
          <h2 className="ttl text-white text-center max-w-2xl leading-tight mx-auto">
            Discover Diverse Categories
          </h2>
          <div className="mt-10 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="crd">
              <img src="/work/1.png" alt="" className="rounded-xl" />
             
            </div>
            <div className="crd">
              <img src="/work/2.png" alt="" className="rounded-xl" />
              
            </div>
            <div className="crd">
              <img src="/work/3.png" alt="" className="rounded-xl" />
            </div>
            <div className="crd">
              <img src="/work/4.png" alt="" className="rounded-xl" />
             
            </div>
          </div>
        </div>
      </section>

     
      <section id="features" className="py-10 max-w-screen overflow-hidden lg:py-20">
        <div className="container">
          <h2 className="ttl text-center text-[#5890E7]">
            Serving Every Industry
          </h2>
        </div>
        <div className="mt-20 mb-10 -rotate-3">
          <Marquee speed={50}

            pauseOnHover={true}
            autoFill={true}>
            <div className='marqueeTxt flex items-center'>

              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                IT & Software
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                 Banking & Finance
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                 Logistics
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                 HealthCare & Hospitals
              </div>
             
            </div>
          </Marquee>
          <div className="pt-2.5"></div>
          <Marquee speed={50}
            pauseOnHover={true}
            direction='right'
            autoFill={true}>
             <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                Retail & E-Commerce
              </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
               Staffing Agencies
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              Manufacturing
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              Government
            </div>
          </Marquee>
        </div>
      </section>
     
      <div className='container'>
<Testimonials></Testimonials>
</div>



        </>
  );
}
