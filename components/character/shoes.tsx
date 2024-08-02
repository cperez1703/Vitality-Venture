import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ShoeProps {
  setShoes: (shoes: string) => void;
}

const Shoes = ({ setShoes }: ShoeProps) => {
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
          <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-6 text-xl font-semibold text-gray-800 text-center z-10">
            Shoes
          </p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="items-center justify-center flex">
            Shoes
          </DialogTitle>
          <DialogDescription className="items-center justify-center flex">
            Select your shoes
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-around space-x-4">
          <button
            className="relative flex items-center justify-center h-full"
            onClick={() => setShoes("/shoe1.png")}
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
            onClick={() => setShoes("/shoe2.png")}
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
            onClick={() => setShoes("/shoe3.png")}
          >
            <Image
              src="/shoe3.png"
              height={300}
              width={300}
              alt="shoes3"
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
