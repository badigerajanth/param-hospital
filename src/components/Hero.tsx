"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, Phone, MessageCircle, ShieldCheck, Award, HeartPulse, Sparkles, MapPin } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";
import { REVIEWS_STATS } from "@/data/reviewsData";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const appointmentWhatsAppUrl = `https://wa.me/${HOSPITAL_INFO.phones.appointmentRaw}?text=${encodeURIComponent(
    "Hello Param Clinic, I would like to schedule a consultation with your specialist doctor."
  )}`;

  return (
    <section className="relative min-h-[90dvh] lg:min-h-[92dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-purple-50/30 border-b border-rose-100/60">
      {/* Luminous Brand Ambient Light Blobs (Purple, Rose, Teal from Logo) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Reassuring, Welcoming Healthcare Headline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Google Rating Badge with Golden Stars */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 bg-white border border-rose-200/80 rounded-full px-4 py-1.5 text-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-extrabold text-sm text-slate-900 ml-1">
                  {REVIEWS_STATS.rating.toFixed(1)}
                </span>
              </div>
              <span className="h-3 w-px bg-slate-300" />
              <a
                href="#reviews"
                className="text-xs font-semibold text-brand-purple hover:text-brand-rose transition-colors"
              >
                50+ Verified Google Reviews &middot; Yelahanka
              </a>
            </motion.div>

            {/* Brand Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-xs font-bold text-brand-rose uppercase tracking-wider block w-fit">
              <HeartPulse className="w-3.5 h-3.5 text-brand-rose" />
              <span>Women&apos;s Health &amp; Laparoscopic Surgery Center</span>
            </div>

            {/* Main Headline with Brand Gradient */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
            >
              Advanced Surgical Care &amp;{" "}
              <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
                Dedicated Maternity
              </span>{" "}
              for Your Family.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              Direct, unhurried consultations by <strong className="text-brand-purple font-bold">Dr. Anil Raj D</strong> (General &amp; Laparoscopic Surgeon) and <strong className="text-brand-rose font-bold">Dr. Pallavi K N</strong> (Senior Obstetrician &amp; Gynecologist) with 24/7 emergency &amp; labor admission readiness.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href={appointmentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-bold text-base bg-brand-whatsapp hover:bg-brand-whatsapp-dark shadow-md shadow-emerald-900/10 transition-all border border-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-white text-brand-whatsapp" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
                className="btn-press flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-bold text-base bg-brand-purple hover:bg-brand-purple-dark shadow-md shadow-purple-900/10 transition-all"
              >
                <Phone className="w-5 h-5 text-rose-300" />
                <span>Call Clinic: {HOSPITAL_INFO.phones.appointment}</span>
              </a>
            </motion.div>

            {/* Key Clinical Assurance Pills */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-rose-200/60"
            >
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-50/70 border border-purple-200/60">
                <ShieldCheck className="w-5 h-5 text-brand-purple shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-brand-purple">Direct Doctor Care</p>
                  <p className="text-slate-600">No resident handoffs</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-teal-50/70 border border-teal-200/60">
                <Award className="w-5 h-5 text-brand-teal shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-brand-teal">Laparoscopic OT</p>
                  <p className="text-slate-600">Day-care recovery</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-rose-50/80 border border-rose-200/70">
                <HeartPulse className="w-5 h-5 text-brand-rose shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-brand-rose">24/7 Maternity Support</p>
                  <p className="text-slate-600">ANC to normal birth</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Res Clinic Photography Showcase */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Primary Image: Modern Reception Lounge */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src="/images/receiption.jpg"
                  alt="PARAM Clinic Modern Reception Lounge & Waiting Area"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />
                
                {/* Reception Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-brand-purple text-white shadow-xs">
                    Patient Reception &amp; Lounge
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    PARAM Women&apos;s &amp; Multispeciality Clinic Lobby
                  </p>
                </div>
              </div>

              {/* Secondary Sub-Bar: Entrance Photo & Landmark Callout */}
              <div className="p-4 bg-gradient-to-r from-purple-50/70 via-white to-rose-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-brand-rose/40 shrink-0">
                    <Image
                      src="/images/main entry.jpg"
                      alt="PARAM Clinic Main Entrance"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-purple block">
                      Main Clinic Entrance
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-teal" />
                      <span>Above Cauvery Tata Motors Showroom</span>
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-teal-100 text-brand-teal border border-teal-200 uppercase tracking-wide shrink-0">
                  1st Floor
                </span>
              </div>
            </div>

            {/* Decorative Floating Trust Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-elevated border border-rose-200/80 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-rose text-white flex items-center justify-center font-bold text-sm shadow-xs">
                4.9★
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-slate-900">Highest Rated in Yelahanka</p>
                <p className="text-[11px] text-brand-teal font-semibold">50+ Verified Google Reviews</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}