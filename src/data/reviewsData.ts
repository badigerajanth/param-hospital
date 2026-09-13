export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  treatment: string;
  doctor: string;
  quote: string;
  isLocalGuide?: boolean;
}

export const REVIEWS_STATS = {
  rating: 4.9,
  maxRating: 5.0,
  totalReviews: 50,
  satisfactionRate: "99%",
  googleMapsReviewUrl: "https://maps.google.com/?q=Param+Women%27s+%26+Multispeciality+Clinic+Singanayakanahalli+Bengaluru"
};

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Vijay Singh",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Maternity & Child Delivery",
    doctor: "Dr. Pallavi K N",
    quote: "Dr. Pallavi is truly one of the best gynecologists in town. She treated my wife during the delivery of our daughter, and our entire experience was excellent. Calm, confident, caring, and highly professional. Her reassurance made us feel safe and supported throughout.",
    isLocalGuide: false
  },
  {
    id: "rev-2",
    author: "Jagadeesh M",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Critical Pediatric Emergency Support",
    doctor: "Dr. Anil Raj D & Dr. Pallavi K N",
    quote: "People say god is great but doctors are like gods in difficult times. We are very thankful to Dr Anil raj sir and Dr pallavi madam at Param Clinic for guiding us throughout the night in my son's critical situation. Their timely advice made a big difference in my son's recovery.",
    isLocalGuide: true
  },
  {
    id: "rev-3",
    author: "Ananda K",
    rating: 5,
    timeAgo: "Recent",
    treatment: "Laparoscopic Gallbladder Surgery",
    doctor: "Dr. Anil Raj D",
    quote: "Diagnosed with symptomatic gallbladder stones, I was initially anxious. Dr. Raj took the time to explain the laparoscopic procedure and recovery process in clear detail. His calm demeanour and approachable attitude immediately put my family and me at ease.",
    isLocalGuide: false
  },
  {
    id: "rev-4",
    author: "Navaneeth Srinidhi R",
    rating: 5,
    timeAgo: "Recent",
    treatment: "Hernia Laparoscopic Surgery",
    doctor: "Dr. Anil Raj D",
    quote: "Dr Anil Raj is a very professional and ethical surgeon. I underwent a hernia surgery—the doctor was very good in diagnosing the condition and the surgery was completely smooth and uneventful. Heartfelt thanks to Dr Anil and Param Clinic.",
    isLocalGuide: false
  },
  {
    id: "rev-5",
    author: "Amulya Kunamalla",
    rating: 5,
    timeAgo: "4 months ago",
    treatment: "Fertility Journey & Conception",
    doctor: "Dr. Pallavi K N",
    quote: "I am incredibly thankful to Dr. Pallavi for her excellent care throughout my fertility journey. Professional, compassionate, and thorough in explaining every step. I conceived successfully during the first cycle. I could not be happier!",
    isLocalGuide: false
  },
  {
    id: "rev-6",
    author: "Chaithanya B",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Second Pregnancy & Delivery",
    doctor: "Dr. Pallavi K N",
    quote: "During my first pregnancy I faced issues elsewhere, but in my second pregnancy Dr. Pallavi walked me through the entire process, answering every question with clarity and genuine care. The staff was equally welcoming and supportive.",
    isLocalGuide: false
  },
  {
    id: "rev-7",
    author: "Raghu",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Appendectomy (Appendix Removal)",
    doctor: "Dr. Anil Raj D",
    quote: "I recently underwent an appendicectomy under the care of Dr. Anil Raj D, and I am extremely grateful. He is an attentive listener who understood all my concerns and explained everything clearly before and after the surgery.",
    isLocalGuide: true
  },
  {
    id: "rev-8",
    author: "Roja Sujit",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Antenatal Care & Delivery",
    doctor: "Dr. Pallavi K N",
    quote: "Dr Pallavi is a very humble Gynecologist who attends to patients with complete dedication. During my pregnancy she was always available on phone at any given hour. My delivery experience was smooth, safe, and stress-free.",
    isLocalGuide: false
  },
  {
    id: "rev-9",
    author: "Soundarya T",
    rating: 5,
    timeAgo: "5 months ago",
    treatment: "Difficult Pregnancy & Normal Delivery",
    doctor: "Dr. Pallavi K N",
    quote: "During my difficult pregnancy time, Dr. Pallavi encouraged and guided me constantly. Thanks to her relentless support and patience, I had a normal delivery. Caring for both me and my baby like family!",
    isLocalGuide: false
  }
];