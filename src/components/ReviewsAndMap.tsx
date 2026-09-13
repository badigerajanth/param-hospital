"use client";

import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import {
  Star,
  MapPin,
  ExternalLink,
  Navigation,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { REVIEWS, REVIEWS_STATS } from "@/data/reviewsData";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function ReviewsAndMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });
  const [isHovered, setIsHovered] = useState(false);

  // Repeat reviews 3 times for a completely seamless, continuous loop
  const loopReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal border border-teal-200 text-xs font-semibold tracking-wide uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Google Patient Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted by families across Bengaluru.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-2">
              4.9★ verified Google patient reviews for Dr. Anil Raj D, Dr. Pallavi K N, and the Param clinical team.
            </p>
          </div>

          {/* Interactive Scroll Status & Google Rating Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isInView && !isHovered
                    ? "bg-emerald-500 animate-pulse"
                    : isHovered
                    ? "bg-amber-500"
                    : "bg-slate-400"
                }`}
              />
              <span>
                {isHovered
                  ? "Paused on Hover"
                  : isInView
                  ? "Auto-Scrolling Loop (Active)"
                  : "Scroll into view to loop"}
              </span>
            </div>

            <a
              href={REVIEWS_STATS.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors shadow-xs"
            >
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9★ (50+ Google Reviews)</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Reviews Marquee Track (Left to Right Loop) */}
      <div
        className="relative w-full py-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

        {/* Moving Loop Container */}
        <div
          className="flex gap-5 animate-marquee-ltr"
          style={{
            width: "max-content",
            animationPlayState: isInView && !isHovered ? "running" : "paused",
          }}
        >
          {loopReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-elevated hover:border-teal-300 transition-all flex flex-col justify-between select-none"
            >
              <div>
                {/* Review Header: Stars, Google badge & time */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Google Review</span>
                    <span>&middot;</span>
                    <span>{rev.timeAgo}</span>
                  </div>
                </div>

                {/* Treatment / Doctor Badge */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-teal-50 text-brand-teal border border-teal-100">
                    {rev.treatment} &middot; {rev.doctor}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block leading-tight">
                      {rev.author}
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 inline" />
                      <span>Verified Patient</span>
                    </span>
                  </div>
                </div>

                {rev.isLocalGuide && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                    Local Guide
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map and Location Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div
          id="location"
          className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Clinic Address & Driving Directions */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-slate-50/50">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-brand-teal border border-teal-200 text-xs font-semibold tracking-wide uppercase mb-4">
                <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                <span>Clinic Location & Landmark</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                Conveniently located on Doddaballapura Main Road.
              </h3>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">
                      PARAM Women&apos;s &amp; Multispeciality Clinic
                    </strong>
                    <p className="mt-0.5 leading-relaxed">{HOSPITAL_INFO.address}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 font-medium">
                  <strong>Key Landmark:</strong> Above Cauvery Tata Motors Showroom, P.L. Complex (1st Floor). Dedicated patient parking available.
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-sm font-bold text-white bg-brand-navy hover:bg-slate-800 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>Get Driving Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
                className="btn-press w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call for Directions: {HOSPITAL_INFO.phones.appointment}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-slate-100">
            <iframe
              title="PARAM Clinic Google Map Location"
              src={HOSPITAL_INFO.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[340px] sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}