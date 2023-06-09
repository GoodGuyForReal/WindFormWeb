
import ToastDefault from "./toastDefault/ToastDefault";
import ToastFail from "./toastFail/ToastFail";
import ToastInfo from "./toastInfo/ToastInfo";
import ToastWarning from "./toastWarning/ToastWarning";

export const ToastMain = [
  {
    title: "Toast Cards",
    subComponent: [
      {
        name: "Toast Default",
        component: <ToastDefault />,
        code: ``,
        href: "ToastDefault",
      },
      {
        name: "Toast Warning",
        component: <ToastWarning />,
        code: ``,
        href: "ToastWarning",
      },
      {
        name: "Toast Info",
        component: <ToastInfo />,
        code: ``,
        href: "ToastInfo",
      },
      {
        name: "Toast Fail",
        component: <ToastFail />,
        code: ``,
        href: "ToastFail",
      },
    ],
  },
];
