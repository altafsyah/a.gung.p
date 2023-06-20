/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectCard(props) {
  const ref = useRef("hover");

  function mouseEnterHandle(e) {
    ref.current.style.top = "0px";
  }

  function mouseLeaveHandle(e) {
    ref.current.style.top = "800px";
  }

  return (
    <div
      className="w-[300px] h-[300px] relative overflow-hidden cursor-pointer"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <Image
        src={props.imageUrl}
        fill={true}
        className="object-cover xl:object-center"
        alt="Project"
      />
      <div
        ref={ref}
        className="w-full h-full bg-[#4C2B2B]/80 absolute transition-all duration-500"
        style={{ top: "800px" }}
      >
        <h1 className="text-lg absolute bottom-6 left-6 text-white">
          Altaf's
          <br />
          Bedroom
        </h1>
      </div>
    </div>
  );
}
