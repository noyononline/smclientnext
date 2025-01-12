import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppleServiceTitle from "@/components/services/apple/AppleServiceTitle";
import ApplePodcastSer from "@/components/services/apple/ApplePodcast";
import HowToBuy from "@/components/services/apple/HowToBuy";
import ServiceProvider from "@/components/services/ServiceProvider";
import FreequentlyASK from "@/components/services/apple/FreequentlyASK";
import UserReview from "@/components/services/UserReview";
const ApplePodcast = () => {
  return (
    <div>
      <Header />
      <AppleServiceTitle />
      <ApplePodcastSer />
      <HowToBuy />
      <ServiceProvider />
      <FreequentlyASK />
      <UserReview />
      <Footer />
    </div>
  );
};

export default ApplePodcast;
