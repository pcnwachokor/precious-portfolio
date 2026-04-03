import Link from "next/link";
export default function Navbar() {

//blabla



return (
    <div className="sticky top-0 z-100 flex justify-center">
        <nav className="flex gap-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
        <Link href="/Blog">Blog</Link>
    </nav>
    </div>
    

);

}

