import React, { useEffect, useRef, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Card({ setisOpen }: any) {
  return (
    <div
      onClick={() => setisOpen(false)}
      className="relative cursor-pointer rounded-xl border border-blue-500 bg-blue-50 px-6 py-2.5 shadow-md duration-200 hover:shadow-xl hover:shadow-blue-400/50 sm:px-3.5"
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-x-2 text-left md:text-center">
        <CheckCircleIcon className="h-5 w-5 text-blue-500" />
        <p className="text-sm font-medium leading-6 text-blue-600">
          Website under construction! Find all our components on GitHub. Stay
          tuned for updates!
        </p>
      </div>
    </div>
  );
}

const ToastSuccess = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(3);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, timer]);

  useEffect(() => {
    if (timer === 0) {
      setisOpen(false);
      setTimer(3);
    }
  }, [timer]);

  return (
    <div className="relative flex w-full justify-center">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Toast Success
      </button>
      {isOpen && (
        <div className="fixed bottom-14 z-50 ">
          <Card setisOpen={setisOpen} />
        </div>
      )}
    </div>
  );
};

export default ToastSuccess;
