import FeatureCard from "../ui/featureCard";

import FeatureLists from "@/store/features";

export default function Features() {
  return (
    <section className="flex flex-col gap-4 justify-around items-center  max-w-7xl mx-auto py-10 my-20" aria-labelledby="USP section">
      <div className="w-full">
        <div className=" flex flex-col  gap-4 p-4 sm:p-10 ">
          <h2 className="text-2xl md:text-4xl text-center font-bold font-syne">
            Why Menteor?
          </h2>
          <p className="text-smmd:text-md text-center font-inter w-3/4 mx-auto">
            Built on the conviction that goals are more attainable with right
            mentorship, Hence,{" "}
            <span className="font-bold  font-syne">Menteor</span> is the
            heartfelt journey of those who bring it to life. Still, it's not
            just our story. Here's why it's the right choice for both mentors
            and mentees.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 col-auto gap-4 md:gap-8  justify-center items-center mx-auto sm:p-10 w-3/4 sm:w-full">
          <FeatureCard
            title={FeatureLists[0].name}
            description={FeatureLists[0].description}
            image={FeatureLists[0].image}
            className="col-span-2 md:col-span-1 h-full"
          />
          <FeatureCard
            title={FeatureLists[1].name}
            description={FeatureLists[1].description}
            image={FeatureLists[1].image}
            className="col-span-2 md:col-span-1 h-full"
          />
          <FeatureCard
            title={FeatureLists[2].name}
            description={FeatureLists[2].description}
            image={FeatureLists[2].image}
            className="col-span-2 h-full"
          />
        </div>
      </div>
    </section>
  );
}
