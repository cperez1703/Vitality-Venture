import AddTasks from "@/components/dashboard/addTasks";
import HomeHeader from "@/components/dashboard/homeHeader";
import SortTasks from "@/components/dashboard/sortTasks";
import Navbar from "@/components/navigation/Navbar";
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeHeader/>
      <div className="flex items-center justify-center columns-2 h-28">
        <div className="w-full flex items-center justify-center text-3xl">
          5 Tasks Left for Today!
        </div>
        <div className="w-full flex items-center justify-center columns-2">
          <div className="w-full flex items-center justify-center text-3xl">
            <SortTasks/>
          </div>
          <div className="w-full flex items-center justify-center text-3xl">
            <AddTasks/>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="w-full h-28 flex justify-center items-center columns-3">
        <Button className="flex justify-center items-center" variant="outline">Drink Water</Button>
        <Button className="flex justify-center items-center" variant="outline">Go Outside</Button>
        <Button className="flex justify-center items-center" variant="outline">Go to the Gym</Button>
      </div>
    </>
  );
}
