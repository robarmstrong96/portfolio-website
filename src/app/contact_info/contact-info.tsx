"use client";

import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ContactMethod = {
  label: string;
  href: string;
  display: string;
  icon: string;
};

export default function DisplayContactInfoModal() {
  const [open, setOpen] = useState(false);

  const contactMethods = useMemo<ContactMethod[]>(
    () => [
      {
        label: "Email",
        href: "mailto:kylearmstrong96@outlook.com",
        display: "kylearmstrong96@outlook.com",
        icon: "✉️",
      },
      {
        label: "Github",
        href: "https://github.com/robarmstrong96",
        display: "github.com/robarmstrong96",
        icon: "💻",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/robert-kyle-armstrong/",
        display: "linkedin.com/in/robert-kyle-armstrong/",
        icon: "🔗",
      },
    ],
    []
  );

  return (
    <>
      <button
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-500/40 bg-amber-100/60 px-4 py-2 text-sm font-semibold text-amber-800 transition-all hover:border-amber-500 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-amber-400/40 dark:bg-amber-900/30 dark:text-amber-100 dark:hover:border-amber-300 dark:hover:bg-amber-900/20"
        onClick={() => setOpen(true)}
        type="button"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-200/60 via-orange-200/50 to-amber-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-500/30 dark:via-orange-500/30 dark:to-amber-400/30"
        />
        <span>Contact Info</span>
        <span aria-hidden className="text-lg leading-none">✉️</span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity dark:bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative mx-auto w-full max-w-lg transform overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/95 text-left shadow-2xl transition-all dark:border-stone-700/70 dark:bg-stone-950/90">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-100/70 via-transparent to-orange-100/60 dark:from-stone-900/40 dark:via-transparent dark:to-stone-800/30"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 dark:from-amber-400 dark:via-orange-500 dark:to-amber-500"
                  />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/60 bg-white/70 text-stone-600 transition-all hover:scale-105 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-stone-700/60 dark:bg-stone-900/80 dark:text-amber-200 dark:hover:text-amber-100"
                  >
                    <span aria-hidden>×</span>
                    <span className="sr-only">Close contact info</span>
                  </button>

                  <div className="relative space-y-6 px-6 py-6 sm:px-8">
                    <div className="space-y-2 text-left">
                      <Dialog.Title className="text-2xl font-semibold text-stone-900 dark:text-amber-100">
                        Let’s connect
                      </Dialog.Title>
                      <Dialog.Description className="text-sm text-stone-600 dark:text-amber-200/80">
                        Pick whichever works best—email for direct contact or the socials to see what I’m working on.
                      </Dialog.Description>
                    </div>

                    <ul className="grid gap-3">
                      {contactMethods.map((method) => {
                        const isExternal = method.href.startsWith("http");

                        return (
                          <li key={method.label}>
                            <a
                              className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-amber-200/70 bg-white/80 px-4 py-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-stone-700/60 dark:bg-stone-900/70"
                              href={method.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                            >
                              <span
                                aria-hidden
                                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(255, 214, 153, 0.25), rgba(255, 240, 214, 0.45))",
                                }}
                              />
                              <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl dark:bg-amber-500/20" aria-hidden>
                                  {method.icon}
                                </span>
                                <div>
                                  <p className="text-sm font-semibold text-stone-900 dark:text-amber-100">{method.label}</p>
                                  <p className="text-sm text-stone-600 transition-colors duration-300 group-hover:text-stone-800 dark:text-amber-200/80 dark:group-hover:text-amber-100">
                                    {method.display}
                                  </p>
                                </div>
                              </div>
                              <span
                                className="text-sm font-medium text-amber-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-amber-300"
                                aria-hidden
                              >
                                {isExternal ? "↗" : "→"}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
