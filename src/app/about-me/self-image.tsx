"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    <div className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center overflow-hidden rounded-3xl">
      <div
        aria-hidden="true"
        className="skeleton-avatar"
        style={{
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? "visible" : "hidden",
          transition: "opacity 0.4s ease-out, visibility 0.4s ease-out",
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
        className="rounded-3xl object-cover shadow-md"
        onLoad={handleImageLoad}
      />
    </div>
  );
}
