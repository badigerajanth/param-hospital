"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Award, Clock, CheckCircle2, Stethoscope } from "lucide-react";
import { DOCTORS } from "@/data/hospitalData";

export default function DoctorPortfolios() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal border border-teal-200 text-xs font-semibold tracking-wide uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-brand-teal" />
            <span>Senior Medical Consultants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Meet our dedicated doctors.
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
                className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Profile Header */}
                  <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {/* High-Resolution Doctor Portrait */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 shadow-sm shrink-0">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-teal-50 text-brand-teal border border-teal-200">
                        <Award className="w-3 h-3" />
                        <span>{doc.badge}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {doc.qualifications}
                      </p>
                      <p className="text-sm font-bold text-brand-teal pt-0.5">
                        {doc.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Experience pill */}
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-brand-teal" />
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
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    {/* Key Services Offered */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Core Clinical Focus:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {doc.keyServices.map((srv, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Direct WhatsApp CTA & Phone */}
                <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-brand-whatsapp hover:bg-brand-whatsapp-dark shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-brand-whatsapp" />
                    <span>Book with {doc.name.split(" ")[1]}</span>
                  </a>

                  <a
                    href={`tel:${doc.whatsappNumber}`}
                    className="btn-press flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs"
                    title={`Call ${doc.name}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-teal" />
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