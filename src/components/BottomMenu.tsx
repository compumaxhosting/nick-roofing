import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#e07b3b] text-white flex justify-around items-center py-3 shadow-md md:hidden z-50">
      {/* Phone */}
      <a 
        href="tel:+19732070689" 
        className="flex flex-col items-center text-xs transition-transform hover:scale-105"
      >
        <FaPhoneAlt className="w-6 h-6 text-[#36454f] drop-shadow-md" />
        <span className="mt-1 text-white">Contact</span>
      </a>

      {/* Email */}
      <a 
        href="mailto:nickcontractorllc@gmail.com" 
        className="flex flex-col items-center text-xs transition-transform hover:scale-105"
      >
        <FaEnvelope className="w-6 h-6 text-[#36454f] drop-shadow-md" />
        <span className="mt-1 text-white">Email</span>
      </a>

      {/* Location */}
      <a
        href="https://www.google.com/maps?q=525+Lafayette+Ave,+Hawthorne,+NJ+07506"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-xs transition-transform hover:scale-105"
      >
        <FaMapMarkerAlt className="w-6 h-6 text-[#36454f] drop-shadow-md" />
        <span className="mt-1 text-white">Location</span>
      </a>
    </div>
  )
}