"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function MobileUtilityBar() {
  const whatsAppUrl = `https://wa.me/${HOSPITAL_INFO.phones.appointmentRaw}?text=${encodeURIComponent(
    "Hello Param Clinic, I want to book an appointment with a doctor."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${HOSPITAL_INFO.phones.appointmentRaw}`}
          className="btn-press flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-sm active:scale-[0.97]"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Clinic</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-brand-whatsapp text-white font-semibold text-sm shadow-sm active:scale-[0.97]"
        >
          <MessageCircle className="w-4 h-4 fill-white text-brand-whatsapp" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}