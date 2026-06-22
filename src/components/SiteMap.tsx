// app/site-map/page.tsx

import Link from "next/link";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
 const links = [
   { name: "Home", url: "/" },
   { name: "About", url: "/about" },
   {
     name: "Skylight Repair Hawthorne NJ",
     url: "/skylight-repair-hawthorne-nj",
   },
   {
     name: "Gutter Installation Hawthorne NJ",
     url: "/gutter-installation-hawthorne-nj",
   },
   {
     name: "Water Proofing Hawthorne NJ",
     url: "/water-proofing-hawthorne-nj",
   },
   {
     name: "Roof Repair Hawthorne NJ",
     url: "/roofing-repair-hawthorne-nj",
   },
   {
     name: "Siding Services Hawthorne NJ",
     url: "/siding-services-hawthorne-nj",
   },
   { name: "Gallery", url: "/gallery" },
   { name: "Contact", url: "/contact" },
   { name: "Blog Home", url: "/blog" },
   {
     name: "Blog - Gutter Installation Hawthorne NJ Blog",
     url: "/blog/gutter-installation-hawthorne-nj",
   },
   {
     name: "Blog - Skylight Installation Hawthorne NJ Blog",
     url: "/blog/skylight-installation-hawthorne-nj",
   },
   {
     name: "Blog - Stop Leaks Before They Start Waterproofing Hawthorne NJ",
     url: "/blog/stop-leaks-before-they-start-waterproofing-hawthorne-nj",
   },
   {
     name: "Blog - When to Repair or Replace Your Roof",
     url: "/blog/how-to-know-when-its-time-to-repair-or-replace-your-roof",
   },
   {
     name: "Blog - Hawthorne NJ Roofing Repair Experts",
     url: "/blog/hawthorne-nj-roofing-repair-experts",
   },
   {
     name: "Blog - Protect Home From Moisture Damage Hawthorne NJ",
     url: "/blog/protect-home-moisture-damage-hawthorne-nj",
   },
   {
     name: "Blog - Seasonal Roof Maintenance Tips",
     url: "/blog/seasonal-roof-maintenance-hawthorne-nj",
   },
   {
     name: "Blog - How New Siding Increases Property Value",
     url: "/blog/what-to-expect-roof-repair-service-hawthorne-nj",
   },
   {
     name: "Blog - Professional Gutter Installation NJ",
     url: "/blog/gutter-installation-hawthorne",
   },
   {
     name: "Blog - How Weather Affects Your Home’s Waterproofing Needs",
     url: "/blog/new-jersey-weather-home-waterproofing-guide",
   },
   {
     name: "Blog - 2026 Guide: Siding Installation Cost in Hawthorne, NJ?",
     url: "/blog/siding-installation-cost-hawthorne-nj",
   },
   {
     name: "Blog - Roofing Contractor Services in Clifton, NJ",
     url: "/roofing-contractor-clifton-nj",
   },
   {
     name: "Blog - Roof Repair Services in Fair Lawn, NJ",
     url: "/roofing-repair-fair-lawn-nj",
   },
   {
     name: "Blog - Roof Repair Services in Paramus, NJ",
     url: "/roofing-repair-paramus-nj",
   },
   {
     name: "Blog - Roof Repair Services in Ridgewood, NJ",
     url: "/roofing-repair-ridgewood-nj",
   },
   { 
    name: "Site Map", 
    url: "/site-map"
   },
 ];


  return (
    <div className="max-w-[900px] mx-auto px-6 pt-32 md:pt-12 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
        Sitemap
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">
        Pages
      </h2>

      <ul className="space-y-4">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="text-gray-800 hover:underline flex items-center text-lg"
            >
              <FaLink className="mr-3 text-gray-800" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
