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
import useCharacterStore from "./useCharacterStore"; // Adjust the path accordingly

interface AccessoriesProps {
  setAccessories: (accessories: string) => void;
}

const Accessories = ({ setAccessories }: AccessoriesProps) => {
  const [open, setOpen] = useState(false);
  const { ownedAccessories } = useCharacterStore(state => ({
    ownedAccessories: state.ownedAccessories,
  }));

  const handleButtonClick = (accessory: string) => {
    setAccessories(accessory);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="relative flex items-center justify-center h-full">
          <Image
            src="/shopping.png"
            height={250}
            width={250}
            alt="Shop Logo"
            className="z-0"
          />
          <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-6 text-xl font-semibold text-gray-800 text-center z-10">
            Accessories
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Accessories
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Select your accessory
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          {ownedAccessories.includes("/rolex.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/rolex.png")}
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
          )}
          {/* Add more accessory buttons here if needed */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Accessories;
