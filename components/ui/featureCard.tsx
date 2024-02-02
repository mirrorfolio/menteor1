import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}
export default function FeatureCard({
  title,
  description,
  image,
  className = "",
}: FeatureCardProps) {
  return (
    <Card
      className={`${className} flex flex-col md:flex-row  gap-4 text-center justify-center items-center bg-[#E5F4F2] py-8 backdrop-blur-sm rounded-lg `}
    >
      <div className="flex flex-col gap-4 justify-center items-center px-4 md:w-1/2">
        <CardHeader className="p-0 mb-5 text-center"></CardHeader>
        <CardTitle className="font-syne mx-auto sm:w-3/4">{title}</CardTitle>
        <CardDescription className="px-4 font-inter">
          {description}
        </CardDescription>
      </div>
      <div>
        <Image src={image} alt={title} width={150} height={150} />
      </div>
    </Card>
  );
}
