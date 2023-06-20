import Image from "next/image";

export default function ExpertiseCard(props) {
  return (
    <div className="bg-[#7A3E3E] relative px-8 py-8 text-white h-[400px]">
      <Image src={props.imageUrl} fill={true} />
      <div className="w-full h-full absolute bg-gradient-to-t to-transparent from-[#4C2B2B] top-0 left-0">
        <h1 className="absolute bottom-6 left-6 text-2xl">
          {props.title}
          <br />
          Design.
        </h1>
      </div>
    </div>
  );
}
