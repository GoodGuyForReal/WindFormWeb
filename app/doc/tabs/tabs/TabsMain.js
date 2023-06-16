import TabDefaultTS from "../tabs/tabDefault/TabDefaultTS";
import TabLineTS from "./tabLine/TabLineTS";
import TabOutlineTS from "./tabOutline/TabOutlineTS";

export const TabsMain = [
  {
    title: "Tabs",
    subComponent: [
      {
        name: "Tab Default",
        component: <TabDefaultTS />,
        code: "tabs/tabDefault/TabDefaultTS.tsx",
        href: "TabDefault",
      },
      {
        name: "Tab Outline",
        component: <TabOutlineTS />,
        code: "tabs/tabOutline/TabOutlineTS.tsx",
        href: "TabOutlineTS",
      },
      {
        name: "Tab Line",
        component: <TabLineTS />,
        code: "tabs/tabLine/TabLineTS.tsx",
        href: "TabLine",
      },
    ],
  },
];
