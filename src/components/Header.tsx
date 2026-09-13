"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, MapPin, Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Clinic", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Specialties & Surgery", href: "#specialties" },
    { name: "Hospital Facade & Tour", href: "#campus-tour" },
    { name: "Facilities", href: "#facilities" },
    { name: "Patient Reviews", href: "#reviews" },
    { name: "Find Us", href: "#location" },
  ];

  const appointmentWhatsAppUrl = `https://wa.me/${HOSPITAL_INFO.phones.appointmentRaw}?text=${encodeURIComponent(
    "Hello Param Clinic, I would like to inquire about booking a doctor consultation."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 transition-all">
      {/* Top Notification Strip with Brand Colors */}
      <div className="bg-gradient-to-r from-brand-purple-dark via-brand-purple to-[#2b0e25] text-slate-200 text-xs py-2 px-4 border-b border-rose-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-rose-300" />
              <span>Yelahanka, Bengaluru &middot; 1st Floor, P.L. Complex (Above Tata Motors)</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>Mon-Sat: 9:00 AM – 8:30 PM | Sun: 9:30 AM – 1:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="inline-flex items-center gap-1 text-rose-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>24/7 Emergency & Maternity Helpline:</span>
            </span>
            <a
              href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
              className="font-semibold text-white hover:text-brand-rose transition-colors flex items-center gap-1 tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{HOSPITAL_INFO.phones.appointment}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Prominent Official Brand Logo */}
          <Link href="/" className="flex items-center group focus:outline-none transition-transform active:scale-[0.98]">
            <div className="relative py-1 flex items-center">
              <Image
                src="/images/brand-logo-transparent.png"
                alt="PARAM Women's & Multispeciality Clinic"
                width={320}
                height={100}
                className="h-12 sm:h-16 w-auto object-contain hover:opacity-95 transition-opacity"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-teal transition-colors tracking-tight relative py-1 focus:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Dual Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
              className="btn-press inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-brand-purple bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200"
              title="Call Clinic Reception"
            >
              <Phone className="w-3.5 h-3.5 text-brand-rose" />
              <span>Call Reception</span>
            </a>

            <a
              href={appointmentWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-brand-whatsapp hover:bg-brand-whatsapp-dark rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-brand-whatsapp" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
              className="btn-press p-2 rounded-lg bg-slate-100 text-brand-navy border border-slate-200"
              aria-label="Call Hospital"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-teal transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href={appointmentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-press w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-brand-whatsapp rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-brand-whatsapp" />
                <span>Book Consultation via WhatsApp</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-press w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-brand-navy bg-slate-100 rounded-lg border border-slate-200"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Call +91 63629 59849</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Doctor-Led Consultations &middot; Singanayakanahalli</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}