import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

// Custom 404 Not Found page matching Sol's editorial layout and typography.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111111]">
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-[1040px] flex-col justify-center px-[20px] py-[120px]">
        <div className="flex items-center gap-[8px] mb-[24px]">
          <img
            src="/logo.png"
            alt="Sol"
            width={30}
            height={30}
            className="size-[30px] object-contain select-none invert"
            draggable={false}
          />
          <span className="font-serif text-[32px] leading-none font-medium tracking-[-0.03em]">
            Sol
          </span>
        </div>

        <h1 className="dia-h1 mb-[16px]">Page not found</h1>
        <p className="mb-[32px] max-w-[480px] text-[16px] leading-[1.5] text-black/60">
          The page you are looking for does not exist or has been moved.
        </p>

        <div>
          <Link
            href="/"
            className="inline-flex h-[48px] items-center justify-center rounded-full bg-black px-[24px] text-[16px] font-normal text-[#f8f8f8] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Back to Sol Home
          </Link>
        </div>
      </main>
    </div>
  );
}
