import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { FeaturesContent } from '@/components/features/FeaturesContent';

const DESCRIPTION =
  'Sol is built for normal daily browsing with a clean, refined interface, using a fraction of your computer’s memory alongside isolated site sessions, native device mockups, and built-in quick notes.';

export const metadata: Metadata = {
  title: 'Features',
  description: DESCRIPTION,
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Features | Sol Browser',
    description: DESCRIPTION,
    url: '/features',
    images: [
      {
        url: '/captures/memory-benchmark.png',
        alt: 'Windows Task Manager comparing Sol Browser at 25.8 MB RAM vs Comet at 428.9 MB RAM',
      },
    ],
  },
};

// Features route (/features) displaying the Dia-inspired editorial breakdown of Sol.
export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111111]">
      <Navbar />
      <FeaturesContent />
    </div>
  );
}
