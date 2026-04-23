import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {Metadata} from "next";
import Features from "@/components/Features";
import Publications from "@/components/Publications";
import Brands from "@/components/Brands";
import UseCaseCarousel from "@/components/UseCases";

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
      <UseCaseCarousel />
      <Features />
      <Brands />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}
