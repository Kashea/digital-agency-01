import image from "@/constant/Images/image";
import Image from "next/image";

const SemService = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img">
            <Image src={image.semService} alt="SEM Marketing" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                Why Choose Our <span className="highlight">SEM Services</span>
              </h2>
            </div>

            <p className="app__text">
            SEO mainly focuses on improving your website&apos;s ranking and the ability to drive visitors through the likes of Google; SMO focuses on driving traffic via social media platforms. Both SEO and SMO operate in different spheres, but they do impact one another. The main priority of both SEO and SMO is to drive traffic to your website. It makes sense that they should work together to bring in as much traffic as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemService;
