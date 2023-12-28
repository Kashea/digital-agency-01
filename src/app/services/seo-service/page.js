import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Seo from "@/components/SEO/Seo"
import SeoServices from "@/components/SEO/SeoServices"

export const metadata = {
  title: 'SEO Service - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const SeoService = () => {
  return (
    <>
    <Breadcrumbs name={"SEO Services"}/>
    <PageWrapper>
    <Seo/>
    </PageWrapper>

    <PageWrapper>
    <SeoServices/>
    </PageWrapper>

    <PageWrapper>
    <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    </PageWrapper>
    </>
  )
}

export default SeoService