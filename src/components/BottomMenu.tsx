import React from 'react'
// If you're using Lucide icons
import { Phone, Mail, MapPin } from 'lucide-react'


export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#e07b3b] text-white flex justify-around items-center py-2 shadow-md md:hidden z-50">
  {/* Phone */}
  <a href="tel:+19732070689" className="flex flex-col items-center text-xs">
    <Phone className="w-6 h-6 text-[#36454f]" />
    <span className="mt-1 text-white">Contact</span>
  </a>

  {/* Email */}
  <a href="mailto:nickcontractorllc@gmail.com" className="flex flex-col items-center text-xs">
    <Mail className="w-6 h-6 text-[#36454f]" />
    <span className="mt-1 text-white">Email</span>
  </a>

  {/* Location */}
  <a
    href="https://www.google.com/maps?q=525+Lafayette+Ave,+Hawthorne,+NJ+07506"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-xs"
  >
    <MapPin className="w-6 h-6 text-[#36454f]" />
    <span className="mt-1 text-white">Location</span>
  </a>
</div>

  )
}
