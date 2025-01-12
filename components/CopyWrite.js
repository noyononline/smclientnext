import Image from "next/image";
import payment from "@/public/payment-methood.png";
import mpayment from "@/public/mobile-payment.png";
const CopyWrite = () => {
  return (
    <div className="bg-[#e5e7e9]">
      <div className="container mx-auto">
        <div className="pb-10 flex flex-wrap justify-center items-center">
          <Image
            src={payment}
            className="align-middle hidden md:block"
            alt="social media marketing"
            layout="intrinsic"
            priority
          />
          <Image
            src={mpayment}
            className="align-middle block  md:hidden"
            alt="social media marketing"
            layout="intrinsic"
            priority
          />
        </div>
        <p className="text-center py-6 text-md text-slate-950 capitalize border-t border-black">
          &copy; Copyright {new Date().getFullYear()} || All right reserved by
          <a href="" className="text-slate-950 font-bold hover:text-green-600">
            {" "}
            AH Noyon
          </a>
        </p>
      </div>
    </div>
  );
};

export default CopyWrite;
