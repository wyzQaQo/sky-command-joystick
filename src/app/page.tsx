export const dynamicParams = false;
import Hero from "@/components/sections/Hero";
import ProductCategories from "@/components/sections/ProductCategories";
import Industries from "@/components/sections/Industries";
import TechnicalSpecs from "@/components/sections/TechnicalSpecs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import RFQ from "@/components/sections/RFQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProductCategories />
      <Industries />
      <TechnicalSpecs />
      <WhyChooseUs />
      <RFQ />
      <Footer />
    </main>
  );
}
