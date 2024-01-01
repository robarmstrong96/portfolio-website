"use client";
import Image from "next/image";

export default function Page() {
  return <CenterSection />;
}

function BottomSection() {
  return null;
}

function CenterSection() {
  return (
    <div>
      <div className="flex justify-center py-[200px]">
        <div className="flex justify-center py-5">
          <SelfImage />
        </div>
        <div className="px-5 flex flex-col justify-center justify-items-center dark:text-slate-300">
          <div className="text-5xl text-right flex justify-start">
            <h1 className="font-semibold">Programmer, tinkerer, hobbyist. </h1>
          </div>
          <div className="flex justify-start text-right">
            <h2 className="font-medium text-xl">
              I finally got around to building this site...
            </h2>
          </div>
          <div className="py-6 flex justify-start max-w-[700px]">
            <div className="text-md">
              <p>
                Hello! I&apos;m a full-stack software engineer who enjoys
                everything technology, listenting to IDM (on rare occassions
                even attempting to produce electronic music), indulging in
                expensive hobbies, and several other things. I hope to flesh out
                this website over the coming years with whatever work I&apos;ve
                done and think is worth sharing. I am currently in the process of
                filling out my &apos;Projects&apos; scetion with current projects I&apos;ve
                worked on.
              </p>
              <br />
              <p>
                Feel free to check out my Github, LinkedIn, and Email down below
                if you&apos;d like to look at any of my work or get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelfImage() {
  return (
    <Image
      src="/me.jpg"
      alt="Me"
      width="384"
      height="384"
      className="rounded-[50%] shadow-md"
    />
  );
}
