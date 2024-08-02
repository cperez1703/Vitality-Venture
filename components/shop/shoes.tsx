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

const Shoes = () => {
  const [open, setOpen] = useState(false);
  const { points, subtractPoints } = useStore();
  const { setShoes, addOwnedShoes } = useCharacterStore();

  const shoeCost = 10; // Set the cost for shoes

  const handlePurchase = (shoes: string) => {
    if (points >= shoeCost) {
      setShoes(shoes);
      addOwnedShoes(shoes);
      setOpen(false);
      subtractPoints(shoeCost);
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
            Shoes
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Shoes (10 Points)
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Buy your shoes NOW
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/shoe1.png")}
          >
            <Image
              src="/shoe1.png"
              height={300}
              width={300}
              alt="Shoe1"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Shoes 1
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/shoe2.png")}
          >
            <Image
              src="/shoe2.png"
              height={300}
              width={300}
              alt="Shoe2"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Shoes 2
            </p>
          </button>
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/shoe3.png")}
          >
            <Image
              src="/shoe3.png"
              height={300}
              width={300}
              alt="Shoe3"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Shoes 3
            </p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Shoes;
