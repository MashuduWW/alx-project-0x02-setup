import React from "react";
import DarkBodyLayout from "@/components/layout/DarkBodyLayout";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";


const home: React.FC = () => {
  return (
    <DarkBodyLayout>
      <Header />
      <main className="">
        <div className="text-center text-base">
          <h1>-----This is the ABOUT page-----</h1>
        </div>
        <div className=" text-5xl flex flex-col items-center justify-center">
          <h1>Welcome to the ABOUT page.</h1>
          <p>Good start.</p>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-400 text-gray-900">
          <h1 className="text-3xl font-bold mb-4">About Page</h1>

          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </DarkBodyLayout>
  );
};

export default home;
