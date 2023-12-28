import image from '@/constant/Images/image'
import Image from 'next/image'

const Ppc = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.aboutAni} alt="" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">What is <span className='highlight'>Pay Per Click</span> Advertising (PPC)</h2>
            </div>

            <p className='app__text'>
            <strong>Have you seen the famous trilogy Unbreakable, Split, and Glass?</strong><br/><br/>
            Split is the story of a person with 24 different personalities. It is thrilling and horrifying, but in the whole movie, all his personalities represent different traits and parts of his brain.
            </p>

            <button className='primary-btn mt-12 shadow-lg'>Get Started</button>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Ppc