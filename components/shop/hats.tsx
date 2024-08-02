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

const Hats = () => {
  const [open, setOpen] = useState(false);
  const { points, subtractPoints } = useStore();
  const { setHat, addOwnedHat } = useCharacterStore();

  const hatCost = 10;

  const handlePurchase = (hat: string) => {
    if (points >= hatCost) {
      setHat(hat);
      addOwnedHat(hat);
      setOpen(false);
      subtractPoints(hatCost);
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
            Hats
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Hats (10 Points)
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Buy your hat NOW
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/cowboy_hat.png")}
          >
            <Image
              src="/cowboy_hat.png"
              height={300}
              width={300}
              alt="Cowboy Hat"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Cowboy
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/tophat.png")}
          >
            <Image
              src="/tophat.png"
              height={300}
              width={300}
              alt="Top Hat"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Tophat
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/chefhat.png")}
          >
            <Image
              src="/chefhat.png"
              height={300}
              width={300}
              alt="Chef Hat"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Chef
            </p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Hats;
