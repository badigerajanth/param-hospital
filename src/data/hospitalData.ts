export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  subspecialties: string[];
  experience: string;
  bio: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  image: string;
  badge: string;
  keyServices: string[];
}

export interface ServiceItem {
  name: string;
  description: string;
  highlight: string;
  category: 'surgery' | 'maternity' | 'specialist';
}

export interface Facility {
  title: string;
  desc: string;
  badge: string;
}

export const HOSPITAL_INFO = {
  name: "PARAM Women's & Multispeciality Clinic",
  shortName: "PARAM Clinic",
  tagline: "Doctor-Led Personalized Care for Women & Families in Yelahanka",
  address: "Above Tata Car Showroom, No 6/4, Singanayakanahalli, Doddaballapura Main Road, Yelahanka Taluk, Bengaluru - 560064",
  landmark: "Above Cauvery Tata Motors Showroom, P.L. Complex",
  googleMapsUrl: "https://maps.google.com/?q=Param+Women%27s+%26+Multispeciality+Clinic+Singanayakanahalli+Bengaluru",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3429381678854!2d77.5683416!3d13.1408892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae196f7c1bcf7b%3A0x60cbbe088a87b640!2sSinganayakanahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  email: "paramwomenandspecialityclinic@gmail.com",
  phones: {
    appointment: "+91 63629 59849",
    appointmentRaw: "916362959849",
    drAnil: "+91 70197 59849",
    drAnilRaw: "917019759849",
    drPallavi: "+91 97383 34555",
    drPallaviRaw: "919738334555",
  },
  operatingHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 8:30 PM" },
    { days: "Sunday", hours: "9:30 AM – 1:30 PM" },
    { days: "Emergency Admissions", hours: "24/7 on Call for Critical Care & Labor" }
  ]
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-anil-raj-d",
    name: "Dr. Anil Raj D",
    qualifications: "MBBS, MS, FMAS, FIAGES",
    specialty: "General & Laparoscopic Surgeon",
    subspecialties: ["Minimally Invasive Surgery", "Laser Proctology", "Gastrointestinal Procedures"],
    experience: "12+ Years of Advanced Surgical Practice",
    bio: "Consultant surgeon with fellowship training in Minimal Access Surgery (FMAS, FIAGES). Dr. Anil Raj D specializes in cutting-edge laparoscopic procedures, gastrointestinal treatments, hernia repairs, and day-care laser proctology. Known for his attentive listening, precise diagnosis, and compassionate bedside manner.",
    phone: "+91 70197 59849",
    phoneFormatted: "+91 70197 59849",
    whatsappNumber: "917019759849",
    image: "/images/dr-anil.jpg",
    badge: "Senior Laparoscopic Surgeon",
    keyServices: [
      "Appendectomy (Laparoscopic Appendix Removal)",
      "Cholecystectomy (Gallbladder Stones)",
      "Hernia Repair (Inguinal, Umbilical, Incisional)",
      "Laser Surgery for Piles, Fistula & Fissure",
      "Bowel & Colon Related Surgeries",
      "Thyroid, Breast Lump & Soft Tissue Excision",
      "Day Care Surgeries & Biopsy Procedures"
    ]
  },
  {
    id: "dr-pallavi-k-n",
    name: "Dr. Pallavi K N",
    qualifications: "MBBS, DNB",
    specialty: "Obstetrician & Gynecologist",
    subspecialties: ["High-Risk Pregnancy", "Normal Delivery", "Fertility & Laparoscopic Gynaec"],
    experience: "11+ Years of Compassionate Women's Care",
    bio: "Dedicated obstetrician & gynecologist committed to guiding women through every milestone—from adolescence and family planning to high-risk pregnancies, normal deliveries, and menopause. Trusted by hundreds of families for her calm, reassuring demeanor, thorough explanations, and direct 24/7 patient support.",
    phone: "+91 97383 34555",
    phoneFormatted: "+91 97383 34555",
    whatsappNumber: "919738334555",
    image: "/images/dr-pallavi.jpg",
    badge: "Senior Obstetrician & Gynecologist",
    keyServices: [
      "High-Risk Pregnancy Care & Monitoring",
      "Normal Vaginal Delivery & Painless Labor Support",
      "Cesarean Delivery (LSCS)",
      "Adolescence & Hormonal / PCOD Clinic",
      "Fertility Workup & Ovulation Induction",
      "Laparoscopic Hysterectomy & Sterilization",
      "Pelvic Floor Repairs & Prolapse Correction"
    ]
  }
];

export const SURGICAL_SERVICES: ServiceItem[] = [
  { name: "Appendectomy", description: "Laparoscopic keyhole appendix removal with rapid recovery and minimal pain.", highlight: "Laparoscopic", category: "surgery" },
  { name: "Cholecystectomy", description: "Safe gallbladder stone removal using advanced minimal access techniques.", highlight: "Gold Standard", category: "surgery" },
  { name: "Hernia Repair", description: "Tension-free mesh repair for Inguinal, Umbilical, and Incisional hernias.", highlight: "Keyhole / Open", category: "surgery" },
  { name: "Laser Anorectal Care", description: "Painless laser treatment for Hemorrhoids (Piles), Anal Fistula & Fissures.", highlight: "Day Care / Laser", category: "surgery" },
  { name: "Bowel & Colon Surgery", description: "Precision surgical management of gastrointestinal obstructions and diverticula.", highlight: "Specialist OT", category: "surgery" },
  { name: "Splenectomy", description: "Specialized spleen removal for hematological conditions and abdominal trauma.", highlight: "Expert Surgery", category: "surgery" },
  { name: "Thyroid & Breast Care", description: "Comprehensive evaluation, fine-needle biopsy, and surgery for nodules & lumps.", highlight: "Clinical Focus", category: "surgery" },
  { name: "Soft Tissue & Skin Surgery", description: "Excision of lipomas, cysts, dermoid swellings, and minor trauma closures.", highlight: "Same-Day Return", category: "surgery" }
];

export const MATERNITY_SERVICES: ServiceItem[] = [
  { name: "High-Risk Pregnancy", description: "Intensive antenatal monitoring for gestational diabetes, hypertension & multiples.", highlight: "24/7 On Call", category: "maternity" },
  { name: "Normal Vaginal Delivery", description: "Compassionate, patient-led natural delivery support with gentle mother-baby bonding.", highlight: "Doctor Present", category: "maternity" },
  { name: "Cesarean Delivery (LSCS)", description: "Planned & emergency cesarean surgical facility with advanced anesthesia.", highlight: "Sterile OT", category: "maternity" },
  { name: "Adolescence & Sexual Health", description: "Empathetic, confidential counseling for teen girls on menstrual health & PCOD.", highlight: "Private & Caring", category: "maternity" },
  { name: "Basic Fertility Care", description: "Ovulation induction cycles, follicular imaging, and hormonal balancing.", highlight: "Proven Outcomes", category: "maternity" },
  { name: "Gynaec Laparoscopic Surgery", description: "Keyhole hysterectomy, ovarian cyst removal, and tubal sterilization.", highlight: "Minimally Invasive", category: "maternity" },
  { name: "Pelvic Floor Reconstruction", description: "Restorative surgery for cystocele, rectocele, and uterine prolapse.", highlight: "Restorative", category: "maternity" },
  { name: "Cancer Screening & Vaccines", description: "Preventive Pap smears, cervical screenings, and HPV cervical vaccination.", highlight: "Preventive", category: "maternity" }
];

export const SPECIALIST_DEPTS = [
  { name: "Pediatrics & Child Care", desc: "Newborn vaccinations, developmental checkups, and pediatric acute care." },
  { name: "Dermatology & Skin Aesthetics", desc: "Acne, melasma, eczema, hair fall protocols, and chemical peels." },
  { name: "General Medicine", desc: "Comprehensive care for hypertension, diabetes, viral fevers, and respiratory health." },
  { name: "Psychiatry & Emotional Wellness", desc: "Postpartum mood support, anxiety, stress relief, and holistic mental wellness." }
];

export const CLINIC_FACILITIES: Facility[] = [
  {
    title: "High-End Diagnostic Laboratory",
    desc: "Complete hematology, biochemistry, thyroid panels, and rapid microbiological diagnostics.",
    badge: "Accurate Reports"
  },
  {
    title: "In-House 24/7 Pharmacy",
    desc: "Full inventory of genuine gynecological, surgical, pediatric, and acute emergency medicines.",
    badge: "100% Genuine"
  },
  {
    title: "Ultrasound & Fetal Imaging",
    desc: "Precision obstetric sonography, anomaly scans, and abdominal/pelvic ultrasound on-site.",
    badge: "High Resolution"
  },
  {
    title: "2D Echocardiography",
    desc: "Non-invasive cardiovascular evaluations and Doppler imaging for clinical clearances.",
    badge: "Cardiac Care"
  },
  {
    title: "Day Care Surgery Unit",
    desc: "Sterile minor operating theatre and post-procedure recovery beds for quick discharge.",
    badge: "Sterile OT"
  }
];