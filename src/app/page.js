import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import InfoSection from '@/components/sections/InfoSection'
import NovedadesSection from '@/components/sections/NovedadesSection'
import EventosSection from '@/components/sections/EventosSection'
import MapSection from '@/components/sections/MapSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <NovedadesSection /> */}
      {/* <EventosSection /> */}
      <InfoSection />
      <MapSection />
      <Footer />
    </main>
  )
}