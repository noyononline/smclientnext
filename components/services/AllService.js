import Image from "next/image";
import Team1 from "@/public/t1.jpg";
import Link from "next/link";

const AllService = async ({ c }) => {
  // async function getCategory() {
  //   const res = await fetch("http://localhost:5000/api/get-category");

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch categories");
  //   }

  //   const data = await res.json();

  //   return JSON.stringify(data.categorys);
  // }

  // console.log("all categorylist", getCategory());

  const categories = [];

  return (
    <section className="bg-white py-24 px-10 md:px-0">
      <div className="container mx-auto">
        <div className="mt-6">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6">
            {/* Repeated Category Block */}
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div
                  key={index}
                  className="flex justify-center w-full items-center"
                >
                  <Link href={`/services/${category.slug}`}>
                    <div className="relative flex justify-center min-h-[200px] min-w-[200px] items-center rounded-lg shadow-lg overflow-hidden">
                      <Image
                        src={category.image || Team1}
                        alt="Category Image"
                        width={400}
                        height={400}
                        className="w-full h-full rounded-tl-lg rounded-tr-lg transition-all duration-75 ease-in-out rounded-bl-none"
                        priority
                      />
                      <div className="py-2 absolute bottom-10 z-20 px-4 bg-slate-900 flex rounded-sm hover:bg-[#3f9f42] justify-center items-center">
                        <h6 className="text-md font-bold uppercase text-white">
                          {category.name}
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No categories available.</p> // Fallback text if no categories
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllService;
