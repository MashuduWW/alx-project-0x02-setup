import React from "react";
import DarkBodyLayout from "@/components/layout/DarkBodyLayout";
import Header from "@/components/layout/Header";

const index: React.FC = () => {
  return (
    <DarkBodyLayout>
      <Header />
      <div className="text-center text-base">
        <h1>-----This is the INDEX page-----</h1>
      </div>
      <div>
        <div className=" mx-5 mt-32 flex flex-col items-center justify-center h-24 ">
          <h1 className="text-4xl">Welcome to Mashudu's complex.</h1>
          <p className="text-2xl">We have many apartments here.</p>
        </div>
      </div>
    </DarkBodyLayout>
  );
};

export default index;
