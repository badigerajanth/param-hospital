"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy text-white relative">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-brand-purple to-brand-navy border-b border-rose-500/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-400 animate-ping" />
            <div>
              <p className="font-bold text-sm sm:text-base text-white">
                24/7 Emergency Admissions &amp; Maternal Labor Helpline
              </p>
              <p className="text-xs text-rose-200">
                Direct doctor line for urgent surgical care, acute abdominal pain, and labor arrivals.
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
            className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm text-brand-navy bg-white hover:bg-rose-50 shadow-md transition-all shrink-0"
          >
            <Phone className="w-4 h-4 text-rose-600" />
            <span>Call: {HOSPITAL_INFO.phones.appointment}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Hospital Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white px-4 py-2.5 rounded-2xl w-fit shadow-md border border-white/20">
              <Image
                src="/images/brand-logo.png"
                alt="PARAM Women's & Multispeciality Clinic Logo"
                width={260}
                height={85}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Doctor-led healthcare in Yelahanka offering advanced laparoscopic surgeries, comprehensive maternal wellness, pediatric care, dermatology, and on-site diagnostics.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">
                Consultant Specialists:
              </p>
              <p className="text-xs text-slate-200">
                &bull; Dr. Anil Raj D (General &amp; Laparoscopic Surgeon)
              </p>
              <p className="text-xs text-slate-200">
                &bull; Dr. Pallavi K N (Obstetrician &amp; Gynecologist)
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Clinic
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Laparoscopic Surgery
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Maternity &amp; Gynaec
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities &amp; Lab
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300">
              Operating Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday – Saturday</p>
                  <p className="text-slate-400">9:00 AM – 8:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p className="text-slate-400">9:30 AM – 1:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-rose-300">Emergency &amp; Labor</p>
                  <p className="text-slate-400">24/7 on Call for Critical Admissions</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300">
              Contact &amp; Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Above Tata Car Showroom, No 6/4, Singanayakanahalli, Doddaballapura Main Road, Yelahanka Taluk, Bengaluru - 560064
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="space-y-0.5">
                  <p>
                    Appointment:{" "}
                    <a href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`} className="text-white hover:text-teal-300 font-semibold">
                      +91 63629 59849
                    </a>
                  </p>
                  <p>
                    Dr. Anil Raj:{" "}
                    <a href={`tel:${HOSPITAL_INFO.phones.drAnilRaw}`} className="text-white hover:text-teal-300">
                      +91 70197 59849
                    </a>
                  </p>
                  <p>
                    Dr. Pallavi KN:{" "}
                    <a href={`tel:${HOSPITAL_INFO.phones.drPallaviRaw}`} className="text-white hover:text-teal-300">
                      +91 97383 34555
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="hover:text-white text-slate-300 truncate"
                >
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} PARAM Women&apos;s &amp; Multispeciality Clinic. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="btn-press flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}