import { Button } from "@/components/ui/button";
import notFound from "@/public/notfound.svg";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <section
      className="md:mb-32 gap-4 grid  justify-around max-w-7xl mx-auto py-10"
      aria-labelledby="Not found page"
    >
      <div className="w-full">
        <div className=" flex flex-col gap-8 p-4 sm:p-10 ">
          <div className="pt-5 flex flex-col gap-4 justify-center items-center">
            <Image src={notFound} width={200} height={200} alt="not found" />

            <h1 className="text-4xl font-syne font-bold">
              Uh oh! You seems lost{" "}
            </h1>
            <p className="text-lg font-inter">
              We can't seem to find the page you're looking for
            </p>
            <Link href={"/"}>
              <Button
                variant="outline"
                size={"lg"}
                className="hover:text-[#009379] flex items-center space-x-1"
              >
                <ArrowLeftIcon className="mr-2 h-5" /> Let's go back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
