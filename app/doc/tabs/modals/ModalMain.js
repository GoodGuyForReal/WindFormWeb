import ModalSmall from "./modalSmall/ModalSmall";
import ModalDefault from "./modalDefault/ModalDefault";
import ModalWithBodyScroll from "./modalWithBodyScroll/ModalWithBodyScroll";
import ModalFullScreen from "./modalFullScreen/ModalFullScreen";

export const ModalMain = [
  {
    title: "Modals",
    subComponent: [
      {
        name: "Modal Default",
        component: <ModalDefault />,
        code: "toast/toastWarning/ToastWarning.tsx",
        href: "ModalDefault",
      },
      {
        name: "Modal Small",
        component: <ModalSmall />,
        code: "toast/toastDefault/ToastDefault.tsx",
        href: "ModalSmall",
      },
      {
        name: "Modal Full Screen",
        component: <ModalFullScreen />,
        code: "toast/toastInfo/ToastInfo.tsx",
        href: "ModalFullScreen",
      },
      {
        name: "Modal With Body Scroll",
        component: <ModalWithBodyScroll />,
        code: "toast/toastFail/ToastFail.tsx",
        href: "ModalWithBodyScroll",
      },
    ],
  },
];
