"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, UserCheck, Stethoscope, HeartHandshake, Sparkles, Building2 } from "lucide-react";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      icon: UserCheck,
      title: "Doctor-Led Every Step",
      description: "You consult directly with our senior specialists—never handed off to junior resident intermediaries or rotating assistants."
    },
    {
      icon: Stethoscope,
      title: "Advanced Minimally Invasive OT",
      description: "State-of-the-art laparoscopic surgical instrumentation for minimal pain, microscopic scars, and same-day daycare returns."
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Pregnancy & Delivery",
      description: "Holistic, reassuring antenatal guidance emphasizing natural vaginal birth, emotional safety, and 24/7 labor support."
    },
    {
      icon: Building2,
      title: "All-in-One Healthcare Facility",
      description: "High-end diagnostic pathology lab, in-house 24/7 pharmacy, ultrasound imaging, and daycare beds under one roof in Yelahanka."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal border border-teal-200 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Our Healthcare Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A clinic founded on unhurried empathy and surgical mastery.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Located above the Tata Motors Showroom in Singanayakanahalli (Yelahanka), <strong className="text-slate-900 font-semibold">PARAM Women&apos;s &amp; Multispeciality Clinic</strong> was built to restore what modern healthcare often loses: time, attentiveness, and a doctor who knows your name.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Whether you are preparing for motherhood, navigating an unexpected surgical condition, or seeking pediatric and dermatological wellness for your family, Dr. Anil Raj D and Dr. Pallavi K N provide individualized, evidence-based care in a pristine clinical atmosphere.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 text-brand-teal flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-teal" />
                      </div>
                      <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Real Clinic Photography */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Reception Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200/80 bg-slate-100 aspect-[4/3]">
              <Image
                src="/images/receiption.jpg"
                alt="Param Clinic Reception Desk and Consultation Wing"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-sm drop-shadow-sm">Spotless, Modern Clinical Environment</p>
                <p className="text-xs text-slate-200 drop-shadow-sm">Reception, Waiting Lounge &amp; Consultation Suites</p>
              </div>
            </div>

            {/* Overlapping Secondary Card with Waiting Lounge */}
            <div className="mt-4 sm:-mt-12 sm:ml-8 relative z-10 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white p-3.5 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200">
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hygienic &amp; Spacious</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Comfortable patient lounge with natural lighting &amp; zero crowded queues.
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