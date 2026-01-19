import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/features/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
