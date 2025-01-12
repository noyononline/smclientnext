import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniBanner from "@/components/uriBanner/UriBanner";
import AboutCompany from "@/components/about/AboutCompany";
import WhyOnlyMe from "@/components/home/WhyOnlyMe";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

const About = () => {
  return (
    <div>
      <Header />
      <UniBanner
        title={"About Our Company"}
        pathlink={"/about-us"}
        linktitle={"about"}
      />
      <AboutCompany />
      <WhyOnlyMe />

      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
