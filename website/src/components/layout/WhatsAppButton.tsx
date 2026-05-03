"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "923197081824";
  const message = encodeURIComponent(
    "Hi 4F Studio! I'm interested in discussing a software project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 whatsapp-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
