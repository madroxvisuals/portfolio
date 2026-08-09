import Header from "@/app/_sections/Header";
import Hero from "@/app/_sections/Hero";
import Services from "@/app/_sections/Services";
import Marquee from "@/app/_sections/Marquee";
import HowWeWork from "@/app/_sections/HowWeWork";
import CtaFooter from "@/app/_sections/Footer/CtaFooter";
import About from "@/app/_sections/About/About";
import WhyChooseUs from "@/app/_sections/WhyChooseUs";
import Testimonials from "@/app/_sections/Testimonials/Testimonials";
import BrandSnapshots from "@/app/_sections/BrandSnapshots/BrandSnapshots";
import FeaturedProjects from "@/app/_sections/FeaturedProjects/FeaturedProjects";

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
              <CtaFooter />
          </main>
      </div>
  );
}
