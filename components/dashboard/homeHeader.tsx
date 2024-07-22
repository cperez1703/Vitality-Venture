import Image from "next/image";

const HomeHeader = () => {
    return ( 
        <div className="w-full h-[400px] bg-[#d9d9d9] border border-black relative">
            <Image src="/swamp.png" layout="fill" objectFit="cover" alt="Logo"/>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <Image src="/gator-removebg-preview.png" height={500} width={500} alt="Gator Logo" className="z-10"/>
            </div>
        </div>
    );
}

export default HomeHeader;
