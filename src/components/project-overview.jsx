import Image from "next/image";

export default function ProjectOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20 items-center">
      <Image
        src="/featured-project-1.png"
        width={577}
        height={400}
        alt="Project 1"
      />
      <div>
        <h1 className="text-5xl font-bold">/Armani&apos;s House</h1>
        <p className="text-2xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
