import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  quickLinks,
  usefulLinks,
  socialLinks,
  contactInfo,
  universities1,
} from "@/data/nav";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-[#02152e] pt-2 text-gray-100">
      {/* upper footer */}
      <div className="bg-gray-100 rounded-md shadow-lg max-w-6xl p-3 mx-auto flex flex-col lg:flex-row items-center justify-center gap-4">
        {/* Card 1 */}
        <div className="w-full bg-orange-50 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col justify-center items-start bg-[url('/footer-1.webp')] bg-contain bg-right bg-no-repeat space-y-4 p-6 h-64">
            <span className="uppercase font-semibold text-[#00306e] tracking-wide">
              Start Your Journey Today
            </span>
            <p className="font-bold w-1/2 text-[#00306e] text-2xl leading-tight">
              Become an Instructor & Share Your Expertise
            </p>
            <Button className="mt-4 bg-[#e86034] text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-orange-500">
              <Link href={"/"}>Learn More</Link>
            </Button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full bg-orange-50 rounded-lg shadow-md overflow-hidden">
          <div className="flex  flex-col justify-center items-start bg-[url('/footer-2.webp')] bg-contain bg-right bg-no-repeat space-y-4  p-6 h-64">
            <span className="uppercase font-semibold text-[#00306e] tracking-wide">
              Unlock Your Potential
            </span>
            <p className="font-bold w-1/2 text-[#00306e] text-2xl leading-tight">
              Enhance Your Skills & Stay Ahead
            </p>
            <Button className="mt-4 bg-[#e86034] text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-orange-500">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="space-y-4">
              <Image
                src="/logo-footer.svg"
                alt="logo-footer"
                height={100}
                width={100}
                className="mb-2"
              />
              <p className="text-lg text-gray-400 max-w-sm">
                A Bridge Between You & Medical Education in Kyrgyzstan. Your
                trusted partner for international medical education.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.title}
                      href={social.href}
                      className="text-gray-400 hover:text-white "
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2">
              {/* Quick Links */}
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold">Quick Links</span>
                  <Separator className="w-1/2" />
                </div>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 relative group inline-block"
                      >
                        <span className="text-base">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Universities</span>
                    <Separator className="w-1/2" />
                  </div>
                  <ul className="space-y-2">
                    {universities1.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-all duration-300 relative group inline-block"
                        >
                          <span className="text-base">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Useful Links</span>
                    <Separator className="w-1/2" />
                  </div>
                  <ul className="space-y-2">
                    {usefulLinks.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-all duration-300 relative group inline-block"
                        >
                          <span className="text-base">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold">Get in Touch</span>
                <Separator className="w-1/3" />
              </div>
              <ul className="space-y-3">
                {contactInfo.addresses.map((address, idx) => (
                  <li key={idx}>
                    <div className="flex items-start text-gray-400 text-sm group cursor-pointer">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                      <span className="group-hover:text-white text-base transition-all duration-300 relative">
                        {address.text}
                      </span>
                    </div>
                  </li>
                ))}
                {contactInfo.phones.map((phone, idx) => (
                  <li key={idx} className="flex ">
                    <Link
                      href={phone.href}
                      className="flex  items-center text-gray-400 group relative"
                    >
                      <Phone className="h-5 w-5 mr-3 group-hover:text-white transition-colors duration-300" />
                      <span className="text-base  group-hover:text-white transition-all duration-300 relative">
                        {phone.number}
                      </span>
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href={contactInfo.email.href}
                    className="flex items-center text-gray-400 group relative"
                  >
                    <Mail className="h-5 w-5 mr-3 group-hover:text-white transition-colors duration-300" />
                    <span className="text-base group-hover:text-white transition-all duration-300 relative break-all">
                      {contactInfo.email.address}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto p-3">
        <div className="text-center flex-col lg:flex-row flex items-center justify-center gap-3 text-base ">
          <p className="]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#d93f3c]"> AfroAsian Education</span>. All
            rights reserved.
          </p>
          <p className="">
            Designed & Developed by{" "}
            <a href="https://coderxpoint.com" className=" text-[#d93f3c] ">
              CoderXpoint
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
