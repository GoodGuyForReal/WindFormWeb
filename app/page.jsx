import ShowCase from "../components/sections/ShowCase";
import Hero from "../components/sections/Hero";
import HmFooter from "../components/sections/HmFooter";


export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-8">
      <Hero />
      <ShowCase />
      <HmFooter/>
    </main>
  );
}
