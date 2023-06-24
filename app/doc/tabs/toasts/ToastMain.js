import ToastFail from "./toastFail/ToastFail";
import ToastSuccess from "./toastSuccess/ToastSuccess";
import ToastWarning from "./toastWarning/ToastWarning";
import ToastInfo from "./toastInfo/ToastInfo";

export const ToastMain = [
  {
    title: "Toasts",
    subComponent: [
      {
        name: "Toast Success",
        component: <ToastSuccess />,
        code: "app/doc/tabs/toasts/toastSuccess/ToastSuccess.tsx",
        href: "ToastSuccess",
      },
      {
        name: "Toast Fail",
        component: <ToastFail />,
        code: "app/doc/tabs/toasts/toastFail/ToastFail.tsx",
        href: "ToastFail",
      },
      {
        name: "Toast Info",
        component: <ToastInfo />,
        code: "app/doc/tabs/toasts/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Toast Warning",
        component: <ToastWarning />,
        code: "app/doc/tabs/toasts/toastWarning/ToastWarning.tsx",
        href: "ToastWarning",
      },
    ],
  },
];
