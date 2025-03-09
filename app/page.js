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
              <h2 className="text-white">Transform Interviews with Conversational AI<br />
                <Typewriter
                  words={['Streamline Interviews', 'Shortlist Faster', 'Reduce bias']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> With INTVIEW
              </h2>
              <p className='desc'>Let AI ask the questions!</p>

              <div className="scene relative">
                <div className="img-wrap">
                  <img src="/img/centered.webp" alt="centered img" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/customize.png" alt="image-1" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/2.png" alt="image-2" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/katie.png" alt="image-3" />
                </div>
                <div className="img-wrap">
                  <img src="/img/4.webp" alt="image-4" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/5.jpg" alt="image-5" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/6.png" alt="image-6" />
                </div>
                <div className="img-wrap">
                  <img src="/img/7.webp" alt="image-7" />
                </div>
                <div className="img-wrap">
                  <img src="/hero_section/leo.png" alt="image-8" />
                </div>
                <div className="img-wrap">
                  <img src="/img/9.webp" alt="image-9" />
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

      <section id='whatsNew' className='py-10 z-20 relative bg-[#0A0B20] '>
        <div className="container">
          {/* <h3 className="subttl text-white text-center">
            HUGE UPDATE
          </h3> */}
          <h2 className='ttl text-white text-center'>
            Unique Benefits of INTVIEW
          </h2>
          <div className="grid grid-cols-2 gap-2  lg:gap-10 mt-10 lg:grid-cols-3">
            <div>
              <img src="/benefits/new1.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new2.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new3.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new4.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new6.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new0.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new7.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new8.jpg" alt="" className="w-full rounded-xl" />
            </div>
            <div>
              <img src="/benefits/new9.jpg" alt="" className="w-full rounded-xl" />
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
      <section id="cts" className='pb-10 lg:pb-20 mt-20'>
        <div className="container">
          <div className="ttl text-center font-bold text-white leading-tight">
            Your Complete Solution for  <br /><span >End-to-End Interviewing Needs</span>
          </div>
          <div className="grid mt-10 lg:grid-cols-3 gap-8">
            {/* <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
              <img className='w-12 mx-auto mb-5' src="\needs\Hiring.jpg" alt="" />
              <h3 className='text-2xl text-center'>Hiring Interviews</h3>
              <p>Assess candidates for role fit and company culture</p>
              <p><span>Focus:</span> Skills,experience,qualifications and cultural fit.</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-[#DAE8F1]">
            <img className='w-12 mx-auto mb-5' src="\needs\Exit.jpg" alt="" />
              <h3 className='text-2xl text-center'>Exit Interviews</h3>
              <p>Gather feedback from departing employees to understand reasons and improve processes</p>
              <p><span>Focus:</span> Employee satisfaction,reasons for leaving and potential improvements in company policies and culture</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Engagement.jpg" alt="" />
              <h3 className='text-2xl text-center'>Engagement Survey</h3>
              <p>Gauge employee satisfaction,commitment and motivation</p>
              <p><span>Focus:</span>Work environment,employee survey,job satisfaction,work-life balance,and career development.</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Performance.jpg" alt="" />
              <h3 className='text-2xl text-center'>Performance Interviews</h3>
              <p>Evaluate performance and provide feedback for growth</p>
              <p><span>Focus:</span>Job performance,goal achievements,areas for improvement and career development</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Promotion.jpg" alt="" />
              <h3 className='text-2xl text-center'>Promotion Interviews</h3>
              <p>Assess readiness for internal promotions and higher roles.</p>
              <p><span>Focus:</span>Leadership potential,readiness for increased responsibility and alignment with company values and goals.</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Development.jpg" alt="" />
              <h3 className='text-2xl text-center'>Development Interviews</h3>
              <p>Discuss career goals,skill development and future roles</p>
              <p><span>Focus:</span>Carrer development,skill-building,training needs and succession planning</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Grievance.jpg" alt="" />
              <h3 className='text-2xl text-center'>Grievance Interviews</h3>
              <p>Address issues between employees or with management</p>
              <p><span>Focus:</span>Resolving workplace disputes,improving communication and ensuring a healthy work environment.</p>
            </Link>
            <Link href="/" className="crd pt-10 pb-5 px-10 text-center bg-white">
            <img className='w-12 mx-auto mb-5' src="\needs\Health.jpg" alt="" />
              <h3 className='text-2xl text-center'>Health and Well-being Interviews</h3>
              <p>Check on an employee's physical and mental health.</p>
              <p><span>Focus:</span>Well being ,work life balance ,stress management,and potential support needed</p>
            </Link> */}
            <SolutionCard img={"/needs/Hiring.jpg"} title={"Hiring Interviews"} desc={"Assess candidates for role fit and company culture"} focus={"Skills, experience, qualifications, and cultural fit"}></SolutionCard>
            <SolutionCard img={"/needs/Exit.jpg"} title={"Exit Interviews"} desc={"Gather feedback from departing employees to understand reasons and improve processes"} focus={"Employee satisfaction, reasons for leaving and potenitial improvements in company policies and culture"}></SolutionCard>
            <SolutionCard img={"/needs/Engagement.jpg"} title={"Engagement Survey"} desc={"Gauge employee satisfaction, commitment and motivation"} focus={"Work environment, employee survey, job satisfaction, work-life balance, and career development"}></SolutionCard>
            <SolutionCard img={"/needs/Performance.jpg"} title={"Performance Interviews"} desc={"Evaluate performane and provide feedback for growth"} focus={"Job performance, goal achievements, areas for improvement, and career development"}></SolutionCard>
            <SolutionCard img={"/needs/Promotion.jpg"} title={"Promotion Interviews"} desc={"Assess readiness for internal promotions and higher roles"} focus={"Leadership potential, readiness for increased responsibilty, and alignment with company values and goals"}></SolutionCard>
            <SolutionCard img={"/needs/Development.jpg"} title={"Development Interviews"} desc={"Discuss career goals,skill development and future roles"} focus={"Career development, skill building, training needs, and succession planning"}></SolutionCard>
            <SolutionCard img={"/needs/Grievance.jpg"} title={"Grievance Interviews"} desc={"Address issues between employees or with management"} focus={"Resolving workplace disputes, improving communications, and ensuring a healthy work environment"}></SolutionCard>
            <SolutionCard img={"/needs/Health.jpg"} title={"Health and Well-being Interviews"} desc={"Check on an employee's physical and mental health"} focus={"Well being, work-life balance, stress management, and potential support needed"}></SolutionCard>
          </div>
        </div>
      </section>

      {/*  */}
      <section id="features" className="py-10 max-w-screen overflow-hidden lg:py-20">
        <div className="container">
          <h2 className="ttl text-center text-[#5890E7]">
            What are the benefits of using INTVIEW?
          </h2>
        </div>
        <div className="mt-20 mb-10 -rotate-3">
          <Marquee speed={50}

            pauseOnHover={true}
            autoFill={true}>
            <div className='marqueeTxt flex items-center'>

              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                1. Simplify the Interview Workflow
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                2. Accelerate and Optimize Hiring
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                3. Eliminate Scheduling Conflicts
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                4. Effortlesly Scale Your Hiring Effects.
              </div>
              <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
                5. Make Data-Driven,Unbiased Decisions
              </div>
            </div>
          </Marquee>
          <div className="pt-2.5"></div>
          <Marquee speed={50}
            pauseOnHover={true}
            direction='right'
            autoFill={true}>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              6. Prevent Recuiter Burnout
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              7. Quickly Secure Top Talent
            </div>
            <div className="rounded-2xl bg-[#24313E] hover:bg-[#5890E7] p-3 mx-1 font-Plus_Jakarta_Sans text-white font-semibold text-lg">
              8. Conduct Hundreds of Interviews at Once
            </div>
          </Marquee>
        </div>
      </section>
      <section id="textGenerator" className="mb-10 relative lg:mb-20">
        <div className="container relative z-10">
          <h3 className="ttl text-center text-white">
            Hiring Challenges ? INTVIEW Has the Solution 
          </h3>
          <p className="text-center mb-8">
            Leverage Conversational AI to eliminate bias,reduce hiring time and uncover the right talent with adaptive interviews.
          </p>
          {/* <div className="grid max-w-6xl mt-10 lg:-translate-x-[60px] mx-auto items-center lg:grid-cols-7 gap-5 lg:gap-0"> */}
            {/* <div className='space-y-5 relative  z-10 lg:translate-x-[50%]'>
              <div className="bg-white text-center p-5 rounded-xl">
                <img src="/img/tg1.svg" className='w-9 mx-auto' alt="" />
                <h6 className='mt-3 text-lg'>
                  Summarization
                </h6>
              </div>
              <div className="bg-white text-center p-5 rounded-xl">
                <img src="/img/tg2.svg" className='w-9 mx-auto' alt="" />
                <h6 className='mt-3 text-lg'>
                  Translation
                </h6>
              </div>
              <div className="bg-white text-center p-5 rounded-xl">
                <img src="/img/tg3.svg" className='w-9 mx-auto' alt="" />
                <h6 className='mt-3 text-lg'>
                  Spell check
                </h6>
              </div>
            </div> */}
            <div className="lg:col-span-6">
              <img src="/hero_section/Hiring.png" className='w-full rounded-xl' alt="" />
            </div>
          </div>
        {/* </div> */}
        <video src="/videos/video-bg2.mp4" autoPlay muted loop className="videoBg"></video>
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
      <section id="testimonials" className="pb-10 lg:pb-20">
        <div className="container">
          <h2 className="ttl text-center text-white">
            Why INTVIEW is a Game-Changer
          </h2>
          <p className="mt-1 text-center">
           Exclusive Sneak Peek:What Users Think
          </p>
          <div className="mt-10 overflow-hidden h-[500px] lg:h-[800px] grid-cols-2 grid lg:grid-cols-3 gap-5 reviewsWrp">

            <div className='testiList flex flex-col gap-5'>

              <ReviewsCard
              name="Laniece Tovar" position="Sales Coordinator" review="In a world where time always feels
so limited, the idea behind this
system really stands out. The
thought of having technology
handle the time-consuming work
and support smarter, more
informed decisions is incredible.
This product is absolutely genius."></ReviewsCard>

<ReviewsCard
              name="Chandler Sooferan" position="Vice President" review="I just had a pretty meaningful
conversation with Katie. I am
impressed at how conversational
she was."></ReviewsCard>

              {/* <ReviewsCard rating={3} img="/img/customer-3.png" name="juicypen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi magnam repudiandae soluta quo earum quas explicabo placeat beatae aperiam." title={"Design Quality"} /> */}

            </div>
            <div className='testiList flex flex-col gap-5'>

            <ReviewsCard
              name="Cory West" position="Lead Trainer" review="Katie sounded like a real person.
We had a great conversation and
interview. I’m impressed with how
well the AI can respond based on
the answers you provide."></ReviewsCard>

            <ReviewsCard
              name="Jake Groat" position="AVP Operations and Compliance" review="This tool is impressive. I’m
interested to see how this tool
evolves."></ReviewsCard>

              {/* <ReviewsCard rating={3} img="/img/customer-1.png" name="juicypen" des="Lorem ipsum dolor sit amet consectetur." title={"Design Quality"} /> */}

            </div>
            <div className='testiList flex flex-col gap-5'>

             <ReviewsCard
              name="Richard Ybarra" position="Senior Manager,

Marketing Operations & Strategy" review="Katie sounds exactly like a real
              person. This is great for companies
              who don’t have a lot to invest in
              recruiters but have aggressive
              growth targets."></ReviewsCard>

<ReviewsCard
              name="Laniece Tovar" position="Sales Coordinator" review="Katie (the AI) is patient and waits
for your response to questions. She
also responds pretty quickly after
you’re done providing your
answers."></ReviewsCard>
              {/* <ReviewsCard rating={3} img="/img/customer-3.png" name="juicypen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi magnam repudiandae soluta quo earum quas explicabo placeat beatae aperiam." title={"Design Quality"} /> */}

            </div>
            {/* <div className='testiList flex flex-col gap-5'>

              <ReviewsCard rating={5} img="/img/customer-1.webp" name="juicypen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi magnam repudiandae soluta quo earum quas explicabo placeat beatae aperiam." title={"Design Quality"} />

              <ReviewsCard rating={4} img="/img/customer-2.webp" name="juicypen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi magnam repudiandae soluta quo earum quas explicabo placeat beatae aperiam." title={"Design Quality"} />

              <ReviewsCard rating={3} img="/img/customer-3.png" name="juicypen" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi magnam repudiandae soluta quo earum quas explicabo placeat beatae aperiam." title={"Design Quality"} />

            </div> */}
          </div>
        </div>
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
      <section id="collections" className="py-10 bg-[#070818] lg:py-20">
        <div className="container">
          <p className="text-white text-sm font-semibold uppercase">
            {/* Customize everything */}
          </p>
          <div className="grid pb-10 lg:grid-cols-5 gap-5">

            <div className="lg:col-span-3">

              <h2 className="ttl text-white">
                Industries Served
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p>
                {/* Customize your theme to a great extent and make it truly your own! Change colors, typography and many other visual aspects. */}
              </p>
            </div>
          </div>
          <ColectionsSlider
            images={[
             "/slide-7/HrConsulting.jpg",
             "/slide-7/banking.jpg",
             "/slide-7/Logistics.jpg",
             "/slide-7/health-0.jpg",
             "/slide-7/Manufacturing.jpg",
             "/slide-7/retail.jpg",
             "/slide-7/it.jpg"
            ]}
          />
        </div>
      </section>

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
