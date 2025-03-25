"use client";
import BinanceIcon from "@/components/icons/BinanceIcon";
import BraveWalletIcon from "@/components/icons/BraveWallet";
import CoinbaseIcon from "@/components/icons/CoinbaseIcon";
import MathWalletIcon from "@/components/icons/MathWalletIcon";
import MetaMaskIcon from "@/components/icons/MetamaskIcon";
import SafepalIcon from "@/components/icons/Safepal";
import TrustWalletIcon from "@/components/icons/TrustWalletIcon";
import React from "react";

const listOfWallets = [
  {
    name: "Binance",
    icon: <BinanceIcon />,
  },
  {
    name: "Safepal",
    icon: <SafepalIcon />,
  },
  {
    name: "Coinbase",
    icon: <CoinbaseIcon width={20} height={20} />,
  },
  {
    name: "Mathwallet",
    icon: <MathWalletIcon />,
  },
  {
    name: "Metamask",
    icon: <MetaMaskIcon />,
  },
  {
    name: "Bravewallet",
    icon: <BraveWalletIcon />,
  },
  {
    name: "Trustwallet",
    icon: <TrustWalletIcon />,
  },
];

export default function LoginWithWallet() {
  return (
    <section className="bg-[#E8F1F2] min-h-screen flex items-center">
      <div className="w-[30%] max-[1200px]:w-[40%] max-[1000px]:w-[50%] max-[768px]:w-[70%] max-[550px]:w-[90%] m-auto">
        <h2 className="text-[32px] font-semibold text-center mt-4">
          Login with a Wallet!
        </h2>
        <p className="text-center mt-2">Securely login without password.</p>

        <div className="w-full flex flex-col gap-3 mt-6">
          {listOfWallets?.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center border border-[#000] rounded-[4px] px-4 py-[18px] gap-6"
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
