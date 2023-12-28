import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.banner} alt="" />
          </div>
          <div className="we-are-animation">
            <Image src={image.like} alt="" className="h2-like" />
            <Image src={image.heart} alt="" className="h2-heart" />
            <Image src={image.message} alt="" className="h2-message" />
            <Image src={image.square} alt="" className="h2-square" />
            <Image src={image.circle} alt="" className="moving-circle" />
            <Image src={image.circle2} alt="" className="moving-circle-right" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">
                  About <span className="highlight">Us</span>
                </h2>
              </div>

              <p className="app__text pb-12">
                Our experts listen to all the ideas you have and then create new
                strategies with their innovative brains, and of course, the team
                shapes the ideas into reality. With 8 years of web and app
                development skills, we have worked on 100+ Internet development
                projects.<br/>We are a part of BroLabs Innovation Pvt. Ltd., and we
                are 38 people working together as a team with just one goal: to
                take your business to a new level. We are the bridge between you
                and the customers. We create long-term relationships and love.
                We paint the roses in your picture. Here! At WebDev Private
                Limited Why don&apos;t you visit us and let&apos;s make a
                beautiful India together?
              </p>
              <div>
                <a href="#">
                  <button className="primary-btn shadow-lg">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
