import FeatureCard from "./components/FeatureCard";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";

const App = () => {
  return (
  <div className="w-screen h-screen relative ">
    <HeroSection />
    <OrderSection />
    <FeaturesSection />
    <FeatureCard />
  </div>
  
  );
};

export default App
