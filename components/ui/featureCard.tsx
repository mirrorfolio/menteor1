import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}
export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-4 text-center bg-gradient-to-b from-[#E5F4F2] to-[#F8F9FF] transition-colors duration-700 ease-in-out hover:bg-gradient-to-t  hover:from-[#E5F4F2] hover:to-[#F8F9FF] py-8 backdrop-blur-sm rounded-lg   hover:shadow-md">
      <CardHeader className="p-0 mb-5 text-center">
        <p className="text-5xl">{icon}</p>
      </CardHeader>
      <CardTitle className="font-syne mx-auto">{title}</CardTitle>
      <CardDescription className="px-4 font-inter">
        {description}
      </CardDescription>
    </Card>
  );
}
