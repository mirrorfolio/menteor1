import Link from "next/link";
import WaitingListCTA from "./WaitingListCTA";
import Image from "next/image";
import { Button } from "./ui/button";
import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-sm flex flex-col gap-4 p-5 max-w-7xl lg:flex-row min-w-full sticky  top-0 z-[999]">
      <div className="w-full lg:max-w-sm">
        <WaitingListCTA />
      </div>
      <section className="bg-black/90 text-background flex-1 rounded-xl p-5 flex flex-col gap-4">
        <div className="flex w-full flex-col  md:flex-row md:justify-between gap-4  mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 items-center align-bottom">
          <div className="w-full md:w-2/3 grid auto-cols-auto sm:grid-cols-3 gap-4 justify-center">
            <div className="w-full flex gap-4 flex-col grid-cols-3  md:grid-cols-1">
              <Image
                loading="lazy"
                src="/footerLogo.svg"
                alt="Menteor logo"
                draggable={false}
                width={100}
                height={100}
              />
              <p className="text-xs  font-inter">
                Empowering Skill-Building Through Expert Mentorship
              </p>
            </div>
            <div className="flex flex-col gap-4 grid-cols-3  md:grid-cols-1">
              <p className="text-xs  font-inter">Contact Us:</p>
              <p className="text-xs  font-inter">menteor@gmail.com</p>
              <p className="text-xs  font-inter">+91 70345 22688</p>
            </div>
            <div className="flex flex-col gap-4 grid-cols-3 md:grid-cols-1">
              <p className="text-xs  font-inter">Follow us on:</p>

              <div className="flex sm:flex-col gap-3 ">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mirrorfolio.com/"
                >
                  <p className="text-xs font-inter"> X</p>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mirrorfolio.com/"
                >
                  <p className="text-xs font-inter"> Instagram</p>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mirrorfolio.com/"
                >
                  <p className="text-xs font-inter"> Product Hunt</p>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mirrorfolio.com/"
                >
                  <p className="text-xs font-inter">Discord</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4 justify-center items-center  content-start pt-0  md:flex-row">
            <div className="w-full  flex gap-4 flex-col justify-center items-center ">
              <div className="flex gap-4 flex-col mt-5 sm:mt-0">
                <p className="text-xs  font-inter hidden sm:block">
                  Support us
                </p>
                <Link
                  href="https://www.buymeacoffee.com/kabeerhadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="buy me a coffee button"
                  className="curser-pointer flex flex-col gap-4 justify-center items-center"
                >
                  <p className="text-xs  font-inter block sm:hidden">
                    Support us
                  </p>
                  <Button
                    variant="default"
                    className=" bg-[#009379] font-syne rounded-xl transition-all duration-700 ease-in-out hover:bg-[#199D87] hover:scale-105 hover:backdrop-blur-sm"
                  >
                    <Coffee className="mr-2" size={20} />
                    Buy me a coffee
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="flex w-full flex-col  sm:flex-row sm:justify-between gap-4 md:gap-8 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 items-center align-bottom">
          <div className="w-full flex justify-center sm:justify-start">
            <p className="text-xs  font-inter">
              ©️ 2024 with love from the house of{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mirrorfolio.com/"
                className="font-syne"
              >
                Mirrorfolio
              </Link>
            </p>
          </div>
          <div className="flex w-full gap-4 justify-center sm:justify-end"></div>
        </section>
      </section>
    </footer>
  );
}
