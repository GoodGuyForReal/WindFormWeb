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
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ToastDefault",
      },
      {
        name: "Toast Warning",
        component: <ToastWarning />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ToastWarning",
      },
      {
        name: "Toast Info",
        component: <ToastInfo />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Toast Fail",
        component: <ToastFail />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ToastFail",
      },
    ],
  },
];
