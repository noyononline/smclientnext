"use client";

import Header from "@/components/Header";
import UniBanner from "@/components/uriBanner/UriBanner";
import AllService from "@/components/services/AllService";
import Footer from "@/components/Footer";

const Service = () => {
  return (
    <div>
      <Header />
      <UniBanner
        title={"Our Services"}
        linktitle={"Service"}
        pathlink={"/services"}
      />
      <AllService />
      <Footer />
    </div>
  );
};

export default Service;
