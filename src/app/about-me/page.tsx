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
        <div className="relative min-w-[192px] min-h-[192px] max-h-[384px] max-w-[384px] py-5">
          <SelfImage />
        </div>
        <div className="px-5 flex flex-col justify-center justify-items-center dark:text-slate-300">
          <div className="text-5xl sm:text-2xl md:text-3xl lg:text-4xl flex justify-start">
            <h1 className="font-semibold">Programmer, tinkerer, hobbyist. </h1>
          </div>
          <div className="flex justify-start text-left">
            <h2 className="font-medium text-xl sm:text-md md:text-md lg:text-md ">
              I finally got around to building this site...
            </h2>
          </div>
          <div className="py-6 flex justify-start max-w-[700px]">
            <div className="text-md sm:text-md md:text-md lg:text-md ">
              <p>
                Hello! I&apos;m a full-stack software engineer who enjoys
                everything technology, listenting to IDM (on rare occassions
                even attempting to produce electronic music), indulging in
                expensive hobbies, and several other things. I hope to flesh out
                this website over the coming years with whatever work I&apos;ve
                done and think is worth sharing. I am currently in the process of
                filling out my &apos;Projects&apos; scetion with current projects I&apos;ve
                worked on and hope to have it done soon.
              </p>
              <br/>
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
      alt="A picture of me"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
      placeholder = 'empty'
      className="rounded-[50%] shadow-md"
    />
  );
}
