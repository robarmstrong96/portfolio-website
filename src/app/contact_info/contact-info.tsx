"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function DisplayContactInfoModal() {
  const [open, isOpen] = useState(false);
  return (
    <>
      <button
        className="rounded-md px-3 py-2 font-medium text-amber-700 transition-colors hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
        onClick={() => isOpen(!open)}
      >
        <span
          className="relative flex before:absolute before:left-0 before:-bottom-1.5 before:block before:h-[2px] before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-600 before:transition before:duration-300 before:ease-in-out hover:before:scale-x-100 dark:before:bg-amber-300"
        >
          Contact Info
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 dark:bg-black dark:bg-opacity-75 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-amber-50/95 text-left shadow-xl transition-all dark:bg-stone-900/90 sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex-col sm:items-start">
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-amber-900 dark:text-amber-200"
                        >
                          Email
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100">
                            <a href="mailto:kylearmstrong96@outlook.com">
                              kylearmstrong96@outlook.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-amber-900 dark:text-amber-200"
                        >
                          Github
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100">
                            <a
                              href="https://github.com/robarmstrong96"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              github.com/robarmstrong96
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-amber-900 dark:text-amber-200"
                        >
                          LinkedIn
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100">
                            <a
                              href="https://www.linkedin.com/in/robert-kyle-armstrong/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              linkedin.com/in/robert-kyle-armstrong/
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
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
