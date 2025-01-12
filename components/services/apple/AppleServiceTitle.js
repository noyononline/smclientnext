import unImage from "@/public/uni-banner.jpg";

const AppleServiceTitle = () => {
  return (
    <section
      style={{ backgroundImage: `url(${unImage.src})` }}
      className="overflow-hidden bg-no-repeat relative w-full bg-cover"
    >
      <div className="container mx-auto">
        <div className="text-center pt-40 pb-24">
          <h2 className="text-3xl font-bold capitalize text-[#111111] mb-5">
            Buy Podcast Downloads, Listeners and Subscribers
          </h2>
          <h2 className="text-4xl font-bold capitalize text-[#111111] mb-5">
            Cheap Apple Podcast Downloads, Plays and Reviews only at SPL
          </h2>
          <p className="text-sm">
            Want to get more organic Downloads and Listeners? Do you want to
            attract more people by positive rating and reviews?
          </p>
          <h6 className="text-lg font-bold">Place an order and enjoy.</h6>
          <p className="text-sm">
            <b>Notice:</b> SPL only provides organic advertising services.{" "}
            <b>We do not sell poor quality services.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppleServiceTitle;
