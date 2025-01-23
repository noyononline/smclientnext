"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppSelector } from "@/lib/store/hooks/hooks";

const PlaceOrderButton = ({ name = "", applepod }) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();

  console.log(router);

  const handlePlaceOrder = async (applepod) => {
    if (!userInfo) {
      // Redirect to the login page if userInfo is null
      router.push("/account/login");
      return;
    }
    const orderData = {
      serviceId: applepod._id,
      serviceTitle: applepod.title,
      price: applepod.price,
      minimum: applepod.minimum,
      maximum: applepod.maximum,
      delivery: applepod.delivery,
      userId: userInfo._id,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/client/place-order",
        orderData
      );

      // Handle successful order placement
      if (response.status === 200) {
        toast.success("Order placed successfully!");
      }
    } catch (error) {
      // Handle any error during order placement
      toast.error(
        "Error placing order: " + (error.response?.data?.error || error.message)
      );
    }
  };

  return (
    <span
      onClick={() => handlePlaceOrder(applepod)}
      className="px-6 py-3 shadow-md rounded-md cursor-pointer bg-indigo-500 flex flex-wrap justify-center items-center"
    >
      {name}
    </span>
  );
};

export default PlaceOrderButton;
