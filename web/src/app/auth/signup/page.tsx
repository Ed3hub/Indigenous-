"use client";
import Line from "@/components/common/Line";
import CoinbaseIcon from "@/components/icons/CoinbaseIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function Signup() {
  const [state, setState] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  return (
    <section className="bg-[#E8F1F2] min-h-screen flex items-center">
      <div className="w-[30%] max-[1200px]:w-[40%] max-[1000px]:w-[50%] max-[768px]:w-[70%] max-[550px]:w-[90%] m-auto">
        <div className="flex justify-center">
          <Logo />
        </div>

        <h2 className="text-[32px] font-semibold text-center mt-4">
          Get Started Now!
        </h2>
        <p className="text-center mt-2">
          Create an account to explore our app.
        </p>

        <form className="text-[14px] mt-6 flex flex-col gap-4">
          <div>
            <Label className="mb-1 text-[14px]">Email</Label>
            <Input
              placeholder="Email"
              type="email"
              className="border-0 bg-[#F4F4F4] rounded-[100px] h-48px]"
            />
          </div>
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
          <div>
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
          <div className="flex w-full gap-3 mb-2">
            <Input type="checkbox" className="h-4 w-4" />
            <p className="text-[12px]">
              I agree to the{" "}
              <span className="text-[#049AFC]">Terms and Conditions</span>
            </p>
          </div>
          <Button variant={"brand"}>Sign up</Button>
        </form>

        <div className="flex items-center gap-[10px] mt-4">
          <div className="w-full">
            <Line />
          </div>
          <p className="min-w-max text-[12px]">Or continue with </p>
          <div className="w-full">
            <Line />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 mb-11 mx-auto w-max">
          <GoogleIcon />
          <CoinbaseIcon />
          <AppleIcon />
        </div>

        <div>
          <p className="text-[12px] mx-auto w-max">
            Already have an account?{" "}
            <span className="text-[#049AFC] font-semibold">Sign in</span>
          </p>
        </div>
      </div>
    </section>
  );
}
