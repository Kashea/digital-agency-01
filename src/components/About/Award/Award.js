"use client"
import Stats from '@/components/Home/Stats/Stats'
import { ClipboardDocumentListIcon, CodeBracketIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger'

const Award = () => {
  const [countingOn, setCountingOn] = useState(false)
    const stats = [
        { id: 1, name: 'Satisfied customer', value: <CountUp start={0} end={3580} duration={2}/> ,icon:UserGroupIcon},
        { id: 2, name: 'Business owners are happy with us', value: <CountUp start={0} end={3080} duration={2}/>,icon:UserIcon},
        { id: 3, name: 'Expert Instructors', value: <CountUp start={0} end={1587} duration={2}/>,icon:ClipboardDocumentListIcon },
        { id: 4, name: 'Project with web/Apps', value: <CountUp start={0} end={2548} duration={2}/>,icon:CodeBracketIcon },
      ]
  return (
    <section className='bg-slate-50'>
    <div className="app__container py-16 sm:py-32">
      <div className='app__container'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
      <h1 className='primary-heading mb-8'>Award Wining <br/><span className='highlight'>Digital Agency</span> We Are</h1>
      <p className='app__text'>Just the way you need to fill the appropriate colors for different types of sky, like orange for the sunset, pink and yellow for the sunrise, sky blue for a clear day, and dark blue for a stormy one. You get the impact of the painting from the specifics of the paints.</p>
      </div>
      <div className='mt-5 md:mt-0 md:ms-auto my-auto'>
      <ul className='list-image-[url(yes.png)] list-inside app__text'>
      <li>Create Shareable Content</li>
      <li>Make Sharing Content Easy</li>
      <li>Make Sharing Content Easy</li>
      <li>Rewarding Loyal Followers</li>
      </ul>
      </div>
      </div>
      </div>
      <div className="flex items-center flex-col gap-y-12 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollTrigger  onEnter={() => setCountingOn(true)} onExit={() => setCountingOn(false)}>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, k) => {
              return (
                <div key={k} className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5">
                <div className="flex justify-center items-center text-[#ff6a00]">
                    <stat.icon className="h-12 w-12 " aria-hidden="true" />
                </div>
                <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {
                  countingOn && <>{stat.value}</>
                }
                </dd>
                <dt className="text-base leading-7 app__text">{stat.name}</dt>
              </div>
              )
            })}
          </dl>
          </ScrollTrigger>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Award