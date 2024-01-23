import heroImg from "@/public/img/heroImg.svg";
import mouse from "@/public/icons/mouse.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    
      <section className="flex flex-col-reverse justify-around items-center sm:flex-row max-w-7xl md:mb-32 mx-auto py-2 ">
        <div className="w-full">
          <div className=" flex flex-col gap-8 p-4 sm:p-10 ">
            <div className="pt-5 flex flex-col gap-4">
            <h1 className="text-4xl font-bold font-syne">🎯 <br />
              Menteor Unleashes <br /> Your Potential.
            </h1>
            <p className="text-md font-inter w-3/4">
              Unlock Your Professional Potential with Menteor. Whether you seek
              guidance or are eager to share your expertise, find your perfect
              mentorship match here.
            </p>
            </div>

            <div className="pt-5 flex flex-col gap-4">
              <p className="font-bold font-syne">
              Ready to Elevate Your Career? <br />Join Our Waiting List for Early Access!  🚀 
              </p>
              <div className="sm:block hidden">
                <Button
                  variant="default"
                  className=" bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
                >
                  Join the waiting list
                </Button>
              </div>
              <Button
                variant="default"
                className="sm:hidden bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
              >
                Join the waiting list
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end  p-3 ">
          <Image
            src={heroImg}
            alt="hero image"
            width={500}
            height={500}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    
  );
}
