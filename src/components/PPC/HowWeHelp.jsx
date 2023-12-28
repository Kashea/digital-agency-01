import image from "@/constant/Images/image"
import Image from "next/image"

const HowWeHelp = ({name}) => {
    const ppc = [{
        heading: "PPC Strategy",
        desc: "Your product which you sell on your website should also have a fantastic personality which can be changed and reviewed with time.",
        imgUrl: image.optimization,
        bgColor: "svg-gray"
    },{
        heading: "PPC Rankings",
        desc: "The design represents the personality, aims and feature of you company and its products.",
        imgUrl: image.internet,
        bgColor: "svg-orange"
    },{
        heading: "PPC Optimization",
        desc: "The maintenance of the same displays regular and consistent efforts, dedication towards ones products and self check ins.",
        imgUrl: image.rocket,
        bgColor: "svg-orange"
    },]
  return (
    <section className="py-16 md:py-32 bg-slate-50">
    <div className="app__container">
        <div className="mx-auto mb-12">
                 <div className="degital-marketing-heading text-center">
                     <div className="section-sub-title pb-4">
                         <h4 className="primary-heading">WHAT WE DO</h4>
                     </div>
                     <div>
                         <h2>How We Help Your {name}</h2>
                     </div>
                 </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {
            ppc.map((i,k) => {
                return(
                    <div className="service-card-five text-center" key={k}>
                    <div className="w-[5rem] mb-4 mx-auto svg-orange">
                        <Image src={i.imgUrl} alt="ppc strategy"/>
                    </div>
                    <div className="card-title">
                        <h3 className="pb-6 text-xl font-semibold">{i.heading}</h3>
                    </div>
                    <p>{i.desc}</p>
                </div>
                )
            })
         }

         </div>
    </div>
</section>
  )
}

export default HowWeHelp