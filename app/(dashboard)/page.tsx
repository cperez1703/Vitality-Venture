import Navbar from "@/components/navigation/Navbar";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="w-full h-[400px] bg-[#d9d9d9] border border-black" />
      <div className="w-[1379px] h-[114px] relative">
        <p className="w-[px] h-[100px] absolute left-0 top-0 text-4xl text-left text-black">
          5 Goals Left for Today!
        </p>
        <svg
          width={1370}
          height={28}
          viewBox="0 0 1370 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1370px] h-7 absolute left-[9px] top-[86px]"
          preserveAspectRatio="none"
        >
          <line y1="13.5" x2={1370} y2="13.5" stroke="black" />
          <rect x="80.5" y="0.5" width={407} height={27} fill="#D9D9D9" stroke="black" />
        </svg>
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[54px] h-[54px] absolute left-[1192px] top-[17px]"
          preserveAspectRatio="none"
        >
          <circle cx={27} cy={27} r="26.5" fill="#D9D9D9" stroke="black" />
          <rect x="23.5" y="7.5" width={5} height={38} fill="black" />
          <rect x="23.5" y="7.5" width={5} height={38} fill="black" />
          <rect x="23.5" y="7.5" width={5} height={38} fill="black" />
          <rect x="23.5" y="7.5" width={5} height={38} stroke="black" />
          <rect x="45.5" y="23.5" width={5} height={38} transform="rotate(90 45.5 23.5)" fill="black" />
          <rect x="45.5" y="23.5" width={5} height={38} transform="rotate(90 45.5 23.5)" fill="black" />
          <rect x="45.5" y="23.5" width={5} height={38} transform="rotate(90 45.5 23.5)" fill="black" />
          <rect x="45.5" y="23.5" width={5} height={38} transform="rotate(90 45.5 23.5)" stroke="black" />
        </svg>
        <p className="w-[243px] h-[69px] absolute left-[957px] top-[17px] text-[43.35454559326172px] text-center text-black">
          Add Task
        </p>
        <p className="w-[243px] h-[69px] absolute left-[675px] top-[17px] text-[43.35454559326172px] text-center text-black">
          Sort{" "}
        </p>
        <svg
          width={54}
          height={54}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[54px] h-[54px] absolute left-[875px] top-[17px]"
          preserveAspectRatio="none"
        >
          <circle cx={27} cy={27} r="26.5" fill="#D9D9D9" stroke="black" />
          <rect x="10.5" y="11.5" width={32} height={4} fill="#D9D9D9" stroke="black" />
          <rect x="10.5" y="41.5" width={32} height={4} fill="#D9D9D9" stroke="black" />
          <rect x="10.5" y="26.5" width={32} height={3} fill="#D9D9D9" stroke="black" />
          <path
            d="M37.5 28C37.5 30.5361 35.6609 32.5 33.5 32.5C31.3391 32.5 29.5 30.5361 29.5 28C29.5 25.4639 31.3391 23.5 33.5 23.5C35.6609 23.5 37.5 25.4639 37.5 28Z"
            fill="#D9D9D9"
            stroke="black"
          />
          <path
            d="M24.5 14C24.5 16.5361 22.6609 18.5 20.5 18.5C18.3391 18.5 16.5 16.5361 16.5 14C16.5 11.4639 18.3391 9.5 20.5 9.5C22.6609 9.5 24.5 11.4639 24.5 14Z"
            fill="#D9D9D9"
            stroke="black"
          />
          <circle cx="20.5" cy="43.5" r={4} fill="#D9D9D9" stroke="black" />
        </svg>
      </div>
      <div className="w-[1246px] h-[76px] relative">
  <div className="w-[420px] h-[76px] absolute left-0 top-0">
    <div className="w-[404px] h-[76px] absolute left-[-1px] top-[-1px] rounded-[50px] bg-[#d9d9d9] border border-black" />
    <p className="w-[316px] h-12 absolute left-[104px] top-[15px] text-4xl text-left text-black">
      Drink Water
    </p>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[25px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[34px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[43px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <div className="w-[7.38px] h-[21.55px] absolute left-[351.9px] top-[50.47px] bg-black border border-black" />
    <div className="w-[7.38px] h-[42.97px] absolute left-[370.99px] top-[19px] bg-black border border-black" />
  </div>
  <div className="w-[422px] h-[76px] absolute left-[420px] top-0">
    <div className="w-[404px] h-[76px] absolute left-[-1px] top-[-1px] rounded-[50px] bg-[#d9d9d9] border border-black" />
    <p className="w-[316px] h-12 absolute left-[106px] top-[15px] text-4xl text-left text-black">
      Take a Walk
    </p>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[25px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[34px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[23px] top-[43px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
    </svg>
    <div className="w-[7.38px] h-[21.55px] absolute left-[354.9px] top-[50.47px] bg-black border border-black" />
    <div className="w-[7.38px] h-[42.97px] absolute left-[373.99px] top-[19px] bg-black border border-black" />
  </div>
  <div className="w-[404px] h-[76px] absolute left-[842px] top-0">
      <div className="w-[404px] h-[76px] absolute left-[-1px] top-[-1px] rounded-[50px] bg-[#d9d9d9] border border-black" />
      <p className="w-[316px] h-12 absolute left-[88px] top-[15px] text-4xl text-left text-black">
        Go to the Gym
      </p>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[23px] top-[25px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
      </svg>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[23px] top-[34px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
      </svg>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[23px] top-[43px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx={4} cy={4} r="3.5" fill="#D9D9D9" stroke="black" />
      </svg>
      <div className="w-[7.38px] h-[21.55px] absolute left-[354.9px] top-[50.47px] bg-black border border-black" />
      <div className="w-[7.38px] h-[42.97px] absolute left-[373.99px] top-[19px] bg-black border border-black" />
    </div>
  </div>
    </>
  );
}
