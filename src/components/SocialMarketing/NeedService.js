import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const NeedService = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
    <div className="we-are-img">
    <div className="we-are-banner-img">
      <Image src={image.ppcTrend} alt="SEM Marketing" />
    </div>
  </div>
      <div className="my-auto">
        <div className="we-are-content">
          <div className="section-title">
            <h2 className="pb-12 primary-heading">
            NEED OF SOCIAL MARKETING FOR <span className='highlight'>YOUR BRAND</span>
            </h2>
          </div>

          <p className='app__text'>
          Do you want to know the secret behind the magic of marketing and the science of sales? Yes, you heard it right: social media marketing is behind every magic that happens in the world of businesses.
          </p>

          <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900">Build Your Brand&apos;s Voice:</strong> Social media has a benefit over traditional media because it can get your brand in front of people much more quickly and easily. Furthermore, it gets your audience to look at your brand even when they are not thinking about your brand or product.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900"> Conversations About Brand:</strong> We generate gossip among society about your brand and your products, which helps to gain the attention of customers.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900">Social Listening:</strong> We know what your target customers are interested in by monitoring their social conversations around certain topics. This is called social listening and can help you understand what is important to your audience while identifying trends they are following.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
             
              <span><strong className="font-semibold text-gray-900">Responsible Customer Service:</strong> We build meaningful relationships between your company and your customers. Social media allows for immediate interaction and customer feedback. Businesses can also respond to their customers right away.</span>
            </li>
          </ul>
        </div>
      </div>


    </div>
  </section>
  )
}

export default NeedService