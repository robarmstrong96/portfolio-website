"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const DotLottie = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 dark:from-amber-500/30 dark:via-orange-500/30 dark:to-amber-500/30" />
    ),
  }
) as typeof import("@lottiefiles/dotlottie-react").DotLottieReact;

export default function SelfImage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasMinDurationElapsed, setHasMinDurationElapsed] = useState(false);
  const minDuration = 300;
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setHasLoaded(true);
      setHasMinDurationElapsed(true);
      return;
    }

    const timer = setTimeout(() => {
      setHasMinDurationElapsed(true);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  const handleImageLoad = () => {
    setHasLoaded(true);
  };

  const isLoading = !(hasLoaded && hasMinDurationElapsed);

  return (
    <div className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[50%]">
      <DotLottie
        src="/image-load.lottie"
        autoplay
        loop
        style={{
          width: "100%",
          height: "100%",
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? "visible" : "hidden",
          transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />
      <Image
        ref={imageRef}
        src="/me.jpg"
        alt="A picture of me"
        sizes="100vw"
        width={384}
        height={384}
        placeholder="empty"
        style={{
          width: "100%",
          height: "100%",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
        className="rounded-[50%] shadow-md"
        onLoad={handleImageLoad}
      />
    </div>
  );
}
