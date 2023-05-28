import TabDefaultTS from "../tabs/tabDefault/TabDefaultTS";
import TabLineTS from "./tabLine/TabLineTS";

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
        name: "Tab Line",
        component: <TabLineTS />,
        code: ``,
        href: "TabLine",
      },
    ],
  },
];
