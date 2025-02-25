import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const socialLinks = [
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/afroasianeducation/",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/people/Afroasian-Education/61567383308551/",
  },
  {
    icon: <Twitter size={20} />,
    href: "#",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/company/afroasian-education",
  },
];

export default function TopBar() {
  return (
    <div className="w-full hidden lg:flex px-4 bg-blue-950 h-10 items-center justify-center ">
      <div className="flex-row gap-5 flex items-center  max-w-6xl w-full  justify-end">
        <Link
          href={"mailto:support@afroasianeducation.com"}
          className="text-white text-sm flex gap-2 items-center"
        >
          <Mail size={20} />
          support@afroasianeducation.com
        </Link>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex gap-2 items-center text-white text-sm">
          <Phone size={20} />
          <Link href="tel:+919871126409" className="text-white">
            +91-9871126409
          </Link>
          <span>- </span>
          <Link href="tel:+919220506409" className="text-white">
            +91-9220506409
          </Link>
          <span>- </span>
          <Link href="tel:+911203120779" className="text-white">
            01203120779
          </Link>
          <span>- </span>
          <Link href="tel:+911203200419" className="text-white">
            01203200419
          </Link>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex gap-2 items-center text-white text-sm">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
