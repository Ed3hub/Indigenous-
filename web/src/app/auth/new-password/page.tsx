"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function NewPassword() {
  const [state, setState] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  return (
    <section className="bg-[#E8F1F2] min-h-screen flex items-center">
      <div className="w-[30%] max-[1200px]:w-[40%] max-[1000px]:w-[50%] max-[768px]:w-[70%] max-[550px]:w-[90%] m-auto">

        <h2 className="text-[32px] font-semibold text-center mt-4">
        New Password
        </h2>
        <p className="text-center mt-2">
        Enter your new password
        </p>

        <form className="text-[14px] mt-6 flex flex-col gap-4 ">
        
          <div>
            <Label className="mb-1 text-[14px]">Password</Label>
            <div className="relative">
              <Input
                placeholder="Password"
                type={state.showPassword ? "text" : "password"}
                className="border-0 bg-[#F4F4F4] rounded-[100px] h-48px]"
              />
              <div
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    showPassword: !state.showPassword,
                  }))
                }
                className="absolute top-0 right-[1rem] h-full flex items-center cursor-pointer"
              >
                {state.showPassword ? <EyeOff /> : <Eye />}
              </div>
            </div>
          </div>
          <div className="mb-[200px]">
            <Label className="mb-1 text-[14px]">Confirm Password</Label>
            <div className="relative">
              <Input
                placeholder="Password"
                type={state.showConfirmPassword ? "text" : "password"}
                className="border-0 bg-[#F4F4F4] rounded-[100px] h-48px]"
              />
              <div
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    showConfirmPassword: !state.showConfirmPassword,
                  }))
                }
                className="absolute top-0 right-[1rem] h-full flex items-center cursor-pointer"
              >
                {state.showConfirmPassword ? <EyeOff /> : <Eye />}
              </div>
            </div>
          </div>
         
          <Button variant={"brand"}>Confirm Password</Button>
        </form>

    
      </div>
    </section>
  );
}
