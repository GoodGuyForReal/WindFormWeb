import CheckDefaultTS from "./checkDefault/CheckDefaultTS";
import CheckDisableTS from "./checkDisable/CheckDisableTS";
import CheckOutlineTS from "./checkOutline/CheckOutlineTS";
import CheckWithLabelTS from "./checkWithLabel/CheckWithLabelTS";

export const CheckBoxMain = [
  {
    title: "Check Box",
    subComponent: [
      {
        name: "Input Checkbox Default",
        component: <CheckDefaultTS />,
        code: ``,
        href: "InputCheckboxDefault",
      },
      {
        name: "Input Check Outline",
        component: <CheckOutlineTS />,
        code: ``,
        href: "CheckOutline",
      },
      {
        name: "Input Check With Label",
        component: <CheckWithLabelTS />,
        code: ``,
        href: "InputCheckWithLabel",
      },
      {
        name: "Input Check Disable",
        component: <CheckDisableTS />,
        code: ``,
        href: "InputCheckDisable",
      },
    ],
  },
];
