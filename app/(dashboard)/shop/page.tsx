import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <div
        className="w-full h-[113px] relative"
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}
      >
        <div className="w-full h-[104px] absolute left-[-1px] top-[-1px] bg-[#d9d9d9] border border-black" />
          <button className="w-[293px] h-[54px] absolute left-[19px] top-[35px] text-[40px] text-left text-black">
            Vitality Venture
          </button>
          <button className="w-[88px] h-[54px] absolute left-[743px] top-[59px] text-[32px] text-left text-black">
            Home
          </button>
          <button className="w-[88px] h-[54px] absolute left-[851px] top-[59px] text-[32px] text-left text-black">
            Shop
          </button>
          <button className="w-[147px] h-[54px] absolute left-[959px] top-[59px] text-[32px] text-left text-black">
            Character
          </button>
          <button className="w-[147px] h-[54px] absolute left-[1126px] top-[59px] text-[32px] text-left text-black">
            Calendar
          </button>

          <div
            className="absolute left-[1302px] top-[11px]"
          >
            <UserButton
              appearance={{
                elements: {
                    avatarBox: "h-[80px] w-[80px]"
                }
              }}
            />
          </div>
      </div>
      <div className="w-[250px] h-[75px] relative">
        <p className="w-[250px] h-[75px] absolute left-0 top-0 text-[35px] text-center text-black">
          Shop
        </p>
      </div>
    </>
  );
}
