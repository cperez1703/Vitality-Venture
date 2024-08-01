import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ShirtProps {
  setShirt: (shirt: string) => void;
}

const Shirts = ({ setShirt }: ShirtProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative flex items-center justify-center h-full">
          <Image
            src="/shopping.png"
            height={250}
            width={250}
            alt="Shop Logo"
            className="z-0"
          />
          <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
            Shirts
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Shirts
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Select your shirt
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => setShirt("/shirt1.png")}
          >
            <Image
              src="/shirt1.png"
              height={300}
              width={300}
              alt="Shirt 1"
              className="z-0"
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-sm font-semibold text-gray-800 text-center z-10">
              Shirt 1
            </p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Shirts;
