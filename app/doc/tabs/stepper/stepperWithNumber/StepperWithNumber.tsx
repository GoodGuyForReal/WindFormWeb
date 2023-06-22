import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

// Step type definition
type Step = {
  id: number;
  name: string;
  href: JSX.Element;
  status: "inProgress" | "completed" | "inactive";
};

// Tab1 component for the first step
const Tab1 = ({ onNextStep }: { onNextStep: () => void }) => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1 className="mb-5 text-2xl font-bold">Job details</h1>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
        onClick={onNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

// Tab2 component for the second step
const Tab2 = ({ onNextStep }: { onNextStep: () => void }) => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1 className="mb-5 text-2xl font-bold">Application form</h1>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
        onClick={onNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

// Tab3 component for the third step
const Tab3 = () => {
  return (
    <div className="h-full w-full rounded-md bg-gray-100 p-10">
      <h1 className="mb-5 text-2xl font-bold">Preview</h1>
      <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
        Submit
      </button>
    </div>
  );
};

// InProgress component represents a step in progress
const InProgress = ({ step, setCurrentStep, currentStep }: any) => {
  return (
    <div
      key={step.id}
      onClick={() => setCurrentStep(step.id)}
      className={`group flex cursor-pointer items-center gap-2 px-4 py-2`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 p-1 text-sm font-medium text-white ring-2  ring-blue-500">
        {step.id + 1}
      </span>
      <span
        className={`text-sm font-medium ${
          currentStep === step.id ? "text-black" : "text-gray-400"
        }`}
      >
        {step.name}
      </span>
    </div>
  );
};

// Completed component represents a completed step
const Completed = ({ step, setCurrentStep, currentStep }: any) => {
  return (
    <div
      onClick={() => setCurrentStep(step.id)}
      key={step.id}
      className="group flex cursor-pointer items-center gap-2 px-4 py-2"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 p-1 text-sm font-medium text-black ring-2 ring-blue-100">
        <CheckIcon className="h-4 w-4" />
      </span>
      <span
        className={`text-sm font-medium ${
          currentStep === step.id ? "text-black" : "text-gray-400"
        }`}
      >
        {step.name}
      </span>
    </div>
  );
};

// Inactive component represents an inactive step
const Inactive = ({ step, currentStep }: any) => {
  return (
    <div
      key={step.id}
      className="group flex cursor-pointer items-center gap-2 px-4 py-2"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 text-sm font-medium text-black ring-2 ring-gray-300">
        {step.id + 1}
      </span>
      <span
        className={`text-sm font-medium ${
          currentStep === step.id ? "text-black" : "text-gray-400"
        }`}
      >
        {step.name}
      </span>
    </div>
  );
};

// StepBar component represents a single step in the progress bar
const StepBar = ({ step, setCurrentStep, currentStep }: any) => {
  return (
    <div className="relative w-full">
      {step.status === "inProgress" ? (
        <InProgress
          step={step}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ) : step.status === "completed" ? (
        <Completed
          step={step}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      ) : (
        step.status === "inactive" && (
          <Inactive step={step} currentStep={currentStep} />
        )
      )}
    </div>
  );
};

// StepperWithNumber component represents the entire stepper
const StepperWithNumber = () => {
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
      const iscompleted = steps[nextStep].status !== "completed";

      iscompleted &&
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
    <div className="flex w-full max-w-xl flex-col flex-wrap gap-x-10">
      {/* Progress bar */}
      <nav aria-label="Progress" className="w-full">
        <ol role="list" className="md:flex md:space-y-0">
          {steps.map((step: Step) => (
            <li key={step.id} className="">
              <StepBar
                step={step}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            </li>
          ))}
        </ol>
      </nav>

      {/* Step content */}
      <div className="tab_contents mt-3 w-full">
        <div className="tab_contents_body w-full text-gray-700">
          {completedStepsRoute?.href}
        </div>
      </div>
    </div>
  );
};

export default StepperWithNumber;
