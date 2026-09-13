"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Heart,
  Baby,
  Activity,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  HOSPITAL_INFO,
  SURGICAL_SERVICES,
  MATERNITY_SERVICES,
  SPECIALIST_DEPTS,
} from "@/data/hospitalData";

export default function SpecialtiesSection() {
  const [activeTab, setActiveTab] = useState<"surgery" | "maternity" | "specialist">("surgery");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="specialties" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal border border-teal-200 text-xs font-semibold tracking-wide uppercase mb-3">
              <Zap className="w-3.5 h-3.5 text-brand-teal" />
              <span>Comprehensive Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Specialized departments &amp; procedures.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-3">
              From advanced day-care laparoscopic surgeries to complete maternal care and outpatient multispeciality clinics.
            </p>
          </div>

          {/* Segmented Filter Control with 3 Brand Colors */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("surgery")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "surgery"
                  ? "bg-brand-purple text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-purple"
              }`}
            >
              Laparoscopic Surgery
            </button>
            <button
              onClick={() => setActiveTab("maternity")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "maternity"
                  ? "bg-brand-rose text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-rose"
              }`}
            >
              Maternity &amp; Gynaec
            </button>
            <button
              onClick={() => setActiveTab("specialist")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "specialist"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-teal"
              }`}
            >
              Specialist OPD
            </button>
          </div>
        </div>

        {/* Dynamic Service Cards Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "surgery" && (
            <motion.div
              key="surgery-grid"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/90 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-purple">
                <span className="font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-purple shrink-0" />
                  <span>Led by Dr. Anil Raj D (MS, FMAS, FIAGES) &middot; General &amp; Laparoscopic Surgeon</span>
                </span>
                <span className="font-semibold text-slate-700 bg-white/80 px-3 py-1 rounded-full border border-purple-200">
                  Day-care OT &middot; Same day discharge available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {SURGICAL_SERVICES.map((item, idx) => {
                  const inquiryUrl = `https://wa.me/${HOSPITAL_INFO.phones.drAnilRaw}?text=${encodeURIComponent(
                    `Hello Dr. Anil Raj, I am inquiring regarding ${item.name} at Param Clinic.`
                  )}`;

                  return (
                    <div
                      key={idx}
                      className="interactive-card bg-slate-50/60 hover:bg-white rounded-xl p-5 border border-slate-200/90 hover:border-teal-300 hover:shadow-card flex flex-col justify-between transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-teal-50 text-brand-teal border border-teal-100">
                            {item.highlight}
                          </span>
                          <Scissors className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal transition-colors" />
                        </div>
                        <h3 className="font-bold text-base text-slate-900 mb-1.5 group-hover:text-brand-teal transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                          {item.description}
                        </p>
                      </div>

                      <a
                        href={inquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center justify-between w-full pt-3 border-t border-slate-200/70 text-xs font-semibold text-brand-teal hover:text-teal-700 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp Inquiry</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "maternity" && (
            <motion.div
              key="maternity-grid"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/90 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-rose">
                <span className="font-bold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brand-rose shrink-0" />
                  <span>Led by Dr. Pallavi K N (MBBS, DNB) &middot; Senior Obstetrician &amp; Gynecologist</span>
                </span>
                <span className="font-semibold text-slate-700 bg-white/80 px-3 py-1 rounded-full border border-rose-200">
                  From Adolescence to Motherhood to Menopause
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {MATERNITY_SERVICES.map((item, idx) => {
                  const inquiryUrl = `https://wa.me/${HOSPITAL_INFO.phones.drPallaviRaw}?text=${encodeURIComponent(
                    `Hello Dr. Pallavi, I am inquiring regarding ${item.name} at Param Clinic.`
                  )}`;

                  return (
                    <div
                      key={idx}
                      className="interactive-card bg-rose-50/35 hover:bg-white rounded-2xl p-5 border border-rose-200/70 hover:border-brand-rose hover:shadow-card flex flex-col justify-between transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-rose-100 text-brand-rose border border-rose-200">
                            {item.highlight}
                          </span>
                          <Baby className="w-3.5 h-3.5 text-brand-rose/60 group-hover:text-brand-rose transition-colors" />
                        </div>
                        <h3 className="font-bold text-base text-slate-900 mb-1.5 group-hover:text-brand-rose transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                          {item.description}
                        </p>
                      </div>

                      <a
                        href={inquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center justify-between w-full pt-3 border-t border-rose-100 text-xs font-bold text-brand-rose hover:text-brand-rose-dark transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp Doctor</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "specialist" && (
            <motion.div
              key="specialist-grid"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200/90 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-teal">
                <span className="font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Multidisciplinary Medical Consultants Available by Appointment</span>
                </span>
                <span className="font-semibold text-slate-700 bg-white/80 px-3 py-1 rounded-full border border-teal-200">
                  Pediatric vaccines, dermatology, and diagnostic tests
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SPECIALIST_DEPTS.map((dept, idx) => {
                  const inquiryUrl = `https://wa.me/${HOSPITAL_INFO.phones.appointmentRaw}?text=${encodeURIComponent(
                    `Hello Param Clinic, I would like to book an appointment for ${dept.name}.`
                  )}`;

                  return (
                    <div
                      key={idx}
                      className="interactive-card bg-teal-50/35 hover:bg-white rounded-2xl p-6 border border-teal-200/70 hover:border-brand-teal hover:shadow-card flex flex-col justify-between transition-all group"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-teal-50 text-brand-teal flex items-center justify-center mb-4 border border-teal-100">
                          <Activity className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                          {dept.desc}
                        </p>
                      </div>

                      <a
                        href={inquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-press inline-flex items-center justify-between w-full pt-3 border-t border-slate-200/70 text-xs font-semibold text-brand-teal hover:text-teal-800 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Book Doctor</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}