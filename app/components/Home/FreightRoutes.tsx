"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimatedLine from "../Common/AnimatedLine";
import ArrowButton from "../Common/ArrowButton";
import { useTranslation } from "../Language/translator";

interface RouteCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
  capacity: string;
  speed: string;
  bestFor: string;
}

const routeOptions: RouteCard[] = [
  {
    id: "01",
    tag: "SEA FREIGHT",
    title: "More capacity. Carefully planned routes.",
    description:
      "A practical solution for larger cargo, with flexible capacity, consolidation options, and carefully coordinated routing from China to your destination.",
    image: "/imgi_2_hero-port-v2.jpeg",
    href: "?service=sea-freight",
    capacity: "High",
    speed: "Planned",
    bestFor: "Larger cargo",
  },
  {
    id: "02",
    tag: "AIR FREIGHT",
    title: "Faster movement for priority shipments.",
    description:
      "A faster option for time-sensitive cargo, with schedule coordination designed around priority shipments and shorter transit requirements.",
    image: "/air-freight.webp",
    href: "?service=air-freight",
    capacity: "Flexible",
    speed: "Fast",
    bestFor: "Priority cargo",
  },
];

export default function FreightRoutes() {
  const { locale } = useTranslation();
  const [activeRoute, setActiveRoute] = useState("01");

  return (
    <section
      id="freight-routes"
      className="
        relative
        overflow-hidden
        bg-[#F4F7F9]
        py-24
        sm:py-28
        lg:py-40
      "
    >
      {/* =========================================================
          BACKGROUND
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

      {/* Blue glow */}
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
          bg-[#005293]/[0.045]
          blur-[130px]
        "
      />

      {/* Burgundy glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#4F0908]/[0.025]
          blur-[120px]
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
            HEADER
        ======================================================== */}

        <div
          className="
            mb-14
            flex
            flex-col
            gap-8
            border-b
            border-[#071827]/10
            pb-8

            sm:mb-16
            lg:mb-20

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Left */}
          <div className="max-w-[780px]">
            <AnimatedLine
              text="International freight solutions"
              lines={1}
              lineColor="bg-[#005293]"
            />

            <h2
              className="
                mt-7
                font-jakarta
                text-[2.7rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#071827]

                sm:text-[3.5rem]
                md:text-[4rem]
                lg:text-[4.6rem]
              "
            >
              The right route for{" "}
              <span className="text-[#005293]">
                your cargo.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[350px] lg:pb-1">
            <p
              className="
                font-manrope
                text-[13px]
                leading-[1.8]
                text-slate-500

                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Choose the freight method that matches your cargo,
              timing, and priorities. STARS coordinates the route
              from origin through destination.
            </p>
          </div>
        </div>

        {/* =======================================================
            ROUTES
        ======================================================== */}

        <div
          className="
            grid
            gap-5

            lg:grid-cols-2
            lg:gap-6
          "
        >
          {routeOptions.map((route) => {
            const isActive = activeRoute === route.id;

            return (
              <article
                key={route.id}
                onMouseEnter={() => setActiveRoute(route.id)}
                onFocus={() => setActiveRoute(route.id)}
                className={`
                  group
                  relative
                  min-h-[590px]
                  overflow-hidden
                  border
                  transition-all
                  duration-700
                  sm:min-h-[650px]

                  ${
                    isActive
                      ? "border-[#005293]/40"
                      : "border-[#071827]/10"
                  }
                `}
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`
                    object-cover
                    object-center
                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.76,0,0.24,1)]

                    ${
                      isActive
                        ? "scale-[1.055]"
                        : "scale-100"
                    }
                  `}
                />

                {/* =================================================
                    IMAGE OVERLAY
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071827]
                    via-[#071827]/65
                    via-55%
                    to-[#071827]/10
                  "
                />

                {/* Blue hover wash */}
                <div
                  aria-hidden="true"
                  className={`
                    absolute
                    inset-0
                    bg-[#005293]
                    transition-opacity
                    duration-700

                    ${
                      isActive
                        ? "opacity-[0.08]"
                        : "opacity-0"
                    }
                  `}
                />

                {/* =================================================
                    TOP META
                ================================================== */}

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-6
                    z-10

                    flex
                    items-center
                    justify-between

                    sm:left-8
                    sm:right-8
                    sm:top-8
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-jakarta
                        text-[11px]
                        font-bold
                        tracking-[0.14em]
                        text-[#5ba7df]
                      "
                    >
                      {route.id}
                    </span>

                    <span className="h-px w-8 bg-white/25" />

                    <span
                      className="
                        font-manrope
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/55
                      "
                    >
                      {route.tag}
                    </span>
                  </div>

                  {/* Route status */}
                  <span
                    className="
                      hidden
                      items-center
                      gap-2
                      font-manrope
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/40

                      sm:flex
                    "
                  >
                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-colors
                        duration-500

                        ${
                          isActive
                            ? "bg-[#5ba7df]"
                            : "bg-white/30"
                        }
                      `}
                    />

                    Available route
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-6

                    sm:p-8
                    lg:p-10
                  "
                >
                  {/* Title */}
                  <h3
                    className="
                      max-w-[570px]
                      font-jakarta
                      text-[2rem]
                      font-extrabold
                      leading-[1.02]
                      tracking-[-0.04em]
                      text-white

                      sm:text-[2.5rem]
                      lg:text-[2.8rem]
                    "
                  >
                    {route.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-[560px]
                      font-manrope
                      text-[12px]
                      leading-[1.8]
                      text-white/60

                      sm:text-[13px]
                      sm:leading-[1.75]
                    "
                  >
                    {route.description}
                  </p>

                  {/* =================================================
                      ROUTE DATA
                  ================================================== */}

                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-3
                      border-y
                      border-white/10
                    "
                  >
                    {/* Capacity */}
                    <div
                      className="
                        border-r
                        border-white/10
                        py-4
                        pr-3
                      "
                    >
                      <span
                        className="
                          block
                          font-manrope
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white/35
                        "
                      >
                        Capacity
                      </span>

                      <span
                        className="
                          mt-1.5
                          block
                          font-jakarta
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        {route.capacity}
                      </span>
                    </div>

                    {/* Speed */}
                    <div
                      className="
                        border-r
                        border-white/10
                        px-3
                        py-4
                      "
                    >
                      <span
                        className="
                          block
                          font-manrope
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white/35
                        "
                      >
                        Transit
                      </span>

                      <span
                        className="
                          mt-1.5
                          block
                          font-jakarta
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        {route.speed}
                      </span>
                    </div>

                    {/* Best for */}
                    <div className="py-4 pl-3">
                      <span
                        className="
                          block
                          font-manrope
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white/35
                        "
                      >
                        Best for
                      </span>

                      <span
                        className="
                          mt-1.5
                          block
                          font-jakarta
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        {route.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CTA
                  ================================================== */}

                  <div className="mt-6">
                    <ArrowButton
                      href={`/${locale}/contact${route.href}`}
                      text="Request this service"
                      className="
                        !text-white
                        [&_span]:border-white/25
                        [&_span]:group-hover:border-[#5ba7df]
                        [&_span]:group-hover:bg-[#5ba7df]
                        [&_svg]:!text-white
                        [&_svg]:group-hover:!text-[#071827]
                      "
                    />
                  </div>
                </div>

                {/* Active vertical line */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    bottom-0
                    left-0
                    top-0
                    z-20
                    w-[2px]
                    origin-bottom
                    bg-[#5ba7df]
                    transition-transform
                    duration-700

                    ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0"
                    }
                  `}
                />
              </article>
            );
          })}
        </div>

        {/* =======================================================
            DECISION STRIP
        ======================================================== */}

        <div
          className="
            mt-8
            grid
            border
            border-[#071827]/10
            bg-white

            sm:grid-cols-3
          "
        >
          {/* Item */}
          <div
            className="
              border-b
              border-[#071827]/10
              p-5

              sm:border-b-0
              sm:border-r
              sm:p-6
            "
          >
            <span
              className="
                font-jakarta
                text-[10px]
                font-bold
                tracking-[0.14em]
                text-[#005293]
              "
            >
              01
            </span>

            <p
              className="
                mt-2
                font-jakarta
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#071827]
              "
            >
              Larger shipments
            </p>

            <p
              className="
                mt-1
                font-manrope
                text-[10px]
                leading-[1.6]
                text-slate-400
              "
            >
              Consider sea freight when capacity is the priority.
            </p>
          </div>

          {/* Item */}
          <div
            className="
              border-b
              border-[#071827]/10
              p-5

              sm:border-b-0
              sm:border-r
              sm:p-6
            "
          >
            <span
              className="
                font-jakarta
                text-[10px]
                font-bold
                tracking-[0.14em]
                text-[#005293]
              "
            >
              02
            </span>

            <p
              className="
                mt-2
                font-jakarta
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#071827]
              "
            >
              Time-sensitive cargo
            </p>

            <p
              className="
                mt-1
                font-manrope
                text-[10px]
                leading-[1.6]
                text-slate-400
              "
            >
              Consider air freight when speed is the priority.
            </p>
          </div>

          {/* Item */}
          <div className="p-5 sm:p-6">
            <span
              className="
                font-jakarta
                text-[10px]
                font-bold
                tracking-[0.14em]
                text-[#005293]
              "
            >
              03
            </span>

            <p
              className="
                mt-2
                font-jakarta
                text-[11px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#071827]
              "
            >
              Not sure which?
            </p>

            <p
              className="
                mt-1
                font-manrope
                text-[10px]
                leading-[1.6]
                text-slate-400
              "
            >
              Tell us about your shipment and we can help coordinate the route.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}