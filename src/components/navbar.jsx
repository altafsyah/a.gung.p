import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex xl:mx-40 px-10 py-5">
      <Link href="/" className="text-xl md:text-3xl font-bold">
        a.gung.p
      </Link>
      <div id="hamburger">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </nav>
  );
}
