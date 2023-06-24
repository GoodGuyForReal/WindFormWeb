import CheckDefault from "./checkDefault/CheckDefault";
import CheckDisable from "./checkDisable/CheckDisable";
import CheckOutline from "./checkOutline/CheckOutline";
import CheckWithLabelTS from "./checkWithLabel/CheckWithLabel";

export const CheckBoxMain = [
  {
    title: "Check Box",
    subComponent: [
      {
        name: "Input Checkbox Default",
        component: <CheckDefault />,
        code: "app/doc/tabs/checkBox/checkDefault/CheckDefault.tsx",
        href: "CheckDefault",
      },
      {
        name: "Input Check Outline",
        component: <CheckOutline />,
        code: "app/doc/tabs/checkBox/checkOutline/CheckOutline.tsx",
        href: "CheckOutline",
      },
      {
        name: "Input Check With Label",
        component: <CheckWithLabelTS />,
        code: "app/doc/tabs/checkBox/checkWithLabel/CheckWithLabel.tsx",
        href: "CheckWithLabelTS",
      },
      {
        name: "Input Check Disable",
        component: <CheckDisable />,
        code: "app/doc/tabs/checkBox/checkDisable/CheckDisable.tsx",
        href: "CheckDisable",
      },
    ],
  },
];
