"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  CheckCircle2,
  Maximize2,
  X,
  Compass,
  Car,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface FacilityImage {
  id: string;
  src: string;
  title: string;
  category: "Exterior & Facade" | "Lobby & Reception" | "Consultation Suites" | "Department Wings";
  tag: string;
  description: string;
  highlight: string;
}

const CLINIC_PHOTOS: FacilityImage[] = [
  {
    id: "facade-main",
    src: "/images/fancade.jpg",
    title: "PARAM Clinic Highway Facade & Road Frontage",
    category: "Exterior & Facade",
    tag: "Prime Landmark",
    description:
      "Wide-angle view of PARAM Women's & Multispeciality Clinic on Doddaballapura Main Road. Positioned prominently on the 1st Floor of P.L. Complex right above the Cauvery Tata Motors showroom.",
    highlight: "Above Cauvery Tata Motors Showroom",
  },
  {
    id: "building-exterior",
    src: "/images/hospital-building.jpg",
    title: "P.L. Complex Building Architecture",
    category: "Exterior & Facade",
    tag: "1st Floor Campus",
    description:
      "Modern commercial landmark housing PARAM Clinic on the first floor with wide stairways, elevator connectivity, and ample patient vehicle parking along Doddaballapura Main Rd.",
    highlight: "Elevator & Stair Access Available",
  },
  {
    id: "reception-lounge",
    src: "/images/receiption.jpg",
    title: "Air-Conditioned Reception & Waiting Lounge",
    category: "Lobby & Reception",
    tag: "Patient Comfort",
    description:
      "Comfortable, well-lit reception desk with digital records management, courteous clinical coordinators, and clean waiting lounge with hygienic seating for families.",
    highlight: "Zero Crowding & Minimal Wait Times",
  },
  {
    id: "main-entry",
    src: "/images/main entry.jpg",
    title: "Main Clinic Entrance & Privacy Doors",
    category: "Lobby & Reception",
    tag: "Private Entry",
    description:
      "Frosted glass entrance doors designed to provide a calm, welcoming threshold and strict patient confidentiality as soon as you step onto the 1st floor.",
    highlight: "Spotless Clinical Hygiene",
  },
  {
    id: "consultation-room",
    src: "/images/interior1.jpg",
    title: "Doctor Consultation Chamber & Corridor",
    category: "Consultation Suites",
    tag: "Doctor-Led",
    description:
      "Private specialist consultation rooms where Dr. Anil Raj D and Dr. Pallavi K N conduct thorough, unhurried evaluations with complete ultrasound examination readiness.",
    highlight: "100% Doctor-Led Consultations",
  },
  {
    id: "board-surgery",
    src: "/images/board-surgery.jpg",
    title: "General & Laparoscopic Surgery Department",
    category: "Department Wings",
    tag: "Surgical Mastery",
    description:
      "Official surgical department wing headed by Dr. Anil Raj D. Specialized in minimally invasive hernia, gallbladder, appendicitis, piles, and fistula daycare procedures.",
    highlight: "Minimally Invasive Daycare OT",
  },
  {
    id: "board-maternity",
    src: "/images/board-maternity.jpg",
    title: "Obstetrics & Gynecology Maternal Wing",
    category: "Department Wings",
    tag: "Maternal Wellness",
    description:
      "Maternity care wing led by Dr. Pallavi K N offering complete antenatal screening, high-risk pregnancy management, normal delivery guidance, and 24/7 labor support.",
    highlight: "24/7 Emergency Labor Readiness",
  },
  {
    id: "board-specialties",
    src: "/images/board-specialties.jpg",
    title: "Multispeciality OPD, Diagnostics & Pharmacy",
    category: "Department Wings",
    tag: "All-in-One",
    description:
      "Comprehensive outpatient department providing pediatric care, dermatology, clinical pathology tests, sonography, and an on-site dispensary for immediate medicines.",
    highlight: "In-House Lab & Pharmacy",
  },
];

export default function HospitalCampusSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState<FacilityImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Exterior & Facade",
    "Lobby & Reception",
    "Consultation Suites",
    "Department Wings",
  ];

  const filteredPhotos =
    activeFilter === "All"
      ? CLINIC_PHOTOS
      : CLINIC_PHOTOS.filter((photo) => photo.category === activeFilter);

  return (
    <section
      id="campus-tour"
      className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/40 via-white to-rose-50/30 border-b border-rose-100/70 relative overflow-hidden"
    >
      {/* Brand Color Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-brand-purple border border-purple-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-brand-purple" />
              <span>Hospital Facade &amp; Campus Tour</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Explore our modern hospital{" "}
              <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
                facade &amp; clinical facilities.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-3">
              Conveniently located on Doddaballapura Main Road above Cauvery Tata Motors in Singanayakanahalli, Yelahanka. Step inside our hygienic, patient-first spaces.
            </p>
          </div>

          {/* Key Landmark Quick Callout Pill */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white p-4 rounded-2xl border-2 border-brand-purple/20 shadow-card shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-rose text-white flex items-center justify-center shrink-0 shadow-xs">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-rose">
                Landmark Location
              </p>
              <p className="text-sm font-extrabold text-slate-900">
                Above Cauvery Tata Motors Showroom
              </p>
              <p className="text-xs text-slate-500">
                1st Floor, P.L. Complex &middot; Yelahanka
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BIG CINEMATIC HOSPITAL FACADE SHOWCASE (Requested by User in a Bigger Way) */}
        {/* ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group"
        >
          {/* Big Facade Image */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] cursor-pointer"
            onClick={() => setSelectedImage(CLINIC_PHOTOS[0])}
          >
            <Image
              src="/images/fancade.jpg"
              alt="PARAM Women's & Multispeciality Clinic Main Facade above Cauvery Tata Motors"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Elegant Gradient Scrim for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />

            {/* Top Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/90 backdrop-blur-md text-white border border-white/20 text-xs font-extrabold uppercase tracking-wider shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-rose-300" />
                <span>Hospital Facade &middot; Doddaballapura Highway</span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(CLINIC_PHOTOS[0]);
                }}
                className="btn-press flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-900 text-xs font-bold shadow-md transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">View Fullscreen</span>
              </button>
            </div>

            {/* Bottom Cinematic Landmark Information Card */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
              <div className="bg-slate-900/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 text-white max-w-3xl shadow-elevated">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-brand-rose text-white text-[11px] font-extrabold uppercase tracking-wide">
                    1st Floor &middot; P.L. Complex
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-brand-teal text-white text-[11px] font-extrabold uppercase tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>Singanayakanahalli, Yelahanka</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  PARAM Women&apos;s &amp; Multispeciality Clinic Facade
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Located directly above the prominent <strong className="text-white font-bold">Cauvery Tata Motors Showroom</strong> on Doddaballapura Main Road. Easily accessible with wide highway approach, ground floor entrance, lift facility, and roadside parking.
                </p>

                {/* Key Facility Highlights Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 mt-4 border-t border-white/15 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Prime Highway Visibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Car className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Dedicated Parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Clock className="w-4 h-4 text-rose-300 shrink-0" />
                    <span>24/7 Labor Helpline</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Safe Family Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* MULTI-PHOTO CLINIC CAMPUS TOUR GALLERY */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Clinic Tour &amp; Department Wings
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Click any image to inspect the authentic premises and department facilities.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`btn-press px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === category
                      ? "bg-brand-purple text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-purple-50 hover:text-brand-purple border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Clinic Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedImage(photo)}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-card hover:border-brand-purple/50 hover:shadow-elevated transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide bg-brand-purple text-white shadow-xs">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 group-hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Category Overlay */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <p className="text-[11px] font-semibold text-rose-200 uppercase tracking-wider">
                        {photo.category}
                      </p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 space-y-2">
                    <h4 className="font-extrabold text-sm text-slate-900 leading-snug group-hover:text-brand-purple transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight Strip */}
                <div className="p-3 bg-purple-50/60 border-t border-purple-100 flex items-center justify-between text-xs text-brand-purple font-bold">
                  <span className="truncate pr-2">{photo.highlight}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border-4 border-white/20 flex flex-col max-h-[90vh]"
            >
              {/* Image Preview */}
              <div className="relative h-[360px] sm:h-[460px] w-full bg-slate-900">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
                
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors z-20"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Description Footer */}
              <div className="p-6 bg-gradient-to-r from-purple-50/70 via-white to-rose-50/70 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-brand-purple text-white">
                    {selectedImage.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-teal-100 text-brand-teal border border-teal-200">
                    {selectedImage.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedImage.title}
                </h3>
                
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-brand-rose">
                  <Sparkles className="w-4 h-4 text-brand-rose" />
                  <span>Feature: {selectedImage.highlight}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
