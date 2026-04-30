  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import Button from "@/components/atoms/button";
  import CustomSelect from "@/components/molecules/CustomSelect";
  import { usePathname } from "next/navigation";
  import { useState, useRef, useEffect } from "react";
  import { Menu, X } from "lucide-react";
  import { cn } from "@/lib/cn";

  export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    const [lang, setLang] = useState<"id" | "en">("id");

    const navItems = [
      { name: "Home", href: "/" },
      { name: "Pricelist", href: "/pricelist" },
      { name: "Tours Packages", href: "/tourpackages" },
      { name: "About Us", href: "/about" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (!navRef.current?.contains(event.target as Node)) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-(--primary)/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="px-4 md:px-8 2xl:px-40 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/LOGO LA GROUP 2.png"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="text-lg text-yellow-400 font-semibold">
              L.A Group
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 md:gap-12 text-sm text-white font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition pb-2",
                      isActive
                        ? "border-b-2 border-white"
                        : "hover:text-blue-500"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <CustomSelect
              value={lang}
              onChange={(value) => setLang(value as "id" | "en")}
              options={[
                { label: "ID", value: "id" },
                { label: "EN", value: "en" },
              ]}
            />

            <Button variant="gold">Login</Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300",
            open
              ? "max-h-96 opacity-100 bg-blue-900/95 backdrop-blur-md border-b border-white/10"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="p-6 flex flex-col items-center gap-4 text-white">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2",
                    isActive && "text-yellow-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="w-full flex flex-col gap-3 mt-4">
              <CustomSelect
                value={lang}
                onChange={(value) => setLang(value as "id" | "en")}
                options={[
                  { label: "ID", value: "id" },
                  { label: "EN", value: "en" },
                ]}
              />

              <Button variant="gold" type="button">
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }