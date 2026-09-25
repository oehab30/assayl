"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

const navigationLinks = [
  { name: "Home", href: "#home", number: "01" },
  { name: "About", href: "#about", number: "02" },
  { name: "Services", href: "#services", number: "03" },
  { name: "How We Work", href: "#how-we-work", number: "04" },
  { name: "Branches", href: "#branches", number: "05" },
  { name: "Contact", href: "#contact", number: "06" },
]

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleNavigation = (href: string) => {
    setActiveHash(href)
    setIsMenuOpen(false)
  }

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.15,
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={`fixed inset-x-0 top-0 z-[100]  border-b border-white/20 bg-gradient-to-b from-slate-950/80 to-transparent transition-all duration-300
     ${
    isScrolled
      ? "bg-[#051428] "
      : "bg-transparent"
      }

  `}
   >



      {/* Main Container */}
      <div className={`
  mx-auto flex w-full max-w-[1240px]
  items-center justify-between
    px-3 sm:px-6 md:px-3 lg:px-6
  transition-all duration-300
  ${
    isScrolled
      ? "h-[76px] "
      : "h-[97px] "
  }
`}
     >


        {/* Logo */}
        <Link
          href="/#top"
          aria-label="STARS home"
          className="relative flex shrink-0 items-center"
        >
          <Image
            src="/stars-logo.png"
            alt="STARS — Since 2018"
            width={205}
            height={61}
            priority
            className="h-auto w-auto max-h-[48px] sm:max-h-[55px] lg:max-h-[61px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-[clamp(14px,1.5vw,28px)] lg:flex"
        >
          {navigationLinks.map((link) => {
            const isActive = activeHash === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`relative flex items-center py-1 font-jakarta text-[0.85rem] font-bold transition-colors xl:text-[0.91rem] ${
                  isActive
                    ? "text-background"
                    : "text-background/80 hover:text-background"
                }`}
              >
                <span>{link.name}</span>

                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#207EB9]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          {/* Language */}
          <button
            type="button"
            aria-label="Change language to Arabic"
            className="min-w-[70px] rounded-full border border-white/30 px-3 py-1 font-cairo text-[0.83rem] font-bold text-g transition-colors duration-200 hover:bg-white/[0.14]"
          >
            العربية
          </button>

          {/* Request Quote */}
          <Link
            href="/#contact"
            className="inline-flex min-h-[54px] items-center justify-center rounded-[14px_2px] bg-[#207EB9] px-[27px] py-[10px] font-jakarta text-[14.4px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* Language */}
          <button
            type="button"
            aria-label="Change language to Arabic"
            className=" min-w-[65px]  rounded-full border border-white px-3 py-1 font-cairo text-xs font-bold text-white transition-colors hover:bg-white/[0.14] sm:block"
          >
            العربية
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-background transition-colors hover:bg-white/[0.14]"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-full bg-background"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                className="block h-[2px] w-full bg-background"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-full bg-background"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-[1240px] flex-col px-4 py-5 sm:px-6">

              {navigationLinks.map((link, index) => {
                const isActive = activeHash === link.href

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleNavigation(link.href)}
                      className={`flex items-center justify-between border-b border-white/10 py-4 font-jakarta text-base font-bold transition-colors ${
                        isActive
                          ? "text-background"
                          : "text-background/70 hover:text-background"
                      }`}
                    >
                      <span>{link.name}</span>

                      <span className="text-xs text-background/40">
                        {link.number}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}

              {/* Mobile Actions */}
              <div className="mt-5 flex items-center gap-3">

                <button
                  type="button"
                  className="rounded-full border border-white/10 px-5 py-2 font-cairo text-sm font-bold text-background hover:bg-background/[0.14]"
                >
                  العربية
                </button>

                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-[14px_2px] bg-[#207EB9] px-5 font-jakarta text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Request a Quote
                </Link>

              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
