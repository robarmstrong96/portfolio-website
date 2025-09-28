"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Page() {
  return <CenterSection />;
}

function CenterSection() {
  return (
    <div>
      <div className="flex justify-center py-[8%]">
        <div className="min-w-[192px] min-h-[192px] max-h-[384px] max-w-[384px] py-5 max-[384px]:hidden">
          <SelfImage />
        </div>
        <div className="px-5 flex flex-col justify-center justify-items-center dark:text-slate-300">
          <div className="text-5xl max-[384px]:text-xl max-[768px]:text-2xl md:text-3xl lg:text-4xl flex justify-start">
            <h1 className="font-semibold">Programmer, tinkerer, hobbyist. </h1>
          </div>
          <div className="py-6 flex justify-start max-w-[700px]">
            <div className="text-md max-[384px]:text-xs max-[768px]:text-sm md:text-md lg:text-md ">
              <h3 className="font-semibold text-xl max-[384px]:text-xs max-[768px]:text-sm md:text-md lg:text-md">
                Welcome to my corner of the web!
              </h3>
              <p>
                I&#39;m a full-stack software engineer with a knack for
                exploring new tech. Whether it&#39;s coding, digging into
                obscure electronic music, or picking up a fresh hobby, I&#39;m
                always finding something new to dive into.
              </p>
              <br />
              <p>
                I enjoy building and experimenting—whether it&#39;s hardware,
                software, or a side project that piques my interest. I&#39;m
                constantly learning and expanding my skill set, from frameworks
                to music production, always focused on creating something
                meaningful and well-crafted.
              </p>
              <br />
              <h3 className="font-semibold text-xl max-[384px]:text-xs max-[768px]:text-sm md:text-md lg:text-md ">
                Plans for this site
              </h3>
              <p>
                This site is still a work-in-progress. I&#39;m working on a
                &#39;Projects&#39; section where you&#39;ll find a selection of
                recent work, projects, and maybe a few experimental ideas.
              </p>
              <br />
              <p>
                Content will continue to evolve here, so check back for updates.
              </p>
              <br />
              <h3 className="font-semibold text-xl max-[384px]:text-xs max-[768px]:text-sm md:text-md lg:text-md ">
                Connect with Me
              </h3>
              <p>
                If you&#39;d like to see more of my work or connect, you can
                reach out via Github, LinkedIn, or email, listed below in the
                &#39;Contact Info&#39; section. I&#39;m always open to
                conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelfImage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasMinDurationElapsed, setHasMinDurationElapsed] = useState(false);
  const minDuration = 300; // Minimum duration for the loading animation in milliseconds
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      // Skip the animation entirely if the image is already in the browser cache
      setHasLoaded(true);
      setHasMinDurationElapsed(true);
      return;
    }

    const timer = setTimeout(() => {
      setHasMinDurationElapsed(true);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  const handleImageLoadComplete = () => {
    setHasLoaded(true);
  };

  const isLoading = !(hasLoaded && hasMinDurationElapsed);

  return (
    <div
      className="flex justify-center items-center rounded-[50%]"
      style={{
        width: "384px",
        height: "384px",
        position: "relative",
      }}
    >
      <DotLottieReact
        src="/image-load.lottie"
        autoplay
        loop
        style={{
          width: 384,
          height: 384,
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
          height: "auto",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
        className="rounded-[50%] shadow-md"
        onLoadingComplete={handleImageLoadComplete}
      />
    </div>
  );
}
