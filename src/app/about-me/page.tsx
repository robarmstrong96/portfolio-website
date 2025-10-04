import { BackgroundGlow } from "./components/background-glow";
import { ConnectSection } from "./components/connect-section";
import { HeroSection } from "./components/hero-section";
import { PassionSection } from "./components/passion-section";

export default function Page() {
  return (
    <div className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden bg-gradient-to-br from-[#fff3e1] via-[#fde2bb] to-[#fdf3e6] pb-16 dark:from-[#1d140d] dark:via-[#21170e] dark:to-[#0c0a09]">
      <BackgroundGlow />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-16 pb-32 sm:px-10 lg:px-16">
        <HeroSection />
        <PassionSection />
        <ConnectSection />
      </div>
    </div>
  );
}
