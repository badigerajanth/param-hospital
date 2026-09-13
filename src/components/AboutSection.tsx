"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, UserCheck, Stethoscope, HeartHandshake, Sparkles, Building2, MapPin } from "lucide-react";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      icon: UserCheck,
      title: "Doctor-Led Every Step",
      color: "purple",
      badgeClass: "bg-purple-100 text-brand-purple border-purple-200",
      cardClass: "bg-purple-50/70 border-purple-200/90 hover:border-brand-purple/50",
      iconBg: "bg-purple-100 text-brand-purple",
      description: "You consult directly with our senior specialists—never handed off to junior resident intermediaries or rotating assistants."
    },
    {
      icon: Stethoscope,
      title: "Advanced Minimally Invasive OT",
      color: "teal",
      badgeClass: "bg-teal-100 text-brand-teal border-teal-200",
      cardClass: "bg-teal-50/70 border-teal-200/90 hover:border-brand-teal/50",
      iconBg: "bg-teal-100 text-brand-teal",
      description: "State-of-the-art laparoscopic surgical instrumentation for minimal pain, microscopic scars, and same-day daycare returns."
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Pregnancy & Delivery",
      color: "rose",
      badgeClass: "bg-rose-100 text-brand-rose border-rose-200",
      cardClass: "bg-rose-50/70 border-rose-200/90 hover:border-brand-rose/50",
      iconBg: "bg-rose-100 text-brand-rose",
      description: "Holistic, reassuring antenatal guidance emphasizing natural vaginal birth, emotional safety, and 24/7 labor support."
    },
    {
      icon: Building2,
      title: "All-in-One Healthcare Campus",
      color: "purple",
      badgeClass: "bg-gradient-to-r from-purple-100 to-rose-100 text-brand-purple border-purple-200",
      cardClass: "bg-gradient-to-br from-purple-50/60 via-white to-rose-50/60 border-purple-200/90 hover:border-brand-rose/50",
      iconBg: "bg-gradient-to-br from-brand-purple to-brand-rose text-white",
      description: "High-end diagnostic pathology lab, in-house pharmacy, ultrasound imaging, and daycare beds under one roof in Yelahanka."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-rose-50/40 via-white to-purple-50/40 border-b border-rose-100/70 relative overflow-hidden">
      {/* Brand Color Ambient Blooms */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Ethos & Narrative */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-brand-purple border border-purple-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span>Our Healthcare Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A clinic founded on{" "}
              <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
                unhurried empathy
              </span>{" "}
              and surgical mastery.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Located above the Tata Motors Showroom in Singanayakanahalli (Yelahanka), <strong className="text-brand-purple font-bold">PARAM Women&apos;s &amp; Multispeciality Clinic</strong> was built to restore what modern healthcare often loses: time, attentiveness, and a doctor who knows your name.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Whether you are preparing for motherhood, navigating an unexpected surgical condition, or seeking pediatric and dermatological wellness for your family, <strong className="text-brand-purple font-bold">Dr. Anil Raj D</strong> and <strong className="text-brand-rose font-bold">Dr. Pallavi K N</strong> provide individualized, evidence-based care in a pristine, comforting clinical atmosphere.
            </p>

            {/* 4 Pillars Grid with 3 Brand Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all shadow-xs ${pillar.cardClass}`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${pillar.iconBg}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Real Clinic Photography with Branded Frames */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Reception Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
              <Image
                src="/images/receiption.jpg"
                alt="Param Clinic Reception Desk and Consultation Wing"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-purple text-white shadow-xs">
                  Clean &amp; Air-Conditioned
                </span>
                <p className="font-bold text-sm sm:text-base text-white mt-1 drop-shadow-sm">
                  Spotless, Modern Clinical Environment
                </p>
                <p className="text-xs text-rose-200 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-teal" />
                  <span>1st Floor, P.L. Complex &middot; Yelahanka</span>
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card with Waiting Lounge */}
            <div className="mt-4 sm:-mt-12 sm:ml-8 relative z-10 rounded-2xl overflow-hidden shadow-elevated border-2 border-brand-rose/40 bg-white p-3.5 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 border-brand-purple/20">
                  <Image
                    src="/images/interior1.jpg"
                    alt="Spacious Param Clinic Waiting Area"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-brand-rose shrink-0" />
                    <span className="text-brand-purple">Hygienic &amp; Spacious</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Comfortable patient lounge with natural ventilation and zero crowded queues.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}