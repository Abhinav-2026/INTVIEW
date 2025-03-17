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
              <h2 className="text-white">The Conversational AI Interface for Every Need<br />
                <Typewriter
                  words={['Hiring', 'Survey', 'Engagement','Social']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> With INTVIEW
              </h2>
              <p className='desc w-full text-center'>Streamline Communication, Empowers Connections, Drive Decisions</p>


              <div className="scene relative">
                <div className="img-wrap">
                  <img src="/hero_section/main.png" alt="centered img" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/customize.jpg" alt="image-1" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/2.jpg" alt="image-2" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/katie.png" alt="image-3" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/3.jpg" alt="image-4" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/5.jpg" alt="image-5" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/6.jpg" alt="image-6" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/7.jpg" alt="image-7" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/leo.png" alt="image-8" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/9.jpg" alt="image-9" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/Calculate.png" alt="image-10" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/11.png" alt="image-11" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* <section id="reward" className="py-10 lg:py-20">
        <div className="container relative z-10">
          <img className='max-w-[320px] lg:max-w-[450px] mx-auto' src="/img/reward.webp" alt="" />
          <h2 className="ttl text-center text-white max-w-md leading-none mx-auto">
            Best-Selling WordPress Theme in AI Category
          </h2>

        </div>
       
      </section> */}
       <div className="mt-16 relative z-10 lg:mt-20">
          <MarqueeComponent/>
        </div>
      {/* { <section id="categories" className="py-10 wrapper_bg relative lg:py-20">
        <div className="container">
          <div className="grid items-start lg:grid-cols-3 gap-5">
           <ProblemCard title={"Time-Consuming Screening"} problem={"Screening through hundreds of job applications manually is time-consuming and inefficient"} solution={"INTVIEW conducts AI interviews,reducing time spent on assessments"}></ProblemCard>
           <ProblemCard title={"Inefficient Candidate Shortlisting"} problem={"Manually shortlisting candidates is often subjective and slow"} solution={"INTVIEW uses AI to assess and shortlist candidates based on interview performance ,automatically filtering out unqualified candidates for faster hiring "}></ProblemCard>
           <ProblemCard title={"Scheduling Conflicts and Delays"} problem={"Coordinating interviews across time zones or with multiple candidates can lead to delays"} solution={"INTVIEW allows candidates to schedule interviews at their convenience,eliminating conflits and speeding up the process"}></ProblemCard>
           <ProblemCard title={"Difficulty Scaling Hiring Efforts"} problem={"As companies grow,managing the volume of job application becomes overwhelming"} solution={"INTVIEW easily scales with your Hiring needs effortlesly manage hundreds of AI interviews ,perfect for growing companies"}></ProblemCard>
           <ProblemCard title={"Bias in Hiring and Feedback Processes"} problem={"Unintentional human biases can lead to unfair decisions and reduced diversity in hiring"} solution={"INTVIEW eliminates bias from the recruitment and feedback process,ensuring that decisions are data-driven,objective and fair."}></ProblemCard>
           <ProblemCard title={"Slow Hiring Processes"} problem={"Lengthy hiring processes can result in loosing top candidates to faster competitors"} solution={"INTVIEW accelerates the hiring process by automating screening,scheduling and shortlisting to reduce time-to-hire"}></ProblemCard>
          </div>
        </div>
      </section> } */}

      {/*  */}

      {/* <section id="aiPContent" className='pb-10 lg:pb-20'>
        <div className="container">
          <h2 className="ttl text-white text-center max-w-2xl leading-tight mx-auto">
            Make AI-Powered Content On the Go
          </h2>
          <div className="mt-10 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="crd">
              <img src="/img/ai1.jpg" alt="" className="rounded-xl" />
              <p className="text-center text-white font-medium text-lg lg:text-xl mt-4">Midjourney</p>
            </div>
            <div className="crd">
              <img src="/img/ai2.jpg" alt="" className="rounded-xl" />
              <p className="text-center text-white font-medium text-lg lg:text-xl mt-4">Open AI
              </p>
            </div>
            <div className="crd">
              <img src="/img/ai3.jpg" alt="" className="rounded-xl" />
              <p className="text-center text-white font-medium text-lg lg:text-xl mt-4">Stable Diffusion
              </p>
            </div>
            <div className="crd">
              <img src="/img/ai4.jpg" alt="" className="rounded-xl" />
              <p className="text-center text-white font-medium text-lg lg:text-xl mt-4">Realistic Vision
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/*  */}
      {/* <section id="update" className='pb-10 lg:pb-20'>
        <div className="container">
          <h3 className="ttl text-white text-center">
            Free <span>AI Support</span> Update
          </h3>
          <p className="text-center text-lg text-white">
            Save Your Time and Let AI Do Work for You
          </p>

          <div className="grid items-center lg:grid-cols-5 gap-5 mt-10">
            <img className='w-full lg:col-span-2' src="/img/updateimg.png" alt="" />
            <div className='lg:col-span-3'>
              <ul className='bgCts text-md lg:text-xl'>
                <li>
                  It is FREE, we pay for all the queries

                </li>
                <li>
                  Based on OpenAI Assistants

                </li>
                <li>
                  Will make changes FOR YOU like logo, colors, etc.*

                </li>
              </ul>
              <p className='text-xl mt-5'>
                * If AI can't handle your request, human <br /> support will provide assistance.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* video */}
      {/* <section id="video" className="pb-10  lg:pb-20">
        <div className="container max-w-6xl">
          <div className="vidHdr flex gap-1 items-center p-5 bg-[#1e1f31]">
            <div className='p-0.5 bg-[#FF615A] rounded-full '></div>
            <div className='p-0.5 bg-[#FFBE2F] rounded-full '></div>
            <div className='p-0.5 bg-[#28CE42] rounded-full '></div>
          </div>
          <div className="bg-white p-2 lg:p-6 ">
            <iframe className='rounded-lg' width="100%" height="560px" src="https://www.youtube.com/embed/jvGzexyuNs8?si=gw6bwfpTeVJcUIb5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section> */}

      {/*  */}
      

      {/*  */}
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
                1. IT & Software
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                2. Banking & Finance
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                3. Logistics
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                4. HealthCare & Hospitals
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                5. Retail & E-Commerce
              </div>
            </div>
          </Marquee>
          <div className="pt-2.5"></div>
          <Marquee speed={50}
            pauseOnHover={true}
            direction='right'
            autoFill={true}>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              6. Staffing Agencies
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              7. Manufacturing
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              8. Government
            </div>
          </Marquee>
        </div>
      </section>
     
      {/*  */}
      {/* <section id="benifits" className="py-10 lg:py-20">
        <div className="container">
          <p className="text-center uppercase text-sm text-white">
            Easy & Intuitive

          </p>
          <h3 className="ttl text-center text-white">
            Customer Benefits
          </h3>



          <div class="grid mt-10 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
            <div class="grid gap-2 lg:gap-8">
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/xd.webp" className='w-14 lg:w-20 mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  XD Files Included
                </h5>
                <p className="text-sm lg:text-base mt-1">
                  Get source files for free
                </p>
              </div>
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/elementor.webp" className='w-14 lg:w-32 mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  Premium Plugins
                </h5>
                <p className="text-sm lg:text-base mt-1">
                  Bundled with the theme</p>
              </div>

            </div>
            <div class="grid gap-2 lg:gap-8">
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/desktop.webp" className='w-14 lg:w-60  mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  Buy Once, Use Forever

                </h5>
                <p className="text-sm lg:text-base mt-1">
                  Free lifetime updates

                </p>
              </div>
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/box.webp" className='w-14 lg:w-16  mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  All Demo Data

                </h5>
                <p className="text-sm lg:text-base mt-1">
                  Simple guided installation

                </p>
              </div>
            </div>
            <div class="grid gap-2  grid-cols-2 lg:grid-cols-1 lg:gap-8 col-span-2 lg:col-span-1">
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/support.webp" className='w-14 lg:w-28 mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  6 Months of Premium Support
                </h5>
                <p className="text-sm lg:text-base">

                  Get professional tech support

                </p>
              </div>
              <div className='bg-[#13142A] flex flex-col items-center justify-center p-5 text-center'>
                <img src="/img/faq2.webp" className='lg:w-20 w-14 mx-auto' alt="" />
                <h5 className='text-center text-white font-medium lg:text-xl mt-5'>
                  FAQ & Video Tutorials
                </h5>
                <p className="text-sm lg:text-base">
                  All information in one place

                </p>
              </div>
            </div>

          </div>



        </div>
      </section> */}
      {/*  */}
      {/* <section id="brands" className="py-10 lg:py-10">
        <div className="container">
          <div className="flex  flex-wrap justify-center mx-auto gap-3">
            <img src="/img/logo1.svg" className='h-12' alt="" />
            <img src="/img/logo2.svg" className='h-12' alt="" />
            <img src="/img/logo3.svg" className='h-12' alt="" />
            <img src="/img/logo4.svg" className='h-12' alt="" />
            <img src="/img/logo5.svg" className='h-12' alt="" />
          </div>
          <h2 className="ttl mt-8 max-w-5xl leading-tight mx-auto text-center text-white">
            Make AI-Powered Texts & Images with Multilingual OpenAI Prompts
          </h2>
          <img src="/img/banner2.png" alt="" className="w-full mt-5" />
        </div>
      </section> */}
      {/*  */}

     
      {/*  */}
      {/* <section id="aiImage" className="pb-10 lg:pb-20">
        <div className="container">
          <h2 className="ttl text-center text-white">
            Create Premium Images with <br /><span> AI Engine</span> or our <span>AI Helper</span>
          </h2>
          <img src="/img/banner3.png" alt="" className="w-full mx-auto max-w-4xl mt-10" />
        </div>
      </section> */}
      {/*  */}
      <section id="testimonials" className="relative bg-[#0a0b20] py-10 lg:py-20">
  {/* Gradient Overlays */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0b20] via-[#0a0b20] to-transparent pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0b20] via-[#0a0b20] to-transparent pointer-events-none"></div>

  <div className="container mx-auto px-5">
    {/* Section Title */}
    <h2 className="text-center text-white text-3xl lg:text-4xl font-bold">
      Exclusive Sneak Peek: What Users Think
    </h2>

    {/* Testimonials Wrapper */}
    <div className="mt-10 overflow-hidden max-h-[90vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reviewsWrp">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="testiList flex flex-col gap-5">
          {idx === 0 && (
            <>
              <ReviewsCard
                name="Laniece Tovar"
                position="Sales Coordinator"
                review="In a world where time always feels so limited, the idea behind this system really stands out."
              />
              <ReviewsCard
                name="Chandler Sooferan"
                position="Vice President"
                review="I just had a pretty meaningful conversation with Katie. I am impressed at how conversational she was."
              />
            </>
          )}
          {idx === 1 && (
            <>
              <ReviewsCard
                name="Cory West"
                position="Lead Trainer"
                review="Katie sounded like a real person. We had a great conversation and interview."
              />
              <ReviewsCard
                name="Jake Groat"
                position="AVP Operations and Compliance"
                review="This tool is impressive. I’m interested to see how this tool evolves."
              />
            </>
          )}
          {idx === 2 && (
            <>
              <ReviewsCard
                name="Richard Ybarra"
                position="Senior Manager, Marketing Operations & Strategy"
                review="Katie sounds exactly like a real person. This is great for companies with aggressive growth targets."
              />
              <ReviewsCard
                name="Laniece Tovar"
                position="Sales Coordinator"
                review="Katie (the AI) is patient and waits for your response. She also responds quickly."
              />
            </>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Keyframe Animation */}
</section>


      {/*  */}
      {/* <section id="features1" className='pb-10 lg:pb-20'>
        <div className="container">
          <div className="grid items-center lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white uppercase text-sm tex">
                Create unlimited variations
              </p>

              <h3 className="ttl text-white">
                Elementor Page Builder
              </h3>

              <p>
                Enjoy intuitive interface and flexibility of one of the most user-friendly page builders for WordPress. Enhanced with a set of additional elements, it enables you to customize layouts with ease.
              </p>
              <div className="grid mt-5 lg:grid-cols-2 lg:gap-5">
                <ul>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Drag and Drop Editor
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />No Coding Required
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4 lg:mb-0'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />70+ Custom Elements
                  </li>
                </ul>
                <ul>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Visual Builder
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Responsive Editing
                  </li>
                  <li className='flex text-white gap-1 items-center '><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Undo / Redo
                  </li>
                </ul>
              </div>
            </div>
            <img src="/img/fl1.png" alt="" className="w-full" />
          </div>
        </div>
      </section> */}
      {/*  */}
      {/* <section id="features2" className="pb-10 lg:pb-20">
        <div className="container">
          <div className="grid items-center lg:grid-cols-2 gap-10">
            <div className='lg:order-2'>
              <p className="text-white uppercase text-sm tex">
                Create unlimited variations
              </p>

              <h3 className="ttl text-white">
                Premium Plugins

              </h3>

              <p>
                With our theme, you get a bundle of premium plugins to help you create exactly what you want. Get the best experience with less effort.


              </p>
              <a href="" className='btn mt-5'>Contact Now</a>
            </div>
            <img src="/img/fl2.png" alt="" className="w-full lg:order-1" />
          </div>
        </div>
      </section> */}

      {/*  */}
   

      {/* <section className="py-10 lg:py-20">
        <div className="">
          <Marquee speed={120} autoFill={true}>
            <div className='text-[#4E0CB1] text-6xl flex items-center'>

              OpenAI ChatGPT Integration <span className='px-6 pt-8 inline-block text-center'>
                <span className='text-neutral-600'>*</span>
              </span>
            </div>
          </Marquee>
        </div>
      </section> */}
      {/*  */}
      {/* <section id="features3" className='pb-10 lg:pb-20'>
        <div className="container">
          <div className="grid items-center lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white uppercase text-sm tex">
                Create unlimited variations
              </p>

              <h3 className="ttl text-white">
                Elementor Page Builder
              </h3>

              <p>
                Enjoy intuitive interface and flexibility of one of the most user-friendly page builders for WordPress. Enhanced with a set of additional elements, it enables you to customize layouts with ease.
              </p>
              <div className="grid mt-5 lg:grid-cols-2 lg:gap-5">
                <ul>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Drag and Drop Editor
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />No Coding Required
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4 lg:mb-0'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />70+ Custom Elements
                  </li>
                </ul>
                <ul>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Visual Builder
                  </li>
                  <li className='flex text-white gap-1 items-center mb-4'><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Responsive Editing
                  </li>
                  <li className='flex text-white gap-1 items-center '><Icon className='text-[#07A04F]' icon="ri:checkbox-circle-fill" width="24" height="24" />Undo / Redo
                  </li>
                </ul>
              </div>
            </div>
            <img src="/img/fl3.png" alt="" className="w-full" />
          </div>
        </div>
      </section> */}
      {/*  */}
      {/* <section id="features4" className="pb-10 lg:pb-20">
        <div className="container">
          <div className="grid items-center lg:grid-cols-2 gap-10">
            <div className='lg:order-2'>
              <p className="text-white uppercase text-sm tex">
                Create unlimited variations
              </p>

              <h3 className="ttl text-white">
                Premium Plugins

              </h3>

              <p>
                With our theme, you get a bundle of premium plugins to help you create exactly what you want. Get the best experience with less effort.


              </p>
              <a href="" className='btn mt-5'>Contact Now</a>
            </div>
            <img src="/img/fl4.png" alt="" className="w-full lg:order-1" />
          </div>
        </div>
      </section> */}

      {/*  */}
      {/* <section className="py-10 lg:py-20" id='full'>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
            <img src="/img/full.jpg" className='w-full lg:sticky top-0' alt="" />
            <div>
              <p className="text-white uppercase text-sm tex">
                Create unlimited variations
              </p>

              <h3 className="ttl text-white">
                Features Never Stop
              </h3>

              <div className="mt-5 flex flex-col gap-8">
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
                <FeatureCard
                  img={"img/ns1.svg"}
                  des="Full WPML compatibility and RTL support allow you to create a powerful multilanguage website."
                  title="Multilingual Support" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
    </>
  );
}
