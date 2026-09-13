"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Award, Clock, CheckCircle2, Stethoscope, HeartPulse } from "lucide-react";
import { DOCTORS } from "@/data/hospitalData";

export default function DoctorPortfolios() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="doctors"
      className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/30 via-white to-rose-50/40 border-b border-rose-100/70 relative overflow-hidden"
    >
      {/* Brand Color Ambient Blooms */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-brand-purple border border-purple-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-brand-purple" />
            <span>Senior Medical Consultants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Meet our{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
              dedicated doctors.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Direct care from two recognized specialists in surgery and women&apos;s health, delivering modern medical expertise with family-centered empathy.
          </p>
        </div>

        {/* Exactly 2 Doctor Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DOCTORS.map((doc, index) => {
            const prefilledText = encodeURIComponent(
              `Hello, I want to book a consultation with Dr. ${doc.name}`
            );
            const waUrl = `https://wa.me/${doc.whatsappNumber}?text=${prefilledText}`;
            const isSurgeon = index === 0;

            const theme = isSurgeon
              ? {
                  borderTop: "border-t-4 border-t-brand-purple",
                  badge: "bg-purple-100 text-brand-purple border-purple-200",
                  imageBorder: "border-2 border-brand-purple/40",
                  specialtyColor: "text-brand-purple",
                  pill: "bg-purple-50 text-brand-purple border-purple-200",
                  tag: "bg-purple-50/70 text-brand-purple border-purple-200/80 hover:bg-purple-100/80",
                  check: "text-brand-purple",
                  footerBg: "bg-purple-50/50 border-purple-100",
                  icon: Stethoscope,
                }
              : {
                  borderTop: "border-t-4 border-t-brand-rose",
                  badge: "bg-rose-100 text-brand-rose border-rose-200",
                  imageBorder: "border-2 border-brand-rose/40",
                  specialtyColor: "text-brand-rose",
                  pill: "bg-rose-50 text-brand-rose border-rose-200",
                  tag: "bg-rose-50/70 text-brand-rose border-rose-200/80 hover:bg-rose-100/80",
                  check: "text-brand-rose",
                  footerBg: "bg-rose-50/50 border-rose-100",
                  icon: HeartPulse,
                };

            const IconComponent = theme.icon;

            return (
              <motion.div
                key={doc.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between overflow-hidden ${theme.borderTop}`}
              >
                <div>
                  {/* Top Profile Header */}
                  <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {/* High-Resolution Doctor Portrait */}
                    <div
                      className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 shadow-md shrink-0 ${theme.imageBorder}`}
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="space-y-1">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase border ${theme.badge}`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{doc.badge}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {doc.qualifications}
                      </p>
                      <p className={`text-sm font-extrabold pt-0.5 flex items-center gap-1.5 ${theme.specialtyColor}`}>
                        <IconComponent className="w-4 h-4 shrink-0" />
                        <span>{doc.specialty}</span>
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Experience pill */}
                    <div
                      className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl border ${theme.pill}`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{doc.experience}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {doc.bio}
                    </p>

                    {/* Subspecialties / Tags */}
                    <div className="flex flex-wrap gap-2">
                      {doc.subspecialties.map((sub, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors ${theme.tag}`}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    {/* Key Services Offered */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Core Clinical Focus:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {doc.keyServices.map((srv, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${theme.check}`} />
                            <span className="truncate">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct WhatsApp CTA & Phone */}
                <div
                  className={`p-6 sm:p-8 border-t flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${theme.footerBg}`}
                >
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsapp-dark shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-brand-whatsapp" />
                    <span>Book with {doc.name.split(" ")[1]}</span>
                  </a>

                  <a
                    href={`tel:${doc.whatsappNumber}`}
                    className="btn-press flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs"
                    title={`Call ${doc.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{doc.phoneFormatted}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}