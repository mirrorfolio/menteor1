import heroImg from "@/public/img/heroImg.svg";
import mouse from "@/public/icons/mouse.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse justify-around items-center md:flex-row max-w-7xl md:mb-32 mx-auto py-2 ">
      <div className="w-full">
        <div className=" flex flex-col gap-8 p-4 sm:p-10 ">
          <div className="pt-5 flex flex-col gap-4">
            <h1 className="text-4xl font-bold font-syne lg:w-3/4">
              🎯 <br />
              Elevate Your Journey  with Expert Mentorship
            </h1>
            <p className="text-md font-inter md:w-3/4">
              Welcome to Menteor, An all-in-one exclusive platform uniting
              ambitious individuals with industry experts for personalized
              mentorship. <br /> Whether you're seeking guidance or eager to share your
              expertise, find tailored support for your professional growth
              journey.
            </p>
          </div>

          <div className="pt-5 flex flex-col gap-4">
            <p className="font-bold font-syne">
              Ready to take the next step? <br />
              Secure your spot on our pre-launch journey! 🌟
              <br /> Join our waiting list now!
            </p>
            <div className="sm:block hidden">
              <Button
                variant="default"
                className=" bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
              >
                Join Our Waiting List
              </Button>
            </div>
            <Button
              variant="default"
              className="sm:hidden bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
            >
              Join Our Waiting List
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
