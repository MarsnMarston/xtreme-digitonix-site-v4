"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Xtreme Digitonix. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61557029914651"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/xtremedigitonix?igsh=M3pzNGM0Mnd0NDRr&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
