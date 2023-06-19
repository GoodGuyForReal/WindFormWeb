import Link from "next/link";
import React from "react";
import ReactIcon from "@/components/assets/brandIcons/ReactIcon";
import TailwindIcon from "@/components/assets/brandIcons/TailwindIcon";
import TypeScriptIcon from "@/components/assets/brandIcons/TypeScriptIcon";
import HeroIcons from "@/components/assets/brandIcons/HeroIcons";
import Banner from './Banner'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <Banner/>
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-60">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl pb-10 pt-32">
        <div className="hidden cursor-pointer sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            WindForm Alpha{" "}
            <span className="font-semibold text-blue-500">1.0</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build Forms even faster with fully customizable Tailwind CSS
            components
          </h1>
          <div className="flex items-center justify-center gap-4 py-6">
            <ReactIcon />

            <TypeScriptIcon />

            <TailwindIcon />

            <HeroIcons />
          </div>
          <p className="text-lg leading-8 text-gray-600">
            Say goodbye to npm downloads and gain complete control over your
            form design. Customize every aspect of your components without
            limitations. Start building your custom forms today and
            revolutionize the way you collect data.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/doc"
              className="rounded-md bg-blue-500 px-4 py-2 font-medium text-slate-50 duration-200 hover:bg-blue-500/80"
            >
              Get started
            </Link>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
              className="font-semibold leading-6 text-gray-900"
            >
              Serious video <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
