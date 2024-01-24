import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";

export default function WaitingListCTA() {
  return (
    <section className="w-full flex justify-center py-10">
      <Card className="flex flex-col gap-4 text-center px-4 w-full  bg-[#E5F4F2] py-8 backdrop-blur-sm rounded-lg  max-w-7xl mx-auto  hover:shadow-md">
        <CardTitle className="font-syne mx-auto text-3xl text-center">
          🌱💪 <br />
          Join us for better growth!
        </CardTitle>
        <CardDescription className="px-4 font-inter text-center">
          Excited to Embark on Your Mentorship Journey? <br /> Join the Waiting
          List Now!
        </CardDescription>
        <div className="flex flex-col gap-4 justify-center pt-5 items-center mx-auto">
          {/* <Input type="email" placeholder="Email" /> */}
          <Button
            type="submit"
            className=" bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
          >
            Join Our Waiting List
          </Button>
        </div>
      </Card>
    </section>
  );
}
