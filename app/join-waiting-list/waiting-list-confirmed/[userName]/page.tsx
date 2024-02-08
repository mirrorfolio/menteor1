"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WaitingListConfirmed({
  params,
}: {
  params: { userName: string };
}) {
  const [userData, setUserData] = useState("");
  const name = params.userName.split("%20")[0];
  useEffect(() => {
    setUserData(name);
  }, [params.userName]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col gap-8 items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#009379] w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col items-center w-full justify-center gap-6">
              <h1 className="text-4xl font-syne font-bold">
                Thank You {userData}!
              </h1>
              <p className="text-lg font-mono">
                Thank you for your interest! We will reach out to you shortly.
              </p>
            </div>
            <Link href={"/"} className="mt-6">
              <Button
                variant="outline"
                size={"lg"}
                className="hover:text-[#009379] flex items-center space-x-1"
              >
                <ArrowLeftIcon className="mr-2 h-5" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
