import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function DocMobileNavbar({ tabs, setActiveTab, activeTab }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="rounded-md bg-blue-500 p-3 text-sm text-slate-50 shadow-xl shadow-blue-200 hover:shadow-blue-400 duration-200"
          onClick={() => setOpen(true)}
        >
          <Bars3Icon className="h-6 w-6"/>
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="flex gap-2 px-4 sm:px-6">
                        <button
                          type="button"
                          className="h-6 w-6 rounded-md text-gray-800"
                          onClick={() => setOpen(false)}
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Documentation
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {tabs.map((tab, index) => (
                          <div key={index}>
                            <button
                              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:underline duration-200${
                                activeTab === index
                                  ? "  rounded-sm bg-blue-50 font-medium text-blue-600"
                                  : " text-gray-600"
                              }`}
                              onClick={() => setActiveTab(index)}
                            >
                              {tab.icon && (
                                <span
                                  className={` rounded-md bg-blue-500 p-1.5 text-white ${
                                    activeTab === index
                                      ? "shadow-lg shadow-blue-400 duration-200"
                                      : " "
                                  }`}
                                >
                                  {tab.icon}
                                </span>
                              )}
                              {tab.title}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
