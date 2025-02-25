import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

interface SocialLink {
  title: string;
  href: string;
  icon: React.ComponentType;
}

export const quickLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Admission", href: "/admission" },
  { title: "Loan", href: "/loan" },
  { title: "Brochures", href: "/brochures" },
  { title: "Visa", href: "/visa" },
  { title: "Blogs", href: "/blogs" },
];

export const usefulLinks: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms" },
];
export const universities1: NavItem[] = [
  {
    title: "International Medical University",
    href: "/university/international-medical-university",
  },
  {
    title: "Eurasian International University",
    href: "/university/eurasian-international-university",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/people/Afroasian-Education/61567383308551/",
    icon: Facebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/afroasianeducation/",
    icon: Instagram,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/afroasian-education",
    icon: Linkedin,
  },
];

export const contactInfo = {
  addresses: [
    {
      text: "Tower (B) - 710 A Logix Cyber Park (Bhutani) Block C, C28/29 Phase 2, Industrial Area Sector 62 Noida",
      icon: "MapPin",
    },
    {
      text: "298 L, Medmaark Building, Near MM Hospital, Pappinisseri, Kannur, Kerala-670561",
      icon: "MapPin",
    },
  ],
  phones: [
    { number: "+91 98711 26409", href: "tel:+919871126409" },
    { number: "+91 92205 06409", href: "tel:+919220506409" },
    { number: "+91 123120779", href: "tel:+911203120779" },
    { number: "+91 123200419", href: "tel:+911203200419" },
  ],
  email: {
    address: "support@afroasianeducation.com",
    href: "mailto:support@afroasianeducation.com",
  },
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/university",
    label: "Universities",
    content: [
      {
        title: "International Medical University",
        href: "/university/international-medical-university",
      },
      {
        title: "Eurasian International University",
        href: "/university/eurasian-international-university",
      },
    ],
  },
  {
    href: "/loan",
    label: "Loan",
    content: [
      {
        title: "HDFC",
        href: "/loan/hdfc",
      },
      {
        title: "ICICI",
        href: "/loan/icici",
      },
    ],
  },
  {
    href: "/brochure",
    label: "Brochure",
  },
  { href: "/visa", label: "VISA" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];
