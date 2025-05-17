import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import DemoVideo from "../components/sections/demo-video/default";
import Pricing from "../components/sections/pricing/default";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TechStack from "../components/sections/tech-stack/default";
import About from "../components/sections/about/default";
import Team from "../components/sections/team/default";
import Footer from "../components/sections/footer/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Items />
      <DemoVideo />
      <Pricing />
      <About />
      <Team />
      <Footer />
    </main>
  );
}
