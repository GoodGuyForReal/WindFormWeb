import { Hero } from "./components/sections/hero";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center px-10 pt-24 sm:px-12 md:px-24 bg-slate-50">
      <Hero />
    </main>
  )
}
