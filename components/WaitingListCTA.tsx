import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Input } from "./ui/input";

export default function WaitingListCTA() {
  return (
    <section className="w-full  flex h-full">
      <Card className="flex flex-col justify-around gap-4 px-4 w-full h-full transition-all duration-700 ease-in-out bg-[#E5F4F2] py-8 backdrop-blur-sm rounded-lg  max-w-7xl mx-auto  hover:shadow-md">
        <CardTitle className="font-syne px-4 text-2xl">
          Join us for better growth!
        </CardTitle>
        <CardDescription className="px-4 font-inter">
          Excited to Embark on Your Mentorship Journey? <br /> Join the Waiting
          List Now!
        </CardDescription>
        <CardFooter className="px-4 py-0">
          <Button
            type="submit"
            className=" bg-[#009379] font-syne rounded-xl transition-all duration-700 ease-in-out hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
          >
            Join Our Waiting List
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
