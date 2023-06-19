export default function Banner() {
  const githubLink = "https://github.com/GoodGuyForReal/WindFormWeb/tree/main/app/doc/tabs";
  return (
    <div className="relative top-14 isolate flex items-center gap-x-6 overflow-hidden rounded-xl bg-gray-800 px-6 py-2.5 shadow-md sm:px-3.5 sm:before:flex-1">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-center">
        <p className="text-sm leading-6 text-white font-medium">
          Website under construction! Find all our components on GitHub. Stay
          tuned for updates!
        </p>
        <a
          href={githubLink}
          target="_blank"
          className="flex-none rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-blue-500/30  duration-200 hover:bg-blue-500/90"
        >
          Github <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
