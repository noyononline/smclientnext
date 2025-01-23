import React from "react";
import Image from "next/image";
import Link from "next/link";
import cate from "@/public/s5.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdVisibility } from "react-icons/md";
import { getCategory } from "@/dynamicdata/apihandle";
import { use } from "react";

const Category = () => {
  const categories = use(getCategory());

  const categorys = categories.categorys;

  const invoices = [
    {
      id: "1",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
    {
      id: "2",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
    {
      id: "3",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
    {
      id: "4",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
    {
      id: "5",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
    {
      id: "6",
      service: "downloads 2k",
      paymentStatus: "20",
      delivery: "2 days",
      place: "place order",
      action: "view",
    },
  ];
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex justify-between items-center  p-4  rounded-md">
        <h1 className="text-[#1C2434] font-semibold text-lg">Category</h1>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <div className="w-full p-4 bg-white shadow-md rounded-md">
            <div className="relative overflow-x-auto">
              <Table className="">
                <TableHeader>
                  <TableRow className="text-md uppercase ">
                    <TableHead className="text-slate-900 font-bold">
                      No
                    </TableHead>
                    <TableHead className="text-slate-900 font-bold">
                      Service Available
                    </TableHead>
                    <TableHead className=" text-slate-900 font-bold">
                      Image
                    </TableHead>

                    <TableHead className="text-right text-slate-900 font-bold">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categorys?.map((category, i) => (
                    <TableRow key={category.id} className="">
                      <TableCell className="font-medium text-slate-950">
                        {i + 1}
                      </TableCell>
                      <TableCell className="font-medium text-slate-950 ">
                        {category.name}
                      </TableCell>
                      <TableCell className="text-center items-center text-slate-950">
                        <Image
                          className="items-center"
                          src={category.image}
                          alt={category.name}
                          width={60}
                          height={50}
                          priority
                        />
                      </TableCell>

                      <TableCell className="text-right">
                        <Link href={`/services`}>
                          <p className="flex flex-row justify-end items-center">
                            <span className="p-3 bg-violet-700 shadow-sm rounded-lg cursor-pointer">
                              <MdVisibility className="text-2xl text-indigo-50 z-50" />
                            </span>
                          </p>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
