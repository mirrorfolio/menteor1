import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";

export default function Home() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  return (
  <main className="flex flex-col gap-8">
    <Hero />
    <Features />
    <About />
  </main>
  )
}
