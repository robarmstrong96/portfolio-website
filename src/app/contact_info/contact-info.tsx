"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function DisplayContactInfoModal() {
  const [open, isOpen] = useState(false);
  return (
    <>
      <button
        className="font-medium px-3 py-2 text-slate-700 rounded-md"
        onClick={() => isOpen(!open)}
      >
        <span
          className="flex relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1.5 before:left-0 before:bg-slate-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex-col sm:items-start">
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Email
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm text-blue-500 hover:text-blue-900">
                            <a href="mailto:kylearmstrong96@outlook.com">
                              kylearmstrong96@outlook.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Github
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm text-blue-500 hover:text-blue-900">
                            <a
                              href="https://github.com/robarmstrong96"
                              target="_blank"
                            >
                              github.com/robarmstrong96
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 my-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          LinkedIn
                        </Dialog.Title>
                        <div className="mt-0">
                          <p className="text-sm text-blue-500 hover:text-blue-900">
                            <a
                              href="https://www.linkedin.com/in/robert-kyle-armstrong/"
                              target="_blank"
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
