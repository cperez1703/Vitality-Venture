import Image from "next/image";

interface GatorProps {
  hat: string | null;
  eyes: string | null;
  shirt: string | null;
  pants: string | null;
  shoes: string | null;
  accessories: string | null;
}

const Gator = ({
  hat,
  eyes,
  shirt,
  pants,
  shoes,
  accessories,
}: GatorProps) => {
  return (
    <div className="relative">
      <Image
        src="/gator-removebg-preview.png"
        height={600}
        width={600}
        alt="Gator Logo"
        className="z-20"
      />
      {hat && (
        <Image
          src={hat}
          height={250}
          width={250}
          alt="Hat"
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10"
        />
      )}
      {eyes && (
        <Image
          src={eyes}
          height={250}
          width={250}
          alt="Eyes"
          className="absolute -top-4 left-1/2 transform -translate-x-24 translate-y-7 z-10"
        />
      )}
      {shirt && (
        <Image
          src={shirt}
          height={250}
          width={250}
          alt="Shirt"
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10"
        />
      )}
      {pants && (
        <Image
          src={pants}
          height={250}
          width={250}
          alt="Pants"
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10"
        />
      )}
      {shoes && (
        <>
        <Image
          src={shoes}
          height={170}
          width={170}
          alt="Shoes"
          className="absolute -top-4 left-1/2 transform translate-x-4 translate-y-80 z-10"
        />
        <Image
          src={shoes}
          height={170}
          width={170}
          alt="Shoes"
          className="absolute -top-4 left-1/2 transform -translate-x-24 translate-y-80 z-10"
        />
        </>
      )}
      {accessories && (
        <Image
        src={accessories}
        height={60}
        width={60}
        alt="Accessories"
        className="absolute -top-4 left-1/2 transform -translate-x-10 translate-y-64 z-10"
      />
      )}
    </div>
  );
};

export default Gator;
