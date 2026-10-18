
import  { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  FileText,
  Search,
  Box,
  Ship,
  Plane,
  ShieldCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

interface ProcessStage {
  title: string;
  description: string;
}

interface ProcessContent {
  eyebrow: string;
  title: string;
  description: string;
  stages: ProcessStage[];
  stageLabel: string;
  ctaTitle: string;
  ctaButton: string;
  imageAlt: string;
}

interface TimelineStage {
  id: string;
  image: string;
  icon: LucideIcon;
  imageOnLeft: boolean;
}

const stageDetails: TimelineStage[] = [
  {
    id: "stage-1",
    image: "/images/journey-1.jpg",
    icon: FileText,
    imageOnLeft: true,
  },
  {
    id: "stage-2",
    image: "/images/journey-2.jpg",
    icon: Search,
    imageOnLeft: false,
  },
  {
    id: "stage-3",
    image: "/images/journey-3.jpg",
    icon: Box,
    imageOnLeft: true,
  },
  {
    id: "stage-4",
    image: "/images/journey-4.jpg",
    icon: ShieldCheck,
    imageOnLeft: false,
  },
  {
    id: "stage-5",
    image: "/images/journey-5.jpg",
    icon: Ship,
    imageOnLeft: true,
  },
  {
    id: "stage-6",
    image: "/images/journey-6.jpg",
    icon: Plane,
    imageOnLeft: false,
  },
  {
    id: "stage-7",
    image: "/images/journey-7.jpg",
    icon: CheckCircle2,
    imageOnLeft: true,
  },
];

function TimelineItem({
  stage,
  index,
  content,
  isRtl,
  reduceMotion,
}: {
  stage: TimelineStage;
  index: number;
  content: ProcessContent;
  isRtl: boolean;
  reduceMotion: boolean;
}) {
  const itemRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 90%", "end 10%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [35, 0, 0, -25]
  );

  const stageText = content.stages[index];
  const number = String(index + 1).padStart(2, "0");
  const Icon = stage.icon;

  const image = (
    <div className="group relative h-[220px] overflow-hidden rounded-[18px_3px] border border-[#E8E2D9] bg-white sm:h-[280px]">
      <Image
        src={stage.image}
        alt={`${content.imageAlt} ${number}`}
        fill
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        className={`absolute bottom-3 ${
          isRtl ? "left-3" : "right-3"
        } flex h-10 w-10 items-center justify-center rounded-[12px_2px] bg-[#4F0908] text-white shadow-lg`}
      >
        <Icon size={18} strokeWidth={1.8} />
      </div>
    </div>
  );

  const details = (
    <div className="py-2">
      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#C9A96E]/20 px-3 py-1 font-jakarta text-[10px] font-bold tracking-wider text-[#4F0908]">
        <span>{content.stageLabel}</span>
        <span>{number}</span>
      </span>

      <h3 className="font-jakarta text-xl font-bold leading-snug text-[#051428] sm:text-2xl">
        {stageText?.title ?? ""}
      </h3>

      <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
        {stageText?.description ?? ""}
      </p>
    </div>
  );

  return (
    <motion.article
      ref={itemRef}
      style={reduceMotion ? undefined : { opacity, y }}
      className="grid items-center gap-5 md:grid-cols-12 md:gap-8"
    >
      <div className="md:col-span-5">
        {stage.imageOnLeft ? image : details}
      </div>

      <div className="relative z-10 hidden justify-center md:col-span-2 md:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C9A96E] bg-[#4F0908] font-jakarta text-sm font-bold text-white shadow-md">
          {number}
        </div>
      </div>

      <div className="md:col-span-5">
        {stage.imageOnLeft ? details : image}
      </div>
    </motion.article>
  );
}

export default function JourneyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

const { locale, t } = useTranslation();
const isRtl = locale === "ar";

const content: ProcessContent = {
  eyebrow: t("process.eyebrow"),
  title: t("process.title"),
  description: t("process.description"),
  stageLabel: t("process.stageLabel"),
  imageAlt: t("process.imageAlt"),
  ctaTitle: t("process.ctaTitle"),
  ctaButton: t("process.ctaButton"),
  stages: Array.from({ length: 7 }, (_, index) => ({
    title: t(`process.stages.${index}.title`),
    description: t(`process.stages.${index}.description`),
  })),
};

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 55%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      lang={isRtl ? "ar" : "en"}
      className="relative overflow-hidden bg-[#F8F6F3] py-16 sm:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#4F0908]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#C9A96E]/[0.09] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 grid gap-5 sm:mb-20 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <div className="mb-4">
              <AnimatedLine
                text={content.eyebrow}
                lines={1}
                lineColor="bg-[#4F0908]"
                textColor="text-[#4F0908]"
              />
            </div>

            <h2 className="max-w-2xl font-jakarta text-3xl font-bold leading-tight text-[#051428] sm:text-4xl lg:text-[44px]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-lg font-manrope text-sm leading-7 text-slate-600 lg:justify-self-end">
            {content.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#D9D5CE] md:block"
          />

          <motion.div
            aria-hidden="true"
            style={reduceMotion ? { scaleY: 1 } : { scaleY: progress }}
            className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] origin-top -translate-x-1/2 bg-[#C9A96E] md:block"
          />

          <div className="space-y-12 sm:space-y-16">
            {stageDetails.map((stage, index) => (
              <TimelineItem
                key={stage.id}
                stage={stage}
                index={index}
                content={content}
                isRtl={isRtl}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mt-16 flex flex-col gap-5 border-t border-[#C9A96E]/40 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-jakarta text-lg font-semibold leading-relaxed text-[#051428]">
            {content.ctaTitle}
          </p>

          <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-[14px_2px] bg-[#4F0908] px-6 py-3.5 font-jakarta text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#651714] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2"
          >
            {content.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}