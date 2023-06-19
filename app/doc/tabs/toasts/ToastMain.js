import ToastFail from "./toastFail/ToastFail";
import ToastSuccess from "./toastSuccess/ToastSuccess";
import ToastWarning from "./toastWarning/ToastWarning";
import ToastInfo from "./toastInfo/ToastInfo";

export const ToastMain = [
  {
    title: "Modals",
    subComponent: [
      {
        name: "Toast Success",
        component: <ToastSuccess />,
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ToastSuccess",
      },
      {
        name: "Toast Fail",
        component: <ToastFail />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ToastFail",
      },
      {
        name: "Toast Info",
        component: <ToastInfo />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Toast Warning",
        component: <ToastWarning />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ToastWarning",
      },
    ],
  },
];
