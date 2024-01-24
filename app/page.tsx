import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mainzelliste",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
