import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Hero from "@/app/components/hero";
import Portfolio from "@/app/components/portfolio";
import Service from "@/app/components/service";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
   <div>
 <Hero/>
 <About/>
 <Service/>
 <Skills/>
 <Portfolio/>
 <Contact/>
   </div>
  );
}
