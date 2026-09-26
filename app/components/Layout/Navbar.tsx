"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home", number: "01" },
  { name: "About", href: "#about", number: "02" },
  { name: "Services", href: "#services", number: "03" },
  { name: "How We Work", href: "#how-we-work", number: "04" },
  { name: "Branches", href: "#branches", number: "05" },
  { name: "Contact", href: "#contact", number: "06" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================================
     SCROLL STATE + ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 40);

      let currentSection = "#home";

      sections.forEach((section) => {
        if (!section) return;

        const element = section as HTMLElement;
        const top = element.offsetTop - 180;

        if (scrollY >= top) {
          currentSection = `#${element.id}`;
        }
      });

      setActiveHash(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL
  ========================================================== */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     NAVIGATION
  ========================================================== */

  const handleNavigation = (href: string) => {
    setActiveHash(href);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      {/* =====================================================
          NAVBAR SURFACE
      ====================================================== */}

      <motion.div
        animate={{
          backgroundColor: isScrolled
            ? "rgba(5, 20, 40, 0.94)"
            : "rgba(5, 20, 40, 0)",
          borderColor: isScrolled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4 }}
        className="
          border-b
          backdrop-blur-xl
        "
      >
        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1320px]
            items-center
            justify-between
            px-5
            transition-all
            duration-500
            sm:px-8
            lg:px-10
            ${
              isScrolled
                ? "h-[70px]"
                : "h-[86px] sm:h-[92px] lg:h-[96px]"
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/#home"
            aria-label="STARS home"
            onClick={() => handleNavigation("#home")}
            className="
              group
              relative
              z-[110]
              flex
              shrink-0
              items-center
              outline-none
            "
          >
            <Image
              src="/logo.png"
              alt="STARS"
              width={205}
              height={61}
              priority
              className={`
                w-auto
                object-contain
                transition-all
                duration-500
                ${
                  isScrolled
                    ? "max-h-[42px]"
                    : "max-h-[48px] sm:max-h-[54px] lg:max-h-[58px]"
                }
              `}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-7
              lg:flex
              xl:gap-9
            "
          >
            {navigationLinks.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="
                    group
                    relative
                    flex
                    items-center
                    py-3
                    font-jakarta
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    outline-none
                  "
                >
                  <span
                    className={`
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/55 group-hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>

                  {/* Active line */}
                  <span
                    className={`
                      absolute
                      bottom-1
                      left-0
                      h-px
                      bg-[#5ba7df]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                  {/* Tiny active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="
                        absolute
                        -right-2
                        top-1/2
                        h-[3px]
                        w-[3px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#5ba7df]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-5 lg:flex">
            {/* Language */}
            <button
              type="button"
              aria-label="Change language to Arabic"
              className="
                group
                relative
                font-cairo
                text-[11px]
                font-bold
                text-white/50
                transition-colors
                duration-300
                hover:text-white
              "
            >
              العربية

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-[#5ba7df]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>

            {/* Divider */}
            <span
              aria-hidden="true"
              className="h-5 w-px bg-white/10"
            />

            {/* Quote CTA */}
            <Link
              href="/#contact"
              onClick={() => handleNavigation("#contact")}
              className="
                group
                relative
                inline-flex
                h-[46px]
                items-center
                overflow-hidden
                border
                border-white/20
                bg-white/[0.025]
                px-5
                font-jakarta
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                transition-all
                duration-500
                hover:border-[#5ba7df]/50
              "
            >
              {/* Fill */}
              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-[#005293]
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:scale-x-100
                "
              />

              <span className="relative z-10 flex items-center gap-3">
                <span>Request a Quote</span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-500
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}

          <div className="flex items-center gap-4 lg:hidden">
            {/* Language */}
            <button
              type="button"
              aria-label="Change language to Arabic"
              className="
                font-cairo
                text-[11px]
                font-bold
                text-white/65
                transition-colors
                hover:text-white
              "
            >
              العربية
            </button>

            {/* Menu */}
            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="
                relative
                z-[110]
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-white/15
                bg-white/[0.03]
              "
            >
              <div className="relative h-4 w-5">
                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-full
                    bg-white
                  "
                />

                <motion.span
                  animate={
                    isMenuOpen
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-px
                    w-full
                    bg-white
                  "
                />

                <motion.span
                  animate={
                    isMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  className="
                    absolute
                    left-0
                    top-[14px]
                    h-px
                    w-full
                    bg-white
                  "
                />
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              -z-10
              bg-[#051428]
              lg:hidden
            "
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-40
                top-20
                h-[450px]
                w-[450px]
                rounded-full
                bg-[#005293]/10
                blur-[120px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-[400px]
                w-[400px]
                rounded-full
                bg-[#4F0908]/10
                blur-[120px]
              "
            />

            <div
              className="
                relative
                mx-auto
                flex
                h-full
                w-full
                max-w-[1320px]
                flex-col
                px-5
                pb-8
                pt-[105px]
                sm:px-8
              "
            >
              {/* Menu label */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#5ba7df]" />

                <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Navigation
                </span>
              </div>

              {/* Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col"
              >
                {navigationLinks.map((link, index) => {
                  const isActive = activeHash === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.05 + index * 0.055,
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          handleNavigation(link.href)
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/[0.08]
                          py-5
                        "
                      >
                        <div className="flex items-center gap-5">
                          <span
                            className={`
                              font-jakarta
                              text-[10px]
                              font-bold
                              tracking-[0.15em]
                              transition-colors
                              ${
                                isActive
                                  ? "text-[#5ba7df]"
                                  : "text-white/20 group-hover:text-white/40"
                              }
                            `}
                          >
                            {link.number}
                          </span>

                          <span
                            className={`
                              font-jakarta
                              text-2xl
                              font-semibold
                              tracking-[-0.025em]
                              transition-colors
                              ${
                                isActive
                                  ? "text-white"
                                  : "text-white/55 group-hover:text-white"
                              }
                            `}
                          >
                            {link.name}
                          </span>
                        </div>

                        <ArrowUpRight
                          className={`
                            h-5
                            w-5
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "text-[#5ba7df] opacity-100"
                                : "text-white/20 opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                            }
                          `}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.4,
                }}
                className="mt-auto"
              >
                <div className="mb-5 h-px w-full bg-white/[0.08]" />

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="font-jakarta text-sm font-semibold text-white">
                      Ready to move?
                    </p>

                    <p className="mt-1 max-w-[220px] font-manrope text-xs leading-5 text-white/35">
                      Let&apos;s discuss your next shipment.
                    </p>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() =>
                      handleNavigation("#contact")
                    }
                    className="
                      group
                      flex
                      h-12
                      shrink-0
                      items-center
                      gap-3
                      bg-[#005293]
                      px-5
                      font-jakarta
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white
                    "
                  >
                    Quote

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
