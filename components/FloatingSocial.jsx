"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a
        href="https://www.facebook.com/61555933678022/videos/dr-aditi-patil-a-renowned-dermatologist-discusses-amyloidosisa-common-skin-condi/1354461405571989/?_rdr"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/dr_aditipatil/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://wa.me/918799505624"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}