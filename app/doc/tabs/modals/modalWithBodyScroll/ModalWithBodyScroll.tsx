import React, { useEffect, useRef, useState } from "react";

function TermsAndConditions() {
  return (
    <div className="h-full">
      <div className="bg-gray-100 p-8">
        <h1 className="mb-4 text-3xl font-bold">Welcome to SuperTasker!</h1>

        <h2 className="mb-2 text-2xl font-bold">Use and Terms</h2>

        <p className="mb-6">
          Thank you for choosing SuperTasker, your ultimate online task
          management platform. By accessing and using our services, you agree to
          abide by the following terms and conditions. Please read them
          carefully.
        </p>

        <ol className="mb-6 list-decimal pl-6">
          <li className="mb-4">
            <strong>Account Registration:</strong>
            <br />
            To utilize SuperTasker's services, you must create an account by
            providing accurate and up-to-date information. You are responsible
            for maintaining the confidentiality of your account credentials and
            for any activities conducted under your account.
          </li>
          <li className="mb-4">
            <strong>Service Description:</strong>
            <br />
            SuperTasker is an online platform that allows you to create, manage,
            and assign tasks to streamline your personal and professional life.
            The services provided include task creation, collaboration, progress
            tracking, and task completion notifications.
          </li>
          <li className="mb-4">
            <strong>User Conduct:</strong>
            <br />
            By using SuperTasker, you agree to:
            <ul className="list-disc pl-6">
              <li>
                Use the services in compliance with applicable laws and
                regulations.
              </li>
              <li>
                Refrain from engaging in any activity that may disrupt or
                compromise the platform's functionality or security.
              </li>
              <li>
                Respect the intellectual property rights of others and refrain
                from uploading or sharing content that violates these rights.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Data and Privacy:</strong>
            <br />
            SuperTasker values your privacy and handles your personal
            information in accordance with our Privacy Policy. By using our
            services, you consent to the collection, storage, and processing of
            your data as outlined in the policy.
          </li>
          <li className="mb-4">
            <strong>Payments and Subscriptions:</strong>
            <br />
            Certain features of SuperTasker may require payment. By subscribing
            to a paid plan, you agree to pay the fees associated with the chosen
            subscription. Payments are non-refundable unless otherwise
            specified.
          </li>
        </ol>
      </div>
    </div>
  );
}

function Card({ setisOpen }: any) {
  return (
    <div className="m-5 flex items-center justify-center rounded-lg bg-white p-5 shadow-xl">
      <div className="flex max-w-md flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Use and Terms</h3>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
          <TermsAndConditions />
        </div>
        <div className="flex w-full gap-2">
          <button
            onClick={() => setisOpen(false)}
            className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-500 duration-200 hover:bg-gray-800 hover:text-slate-50"
          >
            Close
          </button>
          <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
            Accpet
          </button>
        </div>
      </div>
    </div>
  );
}

const ModalWithBodyScroll = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function popUpCloser(ref: any, setisOpen: any): void {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setisOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
  }

  popUpCloser(wrapperRef, setisOpen);

  return (
    <div className="relative flex w-full justify-center">
      <button
        onClick={() => setisOpen(!isOpen)}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80"
      >
        Display Modal
      </button>
      {isOpen && (
        <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
          <div ref={wrapperRef}>
            <Card setisOpen={setisOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWithBodyScroll;
