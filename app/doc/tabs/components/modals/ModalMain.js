
import ModalDefault from "./modalDefault/ModalDefault";
import ModalFail from "./modalFail/ModalFail";
import ModalInfo from "./modalInfo/ModalInfo";
import ModalWarning from "./modalWarning/ModalWarning";

export const ModalMain = [
  {
    title: "Modal Cards",
    subComponent: [
      {
        name: "Modal Default",
        component: <ModalDefault />,
        code: ``,
        href: "ModalDefault",
      },
      {
        name: "Modal Warning",
        component: <ModalWarning />,
        code: ``,
        href: "ModalWarning",
      },
      {
        name: "Modal Info",
        component: <ModalInfo />,
        code: ``,
        href: "ModalInfo",
      },
      {
        name: "Modal Fail",
        component: <ModalFail />,
        code: ``,
        href: "ModalFail",
      },
    ],
  },
];
