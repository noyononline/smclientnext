import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

const HowToBuy = () => {
  return (
    <>
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-3">
            <h2 className="text-2xl font-bold">
              How To Buy Podcast Promotion Service
            </h2>
          </div>
          <p className="text-sm md:px-40 px-5 text-center">
            Authentic and premium podcast promotion services like appreciation,
            supporters, and impressions make SMMpanelogy stand apart. Choose
            from our services, buy them, and get immediate results that boost
            your online visibility and help you top the charts in the iTunes
            store. SMMpanelogy provides high-quality podcast promotion services
            quickly and with great service. Waste no time! Today, boost your
            podcast effect with SMMpanelogy!
          </p>
          <div className="flex flex-col lg:flex-row gap-10 py-10 justify-center items-center">
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle className="text-2xl">Choose Service</CardTitle>
                <CardDescription>
                  Explore our extensive array of social media marketing
                  solutions meticulously designed to address your unique
                  business needs. Select options like tracking, engagements,
                  reactions, and more.
                </CardDescription>
              </CardHeader>
            </Card>
            <span className="">
              <FaArrowRight className="text-2xl hidden lg:block text-green-500" />
              <FaArrowDown className="text-2xl block  lg:hidden text-green-500" />
            </span>
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle className="text-2xl">Add Your Link</CardTitle>
                <CardDescription>
                  Discover the peace of mind and seamless convenience offered by
                  our trustworthy payment systems. Immerse yourself in an
                  unparalleled experience as you explore an array of versatile
                  payment alternatives, while eagerly awaiting the fulfillment
                  of your expectations. Keep track of your transaction&apos;s
                  journey effortlessly through the dedicated order history page,
                  fostering a sense of transparency and tranquility.
                </CardDescription>
              </CardHeader>
            </Card>
            <span className="">
              <FaArrowRight className="text-2xl hidden lg:block text-green-500" />
              <FaArrowDown className="text-2xl block  lg:hidden text-green-500" />
            </span>
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle className="text-2xl">Await the outcome</CardTitle>
                <CardDescription>
                  Take advantage of our reliable payment systems and choose from
                  a wide array of payment options while eagerly awaiting the
                  outcomes. Effortlessly monitor the progress of your purchase
                  using the exclusive order history page for seamless tracking.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToBuy;
