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

// Define the type for props
interface HatsProps {
  onPurchase: () => void;
}

const Hats: React.FC<HatsProps> = ({ onPurchase }) => {
  const [open, setOpen] = useState(false);

  const handlePurchase = () => {
    onPurchase();
    setOpen(false);
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
          <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
            Hats
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Hats
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Buy your hat NOW
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={handlePurchase}
          className="relative flex items-center justify-center h-full mb-4"
        >
          <Image
            src="/cowboy_hat.png"
            height={300}
            width={300}
            alt="Cowboy Hat"
            className="z-0"
          />
          <p className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
            Cowboy Hat (20 Points)
          </p>
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default Hats;
