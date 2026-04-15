import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Products />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
