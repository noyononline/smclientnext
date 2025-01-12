"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import FloatingShape from "@/components/FloatingShape";

import { useAppSelector } from "@/lib/store/hooks/hooks";
import { useRouter } from "next/navigation";

const AccountLayout = ({ children }) => {
  return (
    <div>
      <Header accountClass="bg-white shadow-2xl" />
      {children}
    </div>
  );
};

export default AccountLayout;
