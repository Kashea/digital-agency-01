import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Trend = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.ppcTrend} alt="PPC Trend" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">PPC trend to look for the <span className="highlight">best in 2022</span></h2>
            </div>

            <p className="app__text">To represent all the aspects of your product, you need to keep designing it in different ways according to the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.</p>

            <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              WebDev Private Limited is the best and the most administrator for the world of your imagination, blood, sweat, and tears.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Join your hands with us and let&apos;s make a website that opens up a new doorway for customers into a new world designed by you.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              WebDev Private Limited has experts who are experienced and know how and what specifications of a company or a product are to be showcased.
              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Trend