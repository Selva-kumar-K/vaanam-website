import Copyrights from "@/components/Copyrights";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JobSection from "@/components/JobSection";
export default function Home() {
  return (
    <main className="font-josefin">
      <HeroSection />
      <JobSection />
      <Footer />
      <Copyrights />
    </main>
  );
}
