import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Features />
      <About />
    </main>
  );
}
