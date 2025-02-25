import React from "react";

interface MapComponentProps {
  src?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function MapComponent({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.12521508107!2d77.36699700000001!3d28.612116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a2392ee36f%3A0xc5272021dd33764e!2sAfroasian%20Education!5e1!3m2!1sen!2sin!4v1740344713631!5m2!1sen!2sin",
  width = "100%",
  height = "450",
  className = "border-0 w-full",
}: MapComponentProps) {
  return (
    <div className="w-full mb-20 max-w-6xl mx-auto justify-center items-center shadow-lg rounded-lg overflow-hidden">
      <iframe
        src={src}
        width={width}
        height={height}
        className={className}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
