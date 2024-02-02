import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/img/logo.svg";

export default function Header() {
  return (
    <header className="bg-background/90 backdrop-blur-sm sticky  top-0 z-[999]">
      <div className="mx-auto  max-w-7xl px-4 py-6 sm:px-6 flex justify-between lg:px-8 items-center align-middle">
        <Link href="/" className="text-2xl font-syne font-bold cursor-pointer">
          <Image
            loading="lazy"
            draggable={false}
            src={logo}
            alt="Menteor logo"
            width={100}
            height={100}
            className=" bg-current/90 "
          />
        </Link>

        <Button
          variant="default"
          className=" bg-[#009379] font-syne rounded-xl hover:bg-[#199D87] hover:scale-105 transition-all duration-700 ease-in-out  hover:backdrop-blur-sm"
        >
          Join Our Waiting List
        </Button>
      </div>
    </header>
  );
}
