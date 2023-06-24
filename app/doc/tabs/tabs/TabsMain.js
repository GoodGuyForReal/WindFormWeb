import TabDefault from "./tabDefault/TabDefault";
import TabLine from "./tabLine/TabLine";
import TabOutline from "./tabOutline/TabOutline";

export const TabsMain = [
  {
    title: "Tabs",
    subComponent: [
      {
        name: "Tab Default",
        component: <TabDefault />,
        code: "app/doc/tabs/tabs/tabDefault/TabDefault.tsx",
        href: "TabDefault",
      },
      {
        name: "Tab Outline",
        component: <TabOutline />,
        code: "app/doc/tabs/tabs/tabOutline/TabOutline.tsx",
        href: "TabOutlineTS",
      },
      {
        name: "Tab Line",
        component: <TabLine />,
        code: "app/doc/tabs/tabs/tabLine/TabLine.tsx",
        href: "TabLine",
      },
    ],
  },
];
