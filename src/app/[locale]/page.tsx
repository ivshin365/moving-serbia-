import MultiStepForm from '@/components/MultiStepForm';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import FormSectionHeader from '@/components/FormSectionHeader';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />

      <section id="forma" className="bg-[#FAF9F5] py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FormSectionHeader />
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8E3D9] p-6 sm:p-8">
            <MultiStepForm />
          </div>
        </div>
      </section>

      <TrustSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </>
  );
}
