import Image from "next/image"
import image from "../Images/image"

const WhatsApp = () => {
  return (
    <>
    <a className="fixed bottom-1/2 -right-10 py-2 px-3 rounded-lg bg-[#29A71A] text-white z-20 drop-shadow-lg font-semibold flex items-center gap-x-1 -rotate-90" href="https://wa.me/1234567890">
     <Image src={image.whatsapp} height={25} width={25} alt="whats app"/>
     <p>What&apos;s App</p>
    </a>
{/*    <a className="fixed bottom-24 right-4 md:right-8 md:bottom-8 z-20 drop-shadow-lg hidden md:block" href="https://wa.me/7906514988">
    <Image src={image.whatsapp} height={50} width={50} alt="whats app"/>
  </a> */}
    </>
  )
}

export default WhatsApp