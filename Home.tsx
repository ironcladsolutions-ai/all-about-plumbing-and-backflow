import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import VeteranStory from "@/components/VeteranStory";
import EmergencyBanner from "@/components/EmergencyBanner";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <VeteranStory />
      <EmergencyBanner />
      <Reviews />
      <ServiceArea />
      <ContactForm />
      <Footer />
    </div>
  );
}
