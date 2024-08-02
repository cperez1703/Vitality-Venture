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

interface EyesProps {
  setEye: (eye: string) => void;
}

const Eyes = ({ setEye }: EyesProps) => {
  const [open, setOpen] = useState(false);
  const { ownedEyes } = useCharacterStore(state => ({
    ownedEyes: state.ownedEyes,
  }));

  const handleButtonClick = (eye: string) => {
    setEye(eye);
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
            Eyewear
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Eyewear
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Select your eyewear
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          {ownedEyes.includes("/glasses.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/glasses.png")}
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
          )}
          {ownedEyes.includes("/goggles.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/goggles.png")}
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
          )}
          {ownedEyes.includes("/sunglasses.png") && (
            <button
              className="relative flex items-center justify-center h-full"
              onClick={() => handleButtonClick("/sunglasses.png")}
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Eyes;
