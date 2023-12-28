'use client'
import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentMagnifyingGlassIcon, MagnifyingGlassIcon, PresentationChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ServiceInclude = () => {
  const services = [{
    heading: "Account Setup",
    desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
    imgUrl: UserCircleIcon,
    hoverBg: "pink-hover",
    iconColor:"pink-text"
  },
  {
    heading: "Keyword Selection",
    desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
    imgUrl: MagnifyingGlassIcon,
    hoverBg: "paste-hover",
    iconColor:"paste-text"
  },
  {
    heading: "Bid Management",
    desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
    imgUrl: ChartBarIcon,
    hoverBg: "yellow-hover",
    iconColor:"yellow-text"
  },{
    heading: "Analysis & Reporting",
    desc: "Everything was he's help designer, she's something cat that lively. In then to written to period, stand understood.",
    imgUrl: DocumentMagnifyingGlassIcon,
    hoverBg: "purple-hover",
    iconColor:"purple-text"
  }]
  return (
    <section className="py-16 md:py-32">
    <div className="app__container">
        <div className="row">
                <div className="primary-heading pb-12 text-center">
                    <h2>What Do Our <br/><span className='highlight'>SEM Services</span> Include</h2>
                </div>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                services.map((index, key) => {
                    return (
                      <motion.div variants={items} key={key}>
                        <div className={`common-single-card px-6 py-12 ${index.hoverBg}`}>
                        <div className={`common-card-icon mx-auto w-[4.5rem] bg-white p-4 shadow-lg rounded-full ${index.iconColor}`}>
                           <index.imgUrl/>
                        </div>
                        <div className=" text-center">
                            <div className="card-title">
                                <h3 className="text-xl font-bold mt-6 mb-3">{index.heading}</h3>
                            </div>
                            <p className='app__text'>{index.desc}</p>
                        </div>
                    </div>
                    </motion.div>
                    )
                })
            }
        </motion.div>
    </div>
</section>
  )
}

export default ServiceInclude