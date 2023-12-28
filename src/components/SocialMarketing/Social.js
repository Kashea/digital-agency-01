import image from "@/constant/Images/image"
import Image from "next/image"

const Social = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="my-auto order-2 md:order-1">
        <div className="we-are-content">
          <div className="section-title">
            <h2 className="pb-12 primary-heading">
            SOCIAL <span className="highlight">MARKETING</span>
            </h2>
          </div>

          <p className="app__text">
          Social media marketing requires both strategy and creativity. It&apos;s so important that around 92% of marketers use social media as part of their marketing efforts. In addition to that, 78% of salespeople engaged in social media are outselling their peers who are not. And nearly 40% of small businesses do not use social media. Even more concerning is that an additional 16% are unlikely to use social media for business at all.<br/><br/>

          We create miracles in an instant. We provide top-notch service in exchange for your trust and help you gain the upper hand among competitors. We know how to change the market&apos;s course and drive customers toward you.
          </p>
        </div>
      </div>

      <div className="we-are-img order-1 md:order-2">
      <div className="we-are-banner-img">
        <Image src={image.social} alt="SEM Marketing" />
      </div>
    </div>
    </div>
  </section>
  )
}

export default Social