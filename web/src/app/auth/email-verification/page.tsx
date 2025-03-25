"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function EmailVerification() {

  return (
    <section className="bg-[#E8F1F2] min-h-screen flex items-center">
      <div className="w-[30%] max-[1200px]:w-[40%] max-[1000px]:w-[50%] max-[768px]:w-[70%] max-[550px]:w-[90%] m-auto">
        <h2 className="text-[32px] font-semibold text-center mt-4">
          Email Verification Code
        </h2>
        <p className="text-center mt-2">
          Enter the otp we just sent to your email.
        </p>

        <form className="text-[14px] mt-6 flex flex-col gap-4">
          <div className="w-max mx-auto">
            <InputOTP maxLength={6}>
              <InputOTPGroup className="gap-3">
                <InputOTPSlot
                  index={0}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
                <InputOTPSlot
                  index={1}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
                <InputOTPSlot
                  index={2}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
                <InputOTPSlot
                  index={3}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
                <InputOTPSlot
                  index={4}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
                <InputOTPSlot
                  index={5}
                  className="border border-[#000] w-[45px] h-[45px] max-[370px]:w-[35px] max-[370px]:h-[35px] rounded-[12px]"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex w-full gap-3 mb-[200px] flex justify-center">
            <p className="text-[16px]">
              Didn&apos;t receive code?{" "}
              <span className="text-[#049AFC]">Resend code</span>
            </p>
          </div>
          <Button variant={"brand"}>Verify</Button>
        </form>
      </div>
    </section>
  );
}
