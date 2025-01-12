import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ServiceProvider = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-3">
            <h2 className="text-2xl font-bold">
              SMMpanelogy- Your #1 Podcast Marketing Service Provider
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 py-10 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">Instant Delivery</CardTitle>
                  <CardDescription>
                    SMMpanelogy presents a quick and reliable SMM panel that
                    guarantees rapid and dependable promotion services for
                    podcasts, specifically designed to assist individuals in
                    need of prompt and effective support.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    High quality Accounts
                  </CardTitle>
                  <CardDescription>
                    SMMpanelogy excels in podcast promotion, prioritizing
                    top-quality accounts for maximum exposure and audience
                    engagement, resulting in a significant boost in
                    listenership.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    24/7 Customer Support
                  </CardTitle>
                  <CardDescription>
                    Our dedicated customer support team is at your disposal
                    24/7, ready to address any inquiries or concerns you may
                    have regarding our podcast promotion services. We are
                    unwavering in our commitment to providing unmatched
                    satisfaction to our valued customers, making your ultimate
                    happiness our foremost priority.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    100% Customer Satisfaction
                  </CardTitle>
                  <CardDescription>
                    At SMMpanelogy, customer satisfaction is our utmost
                    priority. We excel in podcast promotion, exceeding
                    expectations with innovative strategies and unmatched
                    results. Elevate your podcast&apos;s visibility and engage
                    your audience with us.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Increase Visibility
                  </CardTitle>
                  <CardDescription>
                    At our podcast marketing services, we strive to amplify the
                    visibility of your podcast and broaden your listener base.
                    We employ powerful techniques to promote your podcast on
                    diverse social media platforms, guaranteeing its outreach to
                    the relevant target demographic.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="max-w-[300px]">
                <CardHeader>
                  <CardTitle className="text-2xl">Secure Payment</CardTitle>
                  <CardDescription>
                    At SMMpanelogy, safeguarding the integrity of your payment
                    details while utilizing our podcast promotion services is
                    our utmost priority. We provide an assurance of preserving
                    the privacy and security of your financial transactions,
                    resulting in a reliable and effortless payment experience.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceProvider;
