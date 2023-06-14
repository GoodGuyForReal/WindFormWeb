import React from "react";

const HmFooter = () => {
  return (
    <div className="w-full pt-10">
      <div class="w-full border-t border-slate-900/5 py-10 text-center">
        <span class="h-5 w-full text-2xl font-bold text-slate-900">
          Wind Form UI
        </span>
        <p class="mt-5 text-center text-sm leading-6 text-slate-500">
          © Open Source Form UI Library
        </p>
        <div class="mt-10 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/privacy-policy">Privacy policy</a>
          <div class="h-4 w-px bg-slate-500/20"></div>
          <a href="/changelog">Changelog</a>
        </div>
      </div>
    </div>
  );
};

export default HmFooter;
