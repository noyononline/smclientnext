import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import OurService from "@/components/home/OurService";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import WhyChoseUs from "@/components/home/WhyChooseUs";
import WhyOnlyMe from "@/components/home/WhyOnlyMe";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OurService />
      <About />
      <Team />
      <WhyOnlyMe />
      <Testimonials />
      <WhyChoseUs />
      <Faqs />
      <Footer />
    </div>
  );
}
