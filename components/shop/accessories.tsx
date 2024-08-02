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

const Accessories = () => {
  const [open, setOpen] = useState(false);
  const { points, subtractPoints } = useStore();
  const { setAccessories, addOwnedAccessories } = useCharacterStore();

  const accessoryCost = 20; // Set the cost for accessories

  const handlePurchase = (accessory: string) => {
    if (points >= accessoryCost) {
      setAccessories(accessory);
      addOwnedAccessories(accessory);
      setOpen(false);
      subtractPoints(accessoryCost);
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
          <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-6 text-xl font-semibold text-gray-800 text-center z-10">
            Accessories
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Accessories (10 Points)
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Buy your accessory NOW
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => handlePurchase("/rolex.png")}
          >
            <Image
              src="/rolex.png"
              height={300}
              width={300}
              alt="Rolex"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Rolex
            </p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Accessories;
