import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-gray-200
        bg-white/90
        backdrop-blur-xl
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
           <div
  className="
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-2xl
    border
    border-gray-200
    bg-white
    shadow-sm
  "
>
  <Image
    src="/logo3.png"
    alt="9LineNow"
    width={56}
    height={56}
    className="object-contain"
    priority
  />
</div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                9LineNow
              </h1>

              <p className="text-xs uppercase tracking-[0.25em] text-emerald-600">
                Software • AI • Automation
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            <a
              href="#home"
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-emerald-600
              "
            >
              Home
            </a>

            <a
              href="#services"
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-emerald-600
              "
            >
              Services
            </a>

            <a
              href="#solutions"
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-emerald-600
              "
            >
              Solutions
            </a>

            <a
              href="#about"
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-emerald-600
              "
            >
              About
            </a>

            <a
              href="#contact"
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-emerald-600
              "
            >
              Contact
            </a>

          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="
              rounded-full
              bg-emerald-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-700
              hover:shadow-xl
              hover:shadow-emerald-300
            "
          >
            Book Consultation
          </Link>

        </div>
      </Container>
    </header>
  );
}