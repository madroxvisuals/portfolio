import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/app/_sections/Hero/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import CtaFooter from "@/components/CtaFooter";
import About from "@/app/_sections/About/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BrandSnapshots from "@/components/BrandSnapshots";
import FeaturedProjects from "@/components/FeaturedProjects";

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
