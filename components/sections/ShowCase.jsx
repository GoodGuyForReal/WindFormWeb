"use client";
import MultiSelectWithImage from "@/app/doc/tabs/select/inputMultiSelectV2/MultiSelectWithImage";
import CheckWithLabelTS from "@/app/doc/tabs/checkBox/checkWithLabel/CheckWithLabel";
import React from "react";
import ToggleWithLabel from "@/app/doc/tabs/toggleSwitch/toggleWithLabel/ToggleWithLabel";
import InputPassword from "@/app/doc/tabs/inputs/inputPassword/InputPassword";
import InputFileDefault from "@/app/doc/tabs/fileInput/inputFileDefault/InputFileDefault";
import DropDownIcon from "@/app/doc/tabs/dropdown/dropDownIcon/DropDownIcon";
import TabOutline from "@/app/doc/tabs/tabs/tabOutline/TabOutline";
import ModalDefault from "@/app/doc/tabs/modals/modalDefault/ModalDefault";

const ShowCase = () => {
  return (
    <div className="relative isolate h-96 w-full overflow-hidden">
      <div className="absolute bottom-0 z-10 h-[30%] w-full bg-gradient-to-b from-white/0 to-white" />

      <div className="absolute z-0 mt-16 flex w-full gap-4">
        <div className="flex w-full flex-col gap-5">
          <TabOutline />
          <MultiSelectWithImage />
          <CheckWithLabelTS />
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex justify-between">
            <ToggleWithLabel />
            <DropDownIcon />
          </div>
          <InputPassword />
          <ModalDefault />
        </div>
        <div className="flex w-full flex-col gap-5">
          <InputFileDefault />
          <MultiSelectWithImage />
          <CheckWithLabelTS />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
