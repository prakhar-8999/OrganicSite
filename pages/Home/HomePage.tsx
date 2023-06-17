import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Content />
      <Products />
    </>
  );
};

export default HomePage;
