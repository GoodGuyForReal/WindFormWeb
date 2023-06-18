import ModalSuccess from "./modalSuccess/ModalSuccess";
import ModalFail from "./ModalFail/ModalFail";
import ModalInfo from "./modalWithAction/ModalWithAction";
import ModalWarning from "./modalWarning/ModalWarning";

export const ModalMain = [
  {
    title: "Modals",
    subComponent: [
      {
        name: "Modal Success",
        component: <ModalSuccess />,
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ModalSuccess",
      },
      {
        name: "Modal Warning",
        component: <ModalFail />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ModalFail",
      },
      {
        name: "Modal Info",
        component: <ModalInfo />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ToastInfo",
      },
      {
        name: "Modal Fail",
        component: <ModalWarning />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ModalWarning",
      },
    ],
  },
];
