import { DialogDemo } from "@/components/dialog";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-300 h-screen text-white">
      <h2 className="text-3xl text-center pt-4">Hello World</h2>
      {/* <DialogDemo /> */}
      <Hero/>
    </div>
  );
}
