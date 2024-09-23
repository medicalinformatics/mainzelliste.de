import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import { Metadata } from "next";
import About from "@/app/components/About";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Mainzelliste",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
