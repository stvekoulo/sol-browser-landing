import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { SecurityContent } from '@/components/security/SecurityContent';

const DESCRIPTION =
  'Sol keeps your everyday browsing private on your Windows PC, with built-in ad blocking, encrypted local backups, and zero background tracking.';

export const metadata: Metadata = {
  title: 'Security',
  description: DESCRIPTION,
  alternates: {
    canonical: '/security',
  },
  openGraph: {
    title: 'Security | Sol Browser',
    description: DESCRIPTION,
    url: '/security',
  },
};

// Security route (/security) presenting Sol's privacy and security architecture.
export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111111]">
      <Navbar />
      <SecurityContent />
    </div>
  );
}
