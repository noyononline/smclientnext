"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import { useAppSelector } from "@/lib/store/hooks/hooks";
import { useRouter } from "next/navigation";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const { userInfo } = useAppSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      router.push("/account/login");
    }
  }, [userInfo, router]);
  return (
    <div className="bg-[#F1F5F9] w-full min-h-screen">
      <Header accountClass="bg-white" />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
