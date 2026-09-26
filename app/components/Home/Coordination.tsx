import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ShieldCheck, MoveUpRight } from "lucide-react"

import AnimatedLine from "../Common/AnimatedLine"

function Coordination() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#F7F8FA]
        py-24
        sm:py-28
        md:py-32
        lg:py-40
        xl:py-48
      "
    >
      {/* =========================================================
          BACKGROUND DETAILS
      ========================================================== */}

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#071827_1px,transparent_1px),linear-gradient(90deg,#071827_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Blue atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#005293]/[0.035]
          blur-[120px]
        "
      />

      {/* Burgundy atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#4F0908]/[0.035]
          blur-[110px]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <div
          className="
            mb-16
            flex
            flex-col
            gap-6
            border-b
            border-[#071827]/10
            pb-8

            sm:mb-20
            sm:flex-row
            sm:items-end
            sm:justify-between

            lg:mb-24
          "
        >
          <div>
            <AnimatedLine
              text="Experience that knows the route"
              lines={1}
              lineColor="bg-[#005293]"
            />
          </div>

          <div
            className="
              max-w-[280px]
              font-manrope
              text-[10px]
              uppercase
              leading-[1.7]
              tracking-[0.18em]
              text-slate-400

              sm:text-right
            "
          >
            China · Hong Kong · Egypt
            <br />
            One coordinated network
          </div>
        </div>

        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            grid
            items-start
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20

            xl:grid-cols-[0.82fr_1.18fr]
            xl:gap-28
          "
        >
          {/* =====================================================
              LEFT — CONTENT
          ====================================================== */}

          <div className="lg:sticky lg:top-32">
            {/* Small section label */}
            <div className="mb-7 flex items-center gap-3">
              <span
                className="
                  font-jakarta
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  text-[#005293]
                "
              >
                01
              </span>

              <span className="h-px w-8 bg-[#005293]/30" />

              <span
                className="
                  font-manrope
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                About STARS
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="
                max-w-[670px]
                font-jakarta
                text-[2.8rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#071827]

                sm:text-[3.6rem]
                md:text-[4.1rem]
                lg:text-[4rem]
                xl:text-[4.7rem]
              "
            >
              A reliable link between{" "}
              <span className="text-[#005293]">
                source
              </span>{" "}
              and destination.
            </h2>

            {/* Accent line */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#005293]" />
              <span className="h-px w-20 bg-[#071827]/10" />
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[580px]
                font-manrope
                text-[15px]
                leading-[1.85]
                text-slate-500

                sm:text-[16px]
                lg:text-[17px]
              "
            >
              STARS connects its presence across China, Hong Kong, and Egypt
              to coordinate sourcing, purchasing, consolidation, warehousing,
              freight, and customs support through one clear process.
            </p>

            <p
              className="
                mt-4
                max-w-[560px]
                font-manrope
                text-[14px]
                leading-[1.8]
                text-slate-400
              "
            >
              Every shipment is handled around the product, volume,
              destination, and requirements of the customer.
            </p>

            {/* =================================================
                CTA
            ================================================== */}

            <Link
              href="/#about"
              className="
                group
                relative
                mt-10
                inline-flex
                items-center
                gap-4
                font-jakarta
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#071827]

                sm:mt-12
              "
            >
              <span>Discover our story</span>

              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-[#071827]/15
                  bg-white
                  transition-all
                  duration-500
                  group-hover:border-[#005293]
                  group-hover:bg-[#005293]
                "
              >
                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-all
                    duration-500
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-white
                  "
                />
              </span>

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-[#005293]
                  transition-all
                  duration-500
                  group-hover:w-[calc(100%-60px)]
                "
              />
            </Link>

            {/* =================================================
                TRUST STATEMENT
            ================================================== */}

            <div
              className="
                mt-14
                flex
                max-w-[420px]
                items-start
                gap-4
                border-t
                border-[#071827]/10
                pt-5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#005293]/15
                  bg-[#005293]/[0.045]
                "
              >
                <ShieldCheck
                  className="h-[18px] w-[18px] text-[#005293]"
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p
                  className="
                    font-jakarta
                    text-[12px]
                    font-bold
                    tracking-[-0.01em]
                    text-[#071827]

                    sm:text-[13px]
                  "
                >
                  Coordinated with confidence
                </p>

                <p
                  className="
                    mt-1
                    font-manrope
                    text-[10px]
                    leading-[1.7]
                    text-slate-400

                    sm:text-[11px]
                  "
                >
                  One process from source through final destination.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — IMAGE EXPERIENCE
          ====================================================== */}

          <div className="relative">
            {/* Technical number */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-1
                -top-12
                hidden
                font-jakarta
                text-[100px]
                font-extrabold
                leading-none
                tracking-[-0.08em]
                text-[#071827]/[0.035]

                xl:block
              "
            >
              01
            </div>

            {/* Blue corner marker */}
            <div
              aria-hidden="true"
              className="
                absolute
                -left-4
                -top-4
                z-0
                h-24
                w-24
                border-l
                border-t
                border-[#005293]/50
              "
            />

            {/* Image frame */}
            <div
              className="
                relative
                z-10
                overflow-hidden
                border
                border-[#071827]/10
                bg-[#071827]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  h-[400px]
                  w-full

                  sm:h-[500px]
                  md:h-[560px]
                  lg:h-[620px]
                  xl:h-[680px]
                "
              >
                <Image
                  src="/about-team.webp"
                  alt="STARS team coordinating international logistics operations"
                  fill
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    hover:scale-[1.035]
                  "
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    60vw
                  "
                />

                {/* Image treatment */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071827]/80
                    via-[#071827]/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#071827]/20
                    via-transparent
                    to-[#005293]/[0.08]
                  "
                />

                {/* Image top label */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    items-center
                    gap-3

                    sm:left-7
                    sm:top-7
                  "
                >
                  <span className="h-px w-8 bg-white/50" />

                  <span
                    className="
                      font-manrope
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white/65
                    "
                  >
                    Behind the operation
                  </span>
                </div>

                {/* =================================================
                    FLOATING INFO
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    z-20

                    border
                    border-white/15
                    bg-[#071827]/85
                    p-5
                    backdrop-blur-md

                    sm:bottom-7
                    sm:left-7
                    sm:right-auto
                    sm:w-[390px]
                    sm:p-6
                  "
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#5ba7df]/20
                        bg-[#5ba7df]/[0.07]
                      "
                    >
                      <ShieldCheck
                        className="h-[18px] w-[18px] text-[#5ba7df]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p
                        className="
                          font-jakarta
                          text-[12px]
                          font-bold
                          uppercase
                          tracking-[0.04em]
                          text-white

                          sm:text-[13px]
                        "
                      >
                        End-to-end coordination
                      </p>

                      <p
                        className="
                          mt-1.5
                          font-manrope
                          text-[10px]
                          leading-[1.7]
                          text-white/45

                          sm:text-[11px]
                        "
                      >
                        From supplier coordination and consolidation
                        to freight and final destination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                IMAGE FOOTER
            ================================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#071827]/10
                py-4
                pl-1
                pr-1
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#005293]" />

                <span
                  className="
                    font-manrope
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-slate-400

                    sm:text-[10px]
                  "
                >
                  Global operations
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    font-manrope
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-slate-300
                  "
                >
                  Source
                </span>

                <MoveUpRight
                  className="h-3 w-3 text-[#005293]"
                  strokeWidth={1.5}
                />

                <span
                  className="
                    font-manrope
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-slate-300
                  "
                >
                  Destination
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM PROCESS STRIP
        ======================================================== */}

        <div
          className="
            mt-20
            grid
            border-y
            border-[#071827]/10

            sm:grid-cols-3

            lg:mt-28
          "
        >
          {/* Item 1 */}
          <div
            className="
              flex
              items-center
              gap-5
              border-b
              border-[#071827]/10
              py-6

              sm:border-b-0
              sm:border-r
              sm:px-7
              sm:py-7

              lg:px-10
            "
          >
            <span
              className="
                font-jakarta
                text-[11px]
                font-bold
                text-[#005293]
              "
            >
              01
            </span>

            <div>
              <p
                className="
                  font-jakarta
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#071827]
                "
              >
                Source
              </p>

              <p
                className="
                  mt-1
                  font-manrope
                  text-[10px]
                  text-slate-400
                "
              >
                Sourcing & purchasing
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="
              flex
              items-center
              gap-5
              border-b
              border-[#071827]/10
              py-6

              sm:border-b-0
              sm:border-r
              sm:px-7
              sm:py-7

              lg:px-10
            "
          >
            <span
              className="
                font-jakarta
                text-[11px]
                font-bold
                text-[#005293]
              "
            >
              02
            </span>

            <div>
              <p
                className="
                  font-jakarta
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#071827]
                "
              >
                Coordinate
              </p>

              <p
                className="
                  mt-1
                  font-manrope
                  text-[10px]
                  text-slate-400
                "
              >
                Consolidation & freight
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            className="
              flex
              items-center
              gap-5
              py-6

              sm:px-7
              sm:py-7

              lg:px-10
            "
          >
            <span
              className="
                font-jakarta
                text-[11px]
                font-bold
                text-[#005293]
              "
            >
              03
            </span>

            <div>
              <p
                className="
                  font-jakarta
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#071827]
                "
              >
                Deliver
              </p>

              <p
                className="
                  mt-1
                  font-manrope
                  text-[10px]
                  text-slate-400
                "
              >
                Customs & destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coordination