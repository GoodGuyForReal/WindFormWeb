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
        code: "app/doc/tabs/modals/modalDefault/ModalDefault.tsx",
        href: "ModalDefault",
      },
      {
        name: "Modal Small",
        component: <ModalSmall />,
        code: "app/doc/tabs/modals/modalSmall/ModalSmall.tsx",
        href: "ModalSmall",
      },
      {
        name: "Modal Full Screen",
        component: <ModalFullScreen />,
        code: "app/doc/tabs/modals/modalFullScreen/ModalFullScreen.tsx",
        href: "ModalFullScreen",
      },
      {
        name: "Modal With Body Scroll",
        component: <ModalWithBodyScroll />,
        code: "app/doc/tabs/modals/modalWithBodyScroll/ModalWithBodyScroll.tsx",
        href: "ModalWithBodyScroll",
      },
    ],
  },
];
