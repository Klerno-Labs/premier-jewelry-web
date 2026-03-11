import { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Pegrio provides top-tier strategic consulting, digital transformation, and brand development services to elevate your business potential.",
  openGraph: {
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}