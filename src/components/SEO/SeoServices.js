'use client'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

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

const SeoServices = () => {
  const services = [{
    heading: "Good Quality Optimized",
    desc: "Each page on the website needs to have unique, optimized copy that focuses on specific keywords in order to rank highly on Google. The copy needs to be well-written and easy to understand.",
    imgUrl: SpeakerWaveIcon,
    hoverBg: "pink-hover",
    iconColor:"pink-text"
  },
  {
    heading: "Link Building",
    desc: "Link building is a part of SEO that aims to gain links to your website from reputable sources. The aim of link building is, therefore, to gain high-quality links in order to improve the ranking position of the website.",
    imgUrl: ShareIcon,
    hoverBg: "paste-hover",
    iconColor:"paste-text"
  },
  {
    heading: "Site Optimization",
    desc: "Surprised we did I village now, a just on five just through I were the one that finds poetic.",
    imgUrl: WrenchScrewdriverIcon,
    hoverBg: "yellow-hover",
    iconColor:"yellow-text"
  }]

  const benefits = [{
    heading: "Brand Building",
    desc: "SMO helps brands in regularly engaging with their audience on social media. The more the engagement on social media, the users begin to trust and recommend your brand, product or service.",
    imgUrl: CheckBadgeIcon,
    hoverBg: "pink-hover",
    iconColor:"pink-text"
  },
  {
    heading: "Strong Online Presence",
    desc: "With the large percentage of online activity happening on social media platforms, social media usage is always high. A strong smo strategy is hence extremely important for building and maintaining a solid online presence.",
    imgUrl: PresentationChartLineIcon,
    hoverBg: "paste-hover",
    iconColor:"paste-text"
  },
  {
    heading: "Improve Search Engine Ranking",
    desc: "Your social media presence complements your seo efforts. Websites that have a high number of back-links from high-quality sources are more likely to be viewed by search engines.",
    imgUrl: MagnifyingGlassIcon,
    hoverBg: "yellow-hover",
    iconColor:"yellow-text"
  }]
  return (
    <section className="py-16 md:py-32 bg-slate-50">
    <div className="app__container">
        <div className="row">
                <div className="pb-12 text-center">
                    <h2 className='primary-heading mb-4'>SEO Service <br/>We Provide
                    <span className='highlight'> Special For You</span></h2>
                    <p className='app__text'>Keyword Planning: A clear keyword strategy means pages will not compete.<br/>
                    With one another for the same search terms. Each page will have a specific purpose.</p>
                </div>
                
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                services.map((index, key) => {
                    return (
                      <motion.div variants={items} key={key}>
                        <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
                        <div className={`common-card-icon mx-auto ${index.iconColor}`}>
                           <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white'/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
                            <p className='text-base app__text'>{index.desc}</p>
                        </div>
                    </div>
                    </motion.div>
                    )
                })
            }
        </motion.div>
        <div className="text-3xl font-extrabold pt-12 pb-8 text-center">
        <h2>Benefits</h2>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          benefits.map((index, key) => {
              return (
                <motion.div variants={items} key={key}>
                  <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
                  <div className={`common-card-icon mx-auto ${index.iconColor}`}>
                     <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white'/>
                  </div>
                  <div className="text-center">
                      <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
                      <p className='text-base app__text'>{index.desc}</p>
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

export default SeoServices