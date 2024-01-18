import AboutSectionTwo from "./AboutSectionTwo";
import Features from "./Features";

const About = () => {
    return (
        <section id="about" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-black">
            <Features />
            <AboutSectionTwo />
        </section>
    );
  };
  
  export default About;