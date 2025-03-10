import { Footer2 } from "@/components/common/footer";
import { Banner } from "@/components/main-section/banner";
import { Feature6 } from "@/components/main-section/dashboard-overview";
import { Hero1 } from "@/components/main-section/hero";
import { Stats } from "@/components/main-section/stats";
import { Testimonial } from "@/components/main-section/testimonial";
import TextReveal from "@/components/main-section/text-reveal";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <Hero1 />
      <TextReveal />
      <Feature6 />
      <Stats />
      <Testimonial />
      <Banner />
      <Footer2 />
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  )
}
