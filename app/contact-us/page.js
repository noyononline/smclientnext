import Header from "@/components/Header";
import UniBanner from "@/components/uriBanner/UriBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <UniBanner
        title="Contact Us"
        pathlink={"/contact-us"}
        linktitle={"contact"}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
