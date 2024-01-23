import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import WaitingListCTA from "@/components/WaitingListCTA";

export default function Home() {
  return (
  <main className="flex flex-col gap-8">
    <Hero />
    <Features />
    <About />
    <WaitingListCTA />
    <Footer />
  </main>
  )
}
