import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UniBanner from "@/components/uriBanner/UriBanner";

const Faq = () => {
  return (
    <div>
      <Header />
      <UniBanner title={"FAQ"} pathlink={"/faq"} linktitle={"FAQ"} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Faq;
