"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useCharacterStore from "../character/useCharacterStore";
import useStore from "../dashboard/useStore";

const Eyes = () => {
  const [open, setOpen] = useState(false);
  const { points, subtractPoints } = useStore();
  const { setEye, addOwnedEye } = useCharacterStore();

  const eyeCost = 10;

  const handlePurchase = (eye: string) => {
    if (points >= eyeCost) {
      setEye(eye);
      addOwnedEye(eye);
      setOpen(false);
      subtractPoints(eyeCost);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative flex items-center justify-center h-full">
          <Image
            src="/shopping.png"
            height={250}
            width={250}
            alt="Shop Logo"
            className="z-0"
            onClick={() => setOpen(true)}
          />
          <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1 text-xl font-semibold text-gray-800 text-center z-10">
            Eyewear
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Eyewear (10 Points)
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Buy your eyewear NOW
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/glasses.png")}
          >
            <Image
              src="/glasses.png"
              height={300}
              width={300}
              alt="Glasses"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Glasses
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/goggles.png")}
          >
            <Image
              src="/goggles.png"
              height={300}
              width={300}
              alt="Goggles"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Goggles
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/sunglasses.png")}
          >
            <Image
              src="/sunglasses.png"
              height={300}
              width={300}
              alt="Sunglasses"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Sunglasses
            </p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Eyes;
