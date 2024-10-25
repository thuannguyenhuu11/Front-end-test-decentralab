import ContactSection from '@/components/ContactSection/ContactSection';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <ContactSection />
    </main>
  );
}
