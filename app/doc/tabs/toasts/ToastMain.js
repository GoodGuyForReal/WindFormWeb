import ToastFail from "./toastFail/ToastFail";
import ToastSuccess from "./toastSuccess/ToastSuccess";
import ToastWarning from "./toastWarning/ToastWarning";
import ToastWithAction from "./toastWithAction/ToastWithAction";

export const ToastMain = [
  {
    title: "Modals",
    subComponent: [
      {
        name: "Modal Success",
        component: <ToastSuccess />,
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ModalSuccess",
      },
      {
        name: "Modal Warning",
        component: <ToastFail />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ModalFail",
      },
      {
        name: "Modal Info",
        component: <ToastWithAction />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Modal Fail",
        component: <ToastWarning />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ModalWarning",
      },
    ],
  },
];
