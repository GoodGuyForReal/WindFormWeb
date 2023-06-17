"use client";
import InputMultiSelectV2TS from "@/app/doc/tabs/multiSelect/inputMultiSelectV2/inputMultiSelectV2TS";
import CheckWithLabelTS from "@/app/doc/tabs/checkBox/checkWithLabel/CheckWithLabelTS";
import React from "react";
import ToastDefault from "@/app/doc/tabs/toast/modalSuccess/ModalSuccess";
import ToggleWithLabel from "@/app/doc/tabs/toggleSwitch/toggleWithLabel/ToggleWithLabel";
import InputPasswordTS from "@/app/doc/tabs/inputs/inputPassword/InputPasswordTS";
import InputFileDefaultTS from "@/app/doc/tabs/fileInput/inputFileDefault/InputFileDefaultTS";
import DropDownIcon from "@/app/doc/tabs/dropdown/dropDownIcon/DropDownIcon";
import TabOutlineTS from "@/app/doc/tabs/tabs/tabOutline/TabOutlineTS";

const ShowCase = () => {
  return (
    <div className="relative isolate h-96 w-full overflow-hidden">
      <div className="absolute bottom-0 z-10 h-[30%] w-full bg-gradient-to-b from-white/0 to-white" />

      <div className="absolute z-0 mt-16 flex w-full gap-4">
        <div className="flex w-full flex-col gap-5">
          <TabOutlineTS />
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
  );
};

export default ShowCase;
