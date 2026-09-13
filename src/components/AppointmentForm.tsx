"use client";

import React, { useState } from "react";
import { MessageCircle, Calendar, Phone, User, CheckCircle2 } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("Dr. Pallavi K N - Obstetrician & Gynecologist");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10:00 AM – 1:00 PM)");
  const [note, setNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !date) {
      alert("Please fill in your Name, Phone Number, and Preferred Date.");
      return;
    }

    const message = `*NEW APPOINTMENT REQUEST - PARAM CLINIC*
----------------------------------------
*Patient Name:* ${name.trim()}
*Contact Phone:* ${phone.trim()}
*Doctor / Specialty:* ${specialty}
*Preferred Date:* ${date}
*Preferred Time Slot:* ${timeSlot}
${note.trim() ? `*Reason for Visit:* ${note.trim()}` : ""}
----------------------------------------
Please confirm my appointment slot. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HOSPITAL_INFO.phones.appointmentRaw}?text=${encodedMessage}`;

    setIsSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-b from-rose-50/40 via-white to-purple-50/40 border-b border-rose-100/70 relative overflow-hidden">
      {/* Brand Color Ambient Glows */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Container with Brand Gradient Accent */}
        <div className="bg-white rounded-3xl overflow-hidden border-2 border-brand-purple/20 shadow-elevated">
          <div className="h-2 w-full bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal" />
          
          <div className="p-8 sm:p-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-brand-purple border border-purple-200 text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                <span>Instant WhatsApp Booking</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Schedule your{" "}
                <span className="bg-gradient-to-r from-brand-purple via-brand-rose to-brand-teal bg-clip-text text-transparent">
                  doctor visit.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Fill in your details below. We instantly prepare and send a WhatsApp appointment request to our clinic coordinator.
              </p>
            </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Opening WhatsApp to Complete Booking
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your appointment request was compiled. If WhatsApp did not open automatically, click the button below:
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold text-brand-teal underline pt-2"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Specialty / Doctor */}
                <div className="space-y-2">
                  <label htmlFor="consultation-specialty" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Doctor / Department *
                  </label>
                  <select
                    id="consultation-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white"
                  >
                    <option value="Dr. Pallavi K N - Obstetrician & Gynecologist">
                      Dr. Pallavi K N (Obstetrics &amp; Gynaecology)
                    </option>
                    <option value="Dr. Anil Raj D - General & Laparoscopic Surgeon">
                      Dr. Anil Raj D (General &amp; Laparoscopic Surgery)
                    </option>
                    <option value="Pediatrics & Child Healthcare">
                      Pediatrics &amp; Newborn Vaccination
                    </option>
                    <option value="Dermatology & Skin Care">
                      Dermatology &amp; Skin Care
                    </option>
                    <option value="General Medicine Consultation">
                      General Medicine (Fever / BP / Diabetes)
                    </option>
                    <option value="Diagnostic Ultrasound / Lab Tests">
                      Diagnostic Laboratory / Ultrasound Scan
                    </option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="appointment-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      id="appointment-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="time-slot" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Time Slot
                  </label>
                  <select
                    id="time-slot"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:30 PM – 4:30 PM)">Afternoon (1:30 PM – 4:30 PM)</option>
                    <option value="Evening (5:00 PM – 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                    <option value="Urgent / Same Day Consultation">Urgent / Same Day Consultation</option>
                  </select>
                </div>

                {/* Brief Concern */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="visit-note" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Reason for Visit / Symptoms (Optional)
                  </label>
                  <textarea
                    id="visit-note"
                    rows={3}
                    placeholder="Briefly describe your symptoms or inquiry (e.g., first pregnancy checkup, hernia consultation, routine blood test)..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-press w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-whatsapp hover:bg-brand-whatsapp-dark shadow-lg shadow-emerald-950/15 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-brand-whatsapp" />
                  <span>Send WhatsApp Appointment Request</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2.5">
                  Direct message sent to clinic coordinator (+91 63629 59849). No account needed.
                </p>
              </div>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}