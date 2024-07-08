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
      <svg
        width={1228}
        height={730}
        viewBox="0 0 1228 730"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1228px] h-[729px] relative"
        preserveAspectRatio="none"
      >
        <circle cx={78} cy={75} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="27.7409" y1="20.2843" x2="128.991" y2="129.034" stroke="black" />
        <line x1="123.381" y1="17.1988" x2="27.756" y2="129.699" stroke="black" />
        <circle cx={75} cy={345} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="24.7409" y1="290.284" x2="125.991" y2="399.034" stroke="black" />
        <line x1="120.381" y1="287.199" x2="24.756" y2="399.699" stroke="black" />
        <circle cx={78} cy={75} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="27.7409" y1="20.2843" x2="128.991" y2="129.034" stroke="black" />
        <line x1="123.381" y1="17.1988" x2="27.756" y2="129.699" stroke="black" />
        <circle cx={78} cy={632} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="27.7409" y1="577.284" x2="128.991" y2="686.034" stroke="black" />
        <line x1="123.381" y1="574.199" x2="27.756" y2="686.699" stroke="black" />
        <circle cx={1153} cy={75} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="1102.74" y1="20.2843" x2="1203.99" y2="129.034" stroke="black" />
        <line x1="1198.38" y1="17.1988" x2="1102.76" y2="129.699" stroke="black" />
        <circle cx={1150} cy={345} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="1099.74" y1="290.284" x2="1200.99" y2="399.034" stroke="black" />
        <line x1="1195.38" y1="287.199" x2="1099.76" y2="399.699" stroke="black" />
        <circle cx={1153} cy={75} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="1102.74" y1="20.2843" x2="1203.99" y2="129.034" stroke="black" />
        <line x1="1198.38" y1="17.1988" x2="1102.76" y2="129.699" stroke="black" />
        <circle cx={1153} cy={632} r="74.5" fill="#DBDBDB" stroke="black" />
        <line x1="1102.74" y1="577.284" x2="1203.99" y2="686.034" stroke="black" />
        <line x1="1198.38" y1="574.199" x2="1102.76" y2="686.699" stroke="black" />
        <rect x="249.5" y="75.5" width={653} height={653} fill="#D9D9D9" stroke="black" />
        <line x1="249.354" y1="74.6464" x2="903.354" y2="728.646" stroke="black" />
        <line x1="903.354" y1="75.3536" x2="249.354" y2="729.354" stroke="black" />
      </svg>
    </>
  );
}
