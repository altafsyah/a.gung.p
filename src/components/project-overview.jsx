import Image from "next/image";

export default function ProjectOverview(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 mt-10 md:mt-20 items-center">
      <Image
        src={props.imageUrl}
        width={577}
        height={400}
        alt="Project 1"
      />
      <div>
        <h1 className="text-2xl md:text-5xl font-bold">/{props.title}</h1>
        <p className="text-lg md:text-2xl mt-5 md:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
