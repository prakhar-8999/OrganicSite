import Content from "@/components/Content";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Content />
      <Products />
      <Pricing />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <Footer />
    </>
  );
};

export default HomePage;
