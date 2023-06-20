import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <section id="projects">
      <Navbar />
      <section id="projectCatalog" className="xl:mx-40 px-10 mt-24">
        <ul id="projectTab" className="flex gap-x-8 text-2xl">
          <li className="font-bold underline">All</li>
          <li>Interior</li>
          <li>Exterior</li>
        </ul>
        <div
          id="projectCards"
          className="mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10 place-items-center md:place-items-start"
        >
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
          <div className="w-[300px] h-[300px] bg-red-400"></div>
        </div>
      </section>
    </section>
  );
}
