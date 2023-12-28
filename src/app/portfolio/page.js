import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import PortfolioIsoTop from "@/components/Portfolio/PortfolioIsoTop"

export const metadata = {
  title: 'Portfolio - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}

const Portfolio = () => {
  return (
    <>
    <Breadcrumbs name={"Portfolio"}/>
    <PortfolioIsoTop/>
    </>
  )
}

export default Portfolio