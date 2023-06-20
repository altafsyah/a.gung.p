"use client";

import Image from "next/image";
import ExpertiseCard from "@/components/expertise-card";
import ProjectOverview from "@/components/project-overview";
import SectionTitle from "@/components/section-title";
import Navbar from "@/components/navbar";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function Home() {
  return (
    <section className="w-full">
      <Navbar />
      <section
        id="hero"
        className="grid grid-cols-1 xl:grid-cols-2 xl:mx-40 px-10 items-center mt-40 mb-36"
      >
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Passionate — Creative
          </h1>
          <h1 className="text-5xl md:text-[72px] font-bold">Architect</h1>
        </div>
        <p id="hero-desc" className="text-xl md:mt-0 mt-5">
          Meet the passionate, creative architect whose visionary designs
          redefine spaces, merging artistry with functionality in awe-inspiring
          ways.
        </p>
      </section>
      <div id="img-hero" className="w-full h-[400px] object-cover relative">
        <Image
          src="/hero-divider.png"
          alt="Hero Image"
          fill={true}
          className="object-cover xl:object-[center_-400px]"
        />
      </div>
      <section id="expertise" className="mt-32 xl:mx-40 px-10 mb-32">
        <SectionTitle no="01" title="Expertise" />
        <div
          id="expertiseCards"
          className="grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-24 mt-10 md:mt-24"
        >
          <ExpertiseCard imageUrl="/expertise-interior.png" title="Interior" />
          <ExpertiseCard imageUrl="/expertise-exterior.png" title="Exterior" />
          <ExpertiseCard
            imageUrl="/expertise-landscape.png"
            title="Landscape"
          />
        </div>
      </section>
      <section id="project" className="xl:mx-40 px-10 mb-32">
        <div className="flex justify-between items-start">
          <SectionTitle no="02" title="Projects" />
          <Link href="/projects" className="font-bold text-lg md:text-2xl">
            View All
          </Link>
        </div>
        <Swiper spaceBetween={50} slidesPerView={1} loop={true} modules={[Autoplay]} autoplay>
          <SwiperSlide>
            <ProjectOverview
              title="Altaf's Room"
              imageUrl="/featured-project-1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectOverview
              title="Liberty Coffee"
              imageUrl="/featured-project-2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectOverview
              title="Askara Office"
              imageUrl="/featured-project-3.png"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* <section id="about" className="mx-40 mb-32">
        <SectionTitle no="03" title="About Me" />
      </section> */}
    </section>
  );
}
