import "./App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProductsListSection from "@/components/ProductsListSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BrandsSection from "@/components/BrandsSection";
import ContactSection_Dubai from "@/components/ContactSection-dubai";
import ContactSection_Qatar from "@/components/ContactSection-qatar";
import Footer from "@/components/Footer";
import ProductsFor from "./components/ProductsFor";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutSection />
        <HeroSection />
        <ProductsFor />
        <ExpertiseSection />
        <ProductsListSection />
        <WhyChooseSection />
        <BrandsSection />
        <ContactSection_Dubai />
        <ContactSection_Qatar />
      </main>
      <Footer />
    </div>
  );
};

export default App;
