import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const Breadcrumbs = ({name}) => {
  return (
    <div className="bg-slate-50 relative overflow-hidden">
    <div className="py-16 mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between">
    <h1 className="text-xl md:text-2xl font-extrabold">{name}</h1>

    <div className="flex items-center text-sm md:text-base">
    <Link href="/" className="breadcrumbs-btn text-indigo-700">Home</Link>
    <div className="h-4 w-4 text-gray-400"><ChevronRightIcon/></div>
    <p className="breadcrumbs-btn text-gray-400">{name}</p>
    </div>
    </div>
    
{/*    <div className="absolute -left-6 -bottom-4 border-dashed rounded-full p-16 border-4 h-16 w-16 border-slate-100 animate-[spin_5s_linear_infinite]"/>
<div className="absolute top-4 right-9 circle-ani rounded-full animate-[spin_4s_linear_infinite] z-1">
    <div className="circle-ani-child rounded-full"></div>
    </div>
    <div className="absolute top-20 left-32 half-circle-ani rounded-full animate-[spin_3s_linear_infinite] z-1">
    <div className="half-circle-ani-child rounded-full"></div>
    </div>

    <div className="absolute top-7 left-1/3 square-ani animate-[spin_3s_linear_infinite] z-1">
    <div className="square-ani-child"></div>
    </div>

    <div className="absolute top-12 left-2/4 square-ani-2 animate-[spin_2s_linear_infinite] z-1">
    <div className="square-ani-child-2"></div>
    </div>
    <div className="absolute bottom-16 right-1/3 square-ani-3 animate-[spin_3s_linear_infinite] z-1">
    <div className="square-ani-child-3"></div>
  </div> */}
    </div>
  )
}

export default Breadcrumbs