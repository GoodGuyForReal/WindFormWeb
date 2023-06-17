import Intro from "./tabs/intro/Intro";
import Usage from "./tabs/usage/Usage";
import DocSection from "@/components/DocSection";

import { HomeIcon, CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { InputMain } from "./tabs/inputs/InputMain";
import { buttonMain } from "./tabs/buttons/Buttonmain";
import { CheckBoxMain } from "./tabs/checkBox/CheckBoxMain";
import { ToggleSwitchMain } from "./tabs/toggleSwitch/ToggleSwitchMain";
import { TabsMain } from "./tabs/tabs/TabsMain";
import { MultiSelectMain } from "./tabs/multiSelect/MultiSelectMain";
import { FileInputMain } from "./tabs/fileInput/FileInputMain";
import { InputDropdown } from "./tabs/inputDropdown/InputDropdown";
import { DropDownMain } from "./tabs/dropdown/DropDownMain";
import { ModalMain } from "./tabs/toast/ModalMain";
import { TextAreaMain } from "./tabs/textArea/TextAreaMain";

export const tabs = [
  {
    id: 0,
    title: "Getting Started",
    section: <Intro />,
    icon: <HomeIcon className="w-h-5 h-5" />,
  },
  {
    id: 1,
    title: "Usage",
    section: <Usage />,
    icon: <CloudArrowDownIcon className="w-h-5 h-5" />,
  },
  {
    id: 2,
    title: "Buttons",
    section: <DocSection section={buttonMain} />,
    list: buttonMain,
  },
  {
    id: 3,
    title: "Inputs",
    section: <DocSection section={InputMain} />,
    list: InputMain,
  },
  {
    id: 4,
    title: "Check Box",
    section: <DocSection section={CheckBoxMain} />,
    list: CheckBoxMain,
  },
  {
    id: 5,
    title: "Toggle Switch",
    section: <DocSection section={ToggleSwitchMain} />,
    list: ToggleSwitchMain,
  },
  {
    id: 6,
    title: "Tabs",
    section: <DocSection section={TabsMain} />,
    list: TabsMain,
  },
  {
    id: 7,
    title: "Select",
    section: <DocSection section={MultiSelectMain} />,
    list: MultiSelectMain,
  },
  {
    id: 8,
    title: "File Input",
    section: <DocSection section={FileInputMain} />,
    list: FileInputMain,
  },
  {
    id: 9,
    title: "Input Dropdown",
    section: <DocSection section={InputDropdown} />,
    list: InputDropdown,
  },
  {
    id: 10,
    title: "Dropdown",
    section: <DocSection section={DropDownMain} />,
    list: DropDownMain,
  },
  {
    id: 11,
    title: "Modals",
    section: <DocSection section={ModalMain} />,
    list: ModalMain,
  },
  {
    id: 12,
    title: "Textareas",
    section: <DocSection section={TextAreaMain} />,
    list: TextAreaMain,
  },
];
