"use client";
import InputMultiSelectV2TS from "@/app/doc/tabs/components/multiSelect/inputMultiSelectV2/inputMultiSelectV2TS";
import TabDefaultTS from "@/app/doc/tabs/components/tabs/tabDefault/TabDefaultTS";
import CheckWithLabelTS from "@/app/doc/tabs/components/checkBox/checkWithLabel/CheckWithLabelTS";
import React from "react";
import Link from "next/link";
import ToastDefault from "@/app/doc/tabs/components/toast/toastDefault/ToastDefault";
import ToggleWithLabel from "@/app/doc/tabs/components/toggleSwitch/toggleWithLabel/ToggleWithLabel";
import InputPasswordTS from "@/app/doc/tabs/components/inputs/inputPassword/InputPasswordTS";
import InputFileDefaultTS from "@/app/doc/tabs/components/fileInput/inputFileDefault/InputFileDefaultTS";
import DropDownIcon from "@/app/doc/tabs/components/dropdown/dropDownIcon/DropDownIcon";

const ShowCase = () => {
  return (
    <div className="relative isolate h-96 w-full overflow-hidden">
      <div className="absolute bottom-0 z-10 h-[50%] w-full bg-gradient-to-b from-white/0 to-white" />

      {/*   
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
   */}
      {/* <Link
        href={"/doc"}
        className="absolute bottom-10 left-[45%] z-20 rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Go to Docs
      </Link> */}

      <div>
        {/* <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div> */}

        <div className="absolute z-0 mt-16 flex w-full gap-4">
          <div className="flex w-full flex-col gap-5">
            <TabDefaultTS />
            <InputMultiSelectV2TS />
            <CheckWithLabelTS />
          </div>
          <div className="flex w-full flex-col gap-5">
            <div className="flex justify-between">
              <ToggleWithLabel />
              <DropDownIcon />
            </div>
            <InputPasswordTS />
            <ToastDefault />
          </div>
          <div className="flex w-full flex-col gap-5">
            <InputFileDefaultTS />
            <InputMultiSelectV2TS />
            <CheckWithLabelTS />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
