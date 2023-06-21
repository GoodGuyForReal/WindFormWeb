import React, { useState } from "react";

type Step = {
  id: number;
  name: string;
  href: JSX.Element;
  status: "inProgress" | "completed" | "inactive";
};

const Tab1 = ({ onNextStep }: { onNextStep: () => void }) => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1>Job details</h1>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
        onClick={onNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

const Tab2 = ({ onNextStep }: { onNextStep: () => void }) => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1>Application form</h1>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
        onClick={onNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

const Tab3 = () => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1>Preview</h1>
    </div>
  );
};

// StepBar component represents a single step in the progress bar
const StepBar = ({ step, setCurrentStep }: any) => {
  return (
    <div className="w-full">
      {step.status === "completed" || step.status === "inProgress" ? (
        <div
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          className="group flex cursor-pointer flex-col border-l-4 border-blue-600 py-2 pl-4 hover:border-blue-600/80 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0 md:pt-0"
        >
          <span className="text-sm font-medium">{step.name}</span>
        </div>
      ) : (
        step.status === "inactive" && (
          <div
            key={step.id}
            className="group flex cursor-pointer flex-col border-l-4 border-gray-300 py-2 pl-4 text-gray-300 hover:border-gray-500 hover:text-gray-500 md:border-b-4 md:border-l-0 md:pb-4 md:pl-0 md:pt-0"
          >
            <span className="text-sm font-medium">{step.name}</span>
          </div>
        )
      )}
    </div>
  );
};

const StepperDefault = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 0,
      name: "Job details",
      href: <Tab1 onNextStep={handleOnNextStep} />,
      status: "inProgress",
    },
    {
      id: 1,
      name: "Application form",
      href: <Tab2 onNextStep={handleOnNextStep} />,
      status: "inactive",
    },
    { id: 2, name: "Preview", href: <Tab3 />, status: "inactive" },
  ]);

  // Function to handle the next step click
  function handleOnNextStep() {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;

      setSteps((prevSteps) => {
        const updatedSteps = [...prevSteps];
        updatedSteps[prevStep].status = "completed";
        nextStep < updatedSteps.length &&
          (updatedSteps[nextStep].status = "inProgress");
        return updatedSteps;
      });

      return nextStep;
    });
  }
  const completedSteps = steps.filter(
    (step) => step.status === "completed" || step.status === "inProgress"
  );
  const completedStepsRoute = completedSteps.find(
    (step) => step.id === currentStep
  );

  return (
    <div className="flex w-full flex-row gap-x-10 md:max-w-lg md:flex-col">
      <nav aria-label="Progress" className="w-full">
        <ol role="list" className="md:flex md:space-y-0">
          {steps.map((step) => (
            <li key={step.id} className="md:flex-1">
              <StepBar step={step} setCurrentStep={setCurrentStep} />
            </li>
          ))}
        </ol>
      </nav>

      <div className="tab_contents mt-3 w-full">
        <div className="tab_contents_body w-full text-gray-700">
          {completedStepsRoute?.href}
        </div>
      </div>
    </div>
  );
};

export default StepperDefault;
