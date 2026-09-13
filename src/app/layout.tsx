import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HOSPITAL_INFO } from "@/data/hospitalData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#0f233a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PARAM Women's & Multispeciality Clinic | Yelahanka, Bengaluru",
  description:
    "Top-rated doctor-led clinic in Yelahanka, Bengaluru. Senior Laparoscopic Surgeon Dr. Anil Raj D & Senior Obstetrician & Gynecologist Dr. Pallavi K N. 24/7 Emergency & Maternity admissions. Call +91 63629 59849.",
  keywords: [
    "Param Hospital Yelahanka",
    "Param Clinic Yelahanka",
    "Gynecologist Yelahanka",
    "Laparoscopic Surgeon Doddaballapura Road",
    "Dr Anil Raj D surgeon",
    "Dr Pallavi K N gynecologist",
    "Maternity Hospital Singanayakanahalli",
    "Laser Piles Surgery Bengaluru",
    "Normal Delivery Clinic Yelahanka",
    "Ultrasound Lab Yelahanka",
  ],
  authors: [{ name: "PARAM Women's & Multispeciality Clinic" }],
  creator: "PARAM Clinic",
  publisher: "PARAM Clinic",
  metadataBase: new URL("https://paramclinic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PARAM Women's & Multispeciality Clinic | Yelahanka, Bengaluru",
    description:
      "Doctor-Led Personalized Care for Women & Families. Senior Laparoscopic Surgeon Dr. Anil Raj D & Senior Obstetrician & Gynecologist Dr. Pallavi K N. 4.9★ Google Rating.",
    url: "https://paramclinic.com",
    siteName: "PARAM Women's & Multispeciality Clinic",
    images: [
      {
        url: "/images/fancade.jpg",
        width: 1200,
        height: 630,
        alt: "PARAM Women's & Multispeciality Clinic Facade, Yelahanka Bengaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PARAM Women's & Multispeciality Clinic | Yelahanka, Bengaluru",
    description:
      "Leading healthcare clinic in Yelahanka. Dr. Anil Raj D (Laparoscopic Surgeon) & Dr. Pallavi K N (Gynecologist). Call +91 63629 59849.",
    images: ["/images/fancade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: HOSPITAL_INFO.name,
    alternateName: "PARAM Clinic",
    image: "https://paramclinic.com/images/logo.jpg",
    telephone: HOSPITAL_INFO.phones.appointment,
    email: HOSPITAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Above Cauvery Tata Motors Showroom, No 6/4, Singanayakanahalli, Doddaballapura Main Road",
      addressLocality: "Yelahanka",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1408892,
      longitude: 77.5683416,
    },
    url: "https://paramclinic.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:30",
        closes: "13:30",
      },
    ],
    medicalSpecialty: [
      "ObstetricsAndGynecology",
      "Surgical",
      "Dermatology",
      "Pediatrics",
      "GeneralPractice",
    ],
    physician: [
      {
        "@type": "Physician",
        name: "Dr. Anil Raj D",
        medicalSpecialty: "General & Laparoscopic Surgery",
        jobTitle: "Consultant Laparoscopic Surgeon",
        telephone: "+91 70197 59849",
      },
      {
        "@type": "Physician",
        name: "Dr. Pallavi K N",
        medicalSpecialty: "Obstetrics & Gynecology",
        jobTitle: "Consultant Obstetrician & Gynecologist",
        telephone: "+91 97383 34555",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] bg-white text-slate-900 selection:bg-brand-teal/20 selection:text-brand-navy`}
      >
        {children}
      </body>
    </html>
  );
}

