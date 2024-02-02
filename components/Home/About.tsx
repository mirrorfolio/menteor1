import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function About() {
  return (
    <>
      <section className="md:mb-32 gap-4 grid  justify-around max-w-7xl mx-auto py-10">
        <div className="w-full grid grid-cols-1 gap-4  p-4 sm:p-10">
          <h2 className="text-2xl sm:text-4xl font-bold font-syne">
            Nurturing Growth, <br /> One Friendship at a Time
          </h2>
          <p className="font-inter md:w-2/3">
            Discover Menteor, a tight-knit community of skilled personals, where
            genuine connections and shared self-discovery fuel our platform.
            Beyond who we are as individuals, we unite in a passion for learning
            and a shared commitment to personal and professional growth.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row col-auto gap-4  p-4 sm:p-10">
          <div className="w-full md:max-w-lg">
            <Image
              src="/img/businessman.svg"
              alt="About image"
              width={300}
              height={300}
              loading="lazy"
              style={{ objectFit: "contain" }}
              className="border-black border-b-[1px]"
            />
          </div>
          <div className="w-full flex flex-col gap-4 md:flex-1">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="text-3xl font-bold font-syne">Our Roots</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter">
                    Our story begins with casual conversations that evolved into
                    something profound. As we chatted about our individual paths
                    in the world of self-taught development, a common theme
                    emerged — the struggle to navigate a complex career without
                    guidance. We shared the challenges, the victories, and the
                    realization that having a mentor, a "big brother," made all
                    the difference.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="text-3xl font-bold font-syne">
                    The Birth of
                    <span className="text-[#009379] text-2xl ml-2 md:text-4xl">
                      Menteor
                    </span>
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter">
                    Our story begins with casual conversations that evolved into
                    something profound. As we chatted about our individual paths
                    in the world of self-taught development, a common theme
                    emerged — the struggle to navigate a complex career without
                    guidance. We shared the challenges, the victories, and the
                    realization that having a mentor, a "big brother," made all
                    the difference.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h2 className="text-3xl font-bold font-syne">
                    Our Heartfelt Mission
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-inter">
                    Menteor is more than just a platform; it's a heartfelt
                    solution crafted by friends who understand the
                    transformative power of mentorship. Our journey, marked by
                    mutual support and collaborative growth, inspired us to
                    create a space where others can find the guidance and
                    community they need.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-around  relative md:mb-32 max-w-7xl mx-auto py-10 ">
        <div className="w-full md:sticky md:top-36 md:h-1/2">
          <div className=" flex flex-col items-start  gap-4 p-4 sm:p-10 ">
            <p className="text-3xl font-bold font-syne">📈</p>
            <h2 className="text-2xl sm:text-4xl font-bold font-syne">
              Nurturing Growth, <br /> One Friendship at a Time
            </h2>
            <p className="font-inter mx-auto">
              Welcome to Menteor, a platform born from the genuine bonds of
              friendship and a shared journey of self-discovery. We're not just
              developers; we're a close-knit group of individuals who found each
              other on the 100xdevs Discord, connected by a passion for learning
              and a desire to grow both personally and professionally.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col content-center gap-4 sm:gap-8">
          <div className="flex flex-col  gap-4 p-4 sm:p-10   backdrop-blur-sm rounded-lg transition-all duration-700 ease-in-out hover:bg-[#E5F4F2] md:hover:shadow-md">
            <p className="text-3xl font-bold font-syne">🌱</p>
            <h2 className="text-3xl font-bold font-syne">Our Roots</h2>
            <p className="font-inter mx-auto">
              Our story begins with casual conversations that evolved into
              something profound. As we chatted about our individual paths in
              the world of self-taught development, a common theme emerged — the
              struggle to navigate a complex career without guidance. We shared
              the challenges, the victories, and the realization that having a
              mentor, a "big brother," made all the difference.
            </p>
          </div>
          <div className=" flex flex-col  gap-4 p-4 sm:p-10 backdrop-blur-sm rounded-lg transition-all duration-700 ease-in-out hover:bg-[#E5F4F2] md:hover:shadow-md">
            <p className="text-3xl font-bold font-syne">🚀</p>
            <h2 className="text-3xl font-bold font-syne">
              The Birth of
              <span className="text-[#009379] text-2xl md:text-4xl">
                Menteor
              </span>
            </h2>
            <p className="font-inter mx-auto">
              The spark that ignited Menteor came from the collective
              experiences of wasting time, effort, and resources on solo
              journeys. We asked ourselves, "What if we could create a platform
              that provides the mentorship we wished we had?" And so, with the
              spirit of friendship and the aspiration to make a difference,
              Menteor was born.
            </p>
          </div>
          <div className=" flex flex-col  gap-4 p-4 sm:p-10 backdrop-blur-sm rounded-lg transition-all duration-700 ease-in-out hover:bg-[#E5F4F2] md:hover:shadow-md">
            <p className="text-3xl font-bold font-syne"> 💙</p>
            <h2 className="text-3xl font-bold font-syne">
              Our Heartfelt Mission
            </h2>
            <p className="font-inter mx-auto">
              Menteor is more than just a platform; it's a heartfelt solution
              crafted by friends who understand the transformative power of
              mentorship. Our journey, marked by mutual support and
              collaborative growth, inspired us to create a space where others
              can find the guidance and community they need.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
}
