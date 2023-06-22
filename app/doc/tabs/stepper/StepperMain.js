import StepperDefault from "./stepperDefault/StepperDefault";
import StepperWithNumber from "./stepperWithNumber/StepperWithNumber";
export const StepperMain = [
  {
    title: "Stepper",
    subComponent: [
      {
        name: "Stepper Default",
        component: <StepperDefault />,
        code: "tabs/tabDefault/TabDefaultTS.tsx",
        href: "StepperDefault",
      },
      {
        name: "Stepper With Number",
        component: <StepperWithNumber />,
        code: "tabs/tabDefault/TabDefaultTS.tsx",
        href: "StepperWithNumber",
      },
    ],
  },
];
