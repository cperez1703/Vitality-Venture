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

interface HatProps {
  setHat: (hat: string) => void;
}

const Hats = ({ setHat }: HatProps) => {
  const [open, setOpen] = useState(false);
  const { ownedHats } = useCharacterStore(state => ({
    ownedHats: state.ownedHats,
  }));

  const handleButtonClick = (hat: string) => {
    setHat(hat);
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
            Hats
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Hats
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Select your hat
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          {ownedHats.includes("/cowboy_hat.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/cowboy_hat.png")}
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
          )}
          {ownedHats.includes("/tophat.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/tophat.png")}
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
          )}
          {ownedHats.includes("/chefhat.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/chefhat.png")}
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Hats;
