import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex xl:px-40 py-5 justify-between items-center sticky top-0 z-20 md:backdrop-blur bg-white">
      <Link href="/" className="text-lg md:text-xl font-bold mx-10">
        a.gung.p
      </Link>
      <Link href="/projects" className="text-lg md:text-xl font-bold mx-10">projects</Link>
    </nav>
  );
}

{
  /* <div id="hamburger">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div> */
}
