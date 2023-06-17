import ModalSuccess from "./modalSuccess/ModalSuccess";
import ModalFail from "./ModalFail/ModalFail";
import ModalInfo from "./modalInfo/ModalInfo";
import ModalWarning from "./modalWarning/ModalWarning";

export const ModalMain = [
  {
    title: "Modals",
    subComponent: [
      {
        name: "Toast Default",
        component: <ModalSuccess />,
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ToastDefault",
      },
      {
        name: "Toast Warning",
        component: <ModalFail />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ToastWarning",
      },
      {
        name: "Toast Info",
        component: <ModalInfo />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Toast Fail",
        component: <ModalWarning />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ToastFail",
      },
    ],
  },
];
