import Container from "../shared/Container";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-15 w-15 items-center justify-center rounded-lg overflow-hidden">
  <div className="relative h-10 w-10">
  <Image
    src="/logo.png"
    alt="Thematic Byte"
    fill
    className="object-contain"
  />
</div>
</div>

            <div>
              <h1 className="font-bold text-white">
                Thematic Byte
              </h1>

              <p className="text-xs text-zinc-400">
                Software & AI Solutions
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a
  href="#"
  className="transition hover:text-white"
>
  Home
</a>

<a
  href="#"
  className="transition hover:text-white"
>
Services
</a>



<a
  href="#"
  className="transition hover:text-white"
>
  Solutions
           
</a>


<a
  href="#"
  className="transition hover:text-white"
>
  
  About

           
</a>



<a
  href="#"
  className="transition hover:text-white"
>
  Contact
</a>


          </nav>

         <button className="rounded-full bg-gradient-to-r from-[#1237d6] via-[#1b6cff] to-[#20d4ff] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(32,212,255,0.35)]">
  Book Consultation
</button>
        </div>
      </Container>
    </header>
  );
}