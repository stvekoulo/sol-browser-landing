import { Navbar } from '@/components/Navbar';
import { SunriseHero } from '@/components/SunriseHero';

export default function HomePage() {
  return (
    <div className="fixed inset-0 h-[100svh] w-screen overflow-hidden bg-[#f8f8f8]">
      <Navbar />
      <main className="h-full w-full overflow-hidden">
        <SunriseHero />
      </main>
    </div>
  );
}
