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
        code: ``,
        href: "TabDefault",
      },
      {
        name: "Tab Outline",
        component: <TabOutlineTS />,
        code: ``,
        href: "TabOutlineTS",
      },
      {
        name: "Tab Line",
        component: <TabLineTS />,
        code: ``,
        href: "TabLine",
      },
    ],
  },
];
