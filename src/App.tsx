import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./app/components/Hero";
import Roadmap from "./app/components/RoadMap";
import WhyNow from "./app/components/WhyNow";
import JeongwonDream from "./app/components/JeongwonDream";
import OurHome from "./app/components/OurHome";
import FinancialPlan from "./app/components/FinancialPlan";
import ClosingMessage from "./app/components/ClosingMessage";
import Character from "./app/components/Character";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll animation setup
    gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50">
      <Hero />
      <Roadmap />
      <WhyNow />
      <JeongwonDream />
      <OurHome />
      <FinancialPlan />
      <ClosingMessage />
    </div>
  );
}
