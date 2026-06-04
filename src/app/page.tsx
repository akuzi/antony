import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Photography from "@/components/Photography";
import CalculatorCulture from "@/components/CalculatorCulture";
import Books from "@/components/Books";
import Writing from "@/components/Writing";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Writing />
      <Photography />
      <CalculatorCulture />
      <Books />
      <Connect />
    </main>
  );
}
