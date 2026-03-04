import About from "@/components/about/About";
import Background from "@/components/background/Background";
import Feedback_list from "@/components/feedback__list/Feedback_list";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Zap from "@/components/zap/Zap";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Background/>
      <Services/>
      <About/>
      <Feedback_list/>
      <Zap/>
    </main>
  );
}
