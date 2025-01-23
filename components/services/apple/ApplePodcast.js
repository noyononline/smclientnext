import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdVisibility } from "react-icons/md";
import PlaceOrderButton from "./PlaceOrderButton";
import { getAppleService } from "@/dynamicdata/apihandle";

const ApplePodcastSer = async () => {
  const applePodcast = await getAppleService();

  const applepodcaster = applePodcast.allService;

  const handlePlaceOrder = async (applepod) => {
    console.log(applepod);
  };

  return (
    <>
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold">What we offer</h2>
          </div>
          <Dialog>
            <Table className="">
              <TableHeader>
                <TableRow className="text-md uppercase ">
                  <TableHead className="text-slate-900 font-bold">ID</TableHead>
                  <TableHead className="text-slate-900 font-bold max-w-[300px]">
                    Service
                  </TableHead>
                  <TableHead className="text-center text-slate-900 font-bold">
                    Price
                  </TableHead>
                  <TableHead className="text-center text-slate-900 font-bold">
                    minimum
                  </TableHead>
                  <TableHead className="text-center text-slate-900 font-bold">
                    maximum
                  </TableHead>
                  <TableHead className="text-center text-slate-900 font-bold">
                    Delivery Time
                  </TableHead>
                  <TableHead className="text-center text-slate-900 font-bold">
                    Order Now
                  </TableHead>
                  <TableHead className="text-right text-slate-900 font-bold">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applepodcaster?.map((applepod, ap) => (
                  <TableRow key={applepod._id} className="">
                    <TableCell className="font-medium text-slate-950">
                      {ap + 1}
                    </TableCell>
                    <TableCell className="font-medium text-slate-950 max-w-[300px]">
                      {applepod.title}
                    </TableCell>
                    <TableCell className="text-center text-slate-950">
                      <span className="px-6 py-2 shadow-md rounded-md">
                        ${applepod.price}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-slate-950">
                      <span className="px-6 py-2 shadow-md rounded-md">
                        {applepod.minimum}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-slate-950">
                      <span className="px-6 py-2 shadow-md rounded-md">
                        {applepod.maximum}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-white flex flex-wrap justify-center items-center">
                      <span className="px-6 py-2 shadow-md rounded-md bg-orange-500">
                        {applepod.delivery} days
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-white ">
                      {/* <span
                        onClick={() => handlePlaceOrder(applepod)}
                        className="px-6 py-3 shadow-md rounded-md cursor-pointer bg-indigo-500 flex flex-wrap justify-center items-center"
                      >
                        Place Order
                      </span> */}

                      <PlaceOrderButton
                        name={"Place Order"}
                        applepod={applepod}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <DialogTrigger>
                        <p className="flex flex-row justify-end items-center">
                          <span className="p-3 bg-violet-700 shadow-sm rounded-lg cursor-pointer">
                            <MdVisibility className="text-2xl text-indigo-50 z-50" />
                          </span>
                        </p>
                      </DialogTrigger>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center py-5 border-b-2">
                  Are you absolutely sure?
                </DialogTitle>
                <DialogDescription>
                  <div className="my-5">
                    <h4>⚠️ LINK EXAMPLE:</h4>
                    <p>
                      https://itunes.apple.com/us/podcast/the-evolve-faster-podcast-with-scott-ely/id1448147015
                    </p>
                  </div>
                  <div>
                    <p>🇺🇸Podcast Promotion [12 Days Subscription] [UK]</p>
                  </div>
                  <div className="mt-6">
                    <h5>DESCRIPTION</h5>
                    <p>✅ Start Time: 12 hours</p>
                    <p>✅ Full 12 Days Promotion</p>
                    <p>✅ USA iTunes Store</p>
                    <p>✅ 100% Safe Service</p>
                  </div>
                  <div className="my-6">
                    <h5>Outcome Results:</h5>
                    <p>💠 Increase More Subscribers</p>
                    <p>💠 Increase Streams for All Episodes</p>
                    <p>💠 Increase Downloads for All Episodes</p>
                    <p>💠 Increase Positive 5/4 Stars Rating & Reviews</p>
                    <p>💠 Will Try our Best Top Chart on iTunes</p>
                    <p>💠 100% Manual Work, No bot.</p>
                    <p>💠 100% Guarantee results at this time.</p>
                  </div>
                  <p>
                    <b>Note:</b> If you don&apos;t get any outcome or are not
                    satisfied with the results in the first 96 hours after
                    placing your order, you can ask refund in the next 24 hours.
                    If you ask to cancel/refund after 5 days - We&apos;re sorry
                    now that can&apos;t cancel the order after 5 days. Here
                    we&apos;re doing our job honestly - so our staff will do the
                    correct things to promote your podcast regular basis to
                    complete your 30 days subscription.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
};

export default ApplePodcastSer;
