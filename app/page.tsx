import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";
import { LogoTicker } from "@/components/logo-ticker";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/components/call-to-action";
import { ProductShowcase } from "@/components/product-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
