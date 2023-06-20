import Image from "next/image";
import heroImg from "../../../public/hero-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full">
      <nav className="flex mx-40 px-10 py-5">
        <Link href="/" className="text-3xl font-bold">
          a.gung.p
        </Link>
        <div id="hamburger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </nav>
      <section
        id="hero"
        className="grid grid-cols-2 mx-40 px-10 items-center mt-40 mb-36"
      >
        <div>
          <h1 className="text-5xl font-bold">Passionate — Creative</h1>
          <h1 className="text-[72px] font-bold">Architect</h1>
        </div>
        <p id="hero-desc" className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <div
        id="img-hero"
        className="w-full h-[400px] object-cover bg-yellow-500 relative"
      >
        <Image
          src={heroImg}
          alt="Hero Image"
          fill={true}
          className="object-cover object-[center_-700px]"
        />
      </div>
      <section id="expertise" className="mt-32 mx-40 mb-32">
        <span className="text-5xl font-bold">01—</span>
        <h1 className="text-[72px] font-bold">Expertise</h1>
        <div id="expertiseCards" className="grid grid-cols-3 gap-24 mt-24">
          <div className="bg-[#7A3E3E] px-8 py-8 text-white h-[400px]">
            <div className="w-10 h-10 bg-white"></div>
            <h1>Interior Design</h1>
            <p className="mt-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-[#7A3E3E] px-8 py-8 text-white h-[400px]">
            <div className="w-10 h-10 bg-white"></div>
            <h1>Interior Design</h1>
            <p className="mt-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-[#7A3E3E] px-8 py-8 text-white h-[400px]">
            <div>
              <div className="w-10 h-10 bg-white"></div>
              <h1 className="text-2xl font-bold">Interior Design</h1>
            </div>
            <p className="mt-14 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
      <section id="project" className="mx-40 mb-32">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-5xl font-bold">02—</span>
            <h1 className="text-[72px] font-bold">Projects</h1>
          </div>
          <p className="font-bold text-2xl">View All</p>
        </div>
        <div className="grid grid-cols-2 gap-24 mt-20">
          <h1>Image</h1>
          <div>
            <h1 className="text-5xl font-bold">/Armani&apos;s House</h1>
            <p className="text-2xl mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
