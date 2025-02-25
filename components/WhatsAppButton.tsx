import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+919818709514"
      className=" bottom-4 fixed right-4 z-50  text-white bg-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="h-10 w-10" />
    </a>
  );
};

export default WhatsAppButton;
