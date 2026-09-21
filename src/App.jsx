import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import ProductCatalogue from "./components/sections/ProductCatalogue";
import Applications from "./components/sections/Applications";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Architects from "./components/sections/Architects";
import FAQ from "./components/sections/FAQ";
import EnquiryCTA from "./components/sections/EnquiryCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-ivory">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <ProductCatalogue />
        <Applications />
        <WhyChooseUs />
        <Architects />
        <FAQ />
        <EnquiryCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
