import StepperDefault from "./stepperDefault/StepperDefault";
import StepperWithNumber from "./stepperWithNumber/StepperWithNumber";
export const StepperMain = [
  {
    title: "Stepper",
    subComponent: [
      {
        name: "Stepper Default",
        component: <StepperDefault />,
        code: "app/doc/tabs/stepper/stepperDefault/StepperDefault.tsx",
        href: "StepperDefault",
      },
      {
        name: "Stepper With Number",
        component: <StepperWithNumber />,
        code: "app/doc/tabs/stepper/stepperWithNumber/StepperWithNumber.tsx",
        href: "StepperWithNumber",
      },
    ],
  },
];
