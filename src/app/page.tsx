import dynamic from "next/dynamic";
import Hero from "@/app/_sections/Hero";
import Header from "@/app/_sections/Header";
import Marquee from "@/app/_sections/Marquee";
import Services from "@/app/_sections/Services";
import About from "@/app/_sections/About/About";
import HowWeWork from "@/app/_sections/HowWeWork";
import Footer from "@/app/_sections/Footer/Footer";
import WhyChooseUs from "@/app/_sections/WhyChooseUs";
import Testimonials from "@/app/_sections/Testimonials/Testimonials";
import BrandSnapshots from "@/app/_sections/BrandSnapshots/BrandSnapshots";

const FeaturedProjects = dynamic(
  () => import("@/app/_sections/FeaturedProjects/FeaturedProjects"),
  { ssr: true }
);

export default function Home() {
  return (
      <div className="App" data-testid="madrox-app">
          <Header />
          <main>
              <Hero />
              <About />
              <Marquee testId="marquee-mid" />
              <BrandSnapshots />
              <Services />
              <WhyChooseUs />
              <FeaturedProjects />
              <HowWeWork />
              <Testimonials />
              <Footer />
          </main>
      </div>
  );
}
