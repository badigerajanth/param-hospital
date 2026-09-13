import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DoctorPortfolios from "@/components/DoctorPortfolios";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ReviewsAndMap from "@/components/ReviewsAndMap";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import MobileUtilityBar from "@/components/MobileUtilityBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <AboutSection />
        <DoctorPortfolios />
        <SpecialtiesSection />
        <FacilitiesSection />
        <ReviewsAndMap />
        <AppointmentForm />
      </main>
      <Footer />
      <MobileUtilityBar />
    </div>
  );
}

