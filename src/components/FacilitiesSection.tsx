"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FlaskConical, Pill, Radio, HeartPulse, BedDouble, CheckCircle2, ShieldCheck } from "lucide-react";
import { CLINIC_FACILITIES } from "@/data/hospitalData";

export default function FacilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const facilityIcons = [
    FlaskConical,
    Pill,
    Radio,
    HeartPulse,
    BedDouble,
  ];

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-gradient-to-b from-teal-50/25 via-white to-purple-50/30 border-b border-rose-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-brand-teal border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
            <span>Infrastructure &amp; Amenities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Diagnostics, pharmacy &amp;{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
              day-care on-site.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Eliminating stressful hospital transfers by housing essential diagnostic labs, sonography, and medications directly in our clinic.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CLINIC_FACILITIES.map((facility, idx) => {
            const IconComponent = facilityIcons[idx % facilityIcons.length];

            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      {facility.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Certified Clinical Protocols</span>
                </div>
              </motion.div>
            );
          })}

          {/* Exterior Building Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-card aspect-video md:aspect-auto min-h-[220px]"
          >
            <Image
              src="/images/hospital-building.jpg"
              alt="PARAM Clinic Building Exterior at P.L. Complex Yelahanka"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold tracking-widest uppercase text-teal-300">
                P.L. COMPLEX &middot; 1ST FLOOR
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                Located Above Cauvery Tata Motors Showroom
              </p>
              <p className="text-xs text-slate-200 mt-0.5">
                Doddaballapura Main Rd, Singanayakanahalli, Yelahanka
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}