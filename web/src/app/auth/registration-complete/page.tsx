import { Button } from "@/components/ui/button";
import React from "react";

export default function RegistrationComplete() {
  return (
    <section className="bg-[#E8F1F2] min-h-screen flex items-center">
      <div className="w-[30%] max-[1200px]:w-[40%] max-[1000px]:w-[50%] max-[768px]:w-[70%] max-[550px]:w-[90%] m-auto">
        <p className="text-center mt-2">
          Your registration has been successfully completed. Login to your
          account to continue the process.
        </p>

        <Button variant={"brand"} className="w-full mt-8">
          Continue
        </Button>
      </div>
    </section>
  );
}
