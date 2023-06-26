import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";

export default function App() {
  return (
    <div className="snap-y snap-mandatory">
      <Hero1 className="snap-always snap-center" />
      <Hero2 className="snap-always snap-center" />
      <Hero3 className="snap-always snap-center" />
      <Hero4 className="snap-always snap-center" />
      <Hero5 className="snap-always snap-center" />
    </div>

  )
}