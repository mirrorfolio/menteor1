import heroImg from "@/public/img/heroImg.svg";
import mouse from "@/public/icons/mouse.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-col justify-around items-center  gap-8 max-w-xl sm:max-w-5xl mx-auto py-2">
        <div className="w-full">
          <div className=" flex flex-col gap-8 p-4 sm:p-10 ">
            <div className="pt-5 flex flex-col gap-4 mx-auto">
              <h1 className="text-2xl md:text-4xl font-bold font-syne text-center">
                Elevate Your Journey with Expert Mentorship
              </h1>
              <p className="text-sm md:text-md font-inter text-center">
                Step into Menteor, your gateway to a unique and comprehensive
                platform that brings together ambitious individuals and industry
                experts for personalized mentorship. Whether you're on a quest
                for guidance or excited to share your wealth of expertise,
                discover tailored support to elevate your professional growth
                journey.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="default"
              className=" bg-[#009379] font-syne rounded-xl transition-all duration-700 ease-in-out hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
            >
              Join Our Waiting List
            </Button>
          </div>
        </div>
        <div className="flex justify-center  p-3 ">
          <Image
            src={heroImg}
            draggable={false}
            alt="hero image"
            width={400}
            height={400}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </>
  );
}
