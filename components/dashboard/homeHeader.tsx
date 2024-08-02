import Image from "next/image";
import useCharacterStore from "../character/useCharacterStore";
import Gator from "./gator";


const HomeHeader = () => {
    const { hat, eye, shirt, pants, shoes, accessories} = useCharacterStore();

    return ( 
        <div className="w-full h-[400px] bg-[#d9d9d9] border border-black relative">
            <Image src="/swamp.png" layout="fill" objectFit="cover" alt="Logo"/>
            <div className="relative flex items-center justify-center">
              <Gator
                hat={hat}
                eyes={eye}
                shirt={shirt}
                pants={pants}
                shoes={shoes}
                accessories={accessories}
              />
            </div>
        </div>
    );
}

export default HomeHeader;
