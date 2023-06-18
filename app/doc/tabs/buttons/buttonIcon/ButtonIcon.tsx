import React from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";

const ButtonIcon = () => {
  return (
    <div>
      <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-50 duration-200 hover:bg-blue-500/80">
        <BanknotesIcon className=" h-5 w-5 text-slate-50" /> Pay in cash
      </button>
    </div>
  );
};

export default ButtonIcon;
