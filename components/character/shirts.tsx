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
      <DialogTrigger>
        <div className="relative flex items-center justify-center h-full">
          <Image
            src="/shopping.png"
            height={250}
            width={250}
            alt="Shop Logo"
            className="z-0"
          />
          <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
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
            Select your hat
          </DialogDescription>
        </DialogHeader>
        <button
          className="relative flex items-center justify-center h-full"
          onClick={() => setShirt("/cowboy_hat.png")}
        >
          <Image
            src="/cowboy_hat.png"
            height={300}
            width={300}
            alt="hat"
            className="z-0"
          />
          <p className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
            Cowboy Hat (20 Points)
          </p>
        </button>
        <button
          className="relative flex items-center justify-center h-full"
          onClick={() => setShirt("/cowboy_hat.png")}
        >
          <Image
            src="/cowboy_hat.png"
            height={300}
            width={300}
            alt="hat"
            className="z-0"
          />
          <p className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-xl font-semibold text-gray-800 text-center z-10">
            Cowboy Hat (20 Points)
          </p>
        </button>
        <button
          className="relative flex items-center justify-center h-full"
          onClick={() => setShirt("/cowboy_hat.png")}
        >
          <Image
            src="/cowboy_hat.png"
            height={300}
            width={300}
            alt="hat"
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

export default Shirts;
