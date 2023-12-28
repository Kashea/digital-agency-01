"use client"
import Stats from './Stats'
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const HomeStats = () => {
    const stats = [
        { id: 1, name: 'Web Development', value: <CountUp start={0} end={4580} duration={2}/>,icon: CodeBracketIcon },
        { id: 2, name: 'Digital Marketing for a Brand', value: <CountUp start={0} end={3008} duration={2}/>,icon: CheckBadgeIcon },
        { id: 3, name: 'PPC campaign maintained', value: <CountUp start={0} end={3587} duration={2}/>,icon: CursorArrowRippleIcon },
        { id: 4, name: 'SEO Optimized Website', value: <CountUp start={0} end={2548} duration={2}/>,icon: PresentationChartLineIcon },
      ]
  return (
    <>
    <Stats stats={stats} heading={"Digital Marketing SMO & SEO Solution!"} para={"Our digital marketing solutions encompass both SMO (Social Media Optimisation) and SEO (Search Engine Optimisation) strategies, designed to maximise online visibility and engagement for businesses."}/>
    </>
  )
}

export default HomeStats