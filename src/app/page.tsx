import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {Metadata} from "next";
import Features from "@/components/Features";
import Brands from "@/components/Brands";

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
      <Features />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}
