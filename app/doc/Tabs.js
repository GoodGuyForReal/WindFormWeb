import Intro from "./tabs/intro/Intro";
import Usage from "./tabs/usage/Usage";

import { HomeIcon, CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { InputMain } from "./tabs/components/inputs/InputMain";
import { buttonMain } from "./tabs/components/buttons/Buttonmain";
import { CheckBoxMain } from "./tabs/components/checkBox/CheckBoxMain";
import { ToggleSwitchMain } from "./tabs/components/toggleSwitch/ToggleSwitchMain";
import { TabsMain } from "./tabs/components/tabs/TabsMain";
import { MultiSelectMain } from "./tabs/components/multiSelect/MultiSelectMain";
import { FileInputMain } from "./tabs/components/fileInput/FileInputMain";


import DocSection from "@/components/DocSection";

export const tabs = [
  {
    id: 0,
    title: "Getting Started",
    section: <Intro />,
    icon: <HomeIcon className="w-h-5 h-5" />,
  },
  {
    id: 1,
    title: "Installation",
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
    title: "Multi Select",
    section: <DocSection section={MultiSelectMain} />,
    list: MultiSelectMain,
  },
  {
    id: 8,
    title: "File Input",
    section: <DocSection section={FileInputMain} />,
    list: FileInputMain,
  },
];
