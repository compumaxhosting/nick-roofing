// app/site-map/page.tsx

import Link from "next/link";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
 const links = [
   { name: "Home", url: "https://www.nickroofing.com/" },
   { name: "About", url: "https://www.nickroofing.com/about" },
   {
     name: "Skylight Repair Hawthorne NJ",
     url: "https://www.nickroofing.com/skylight-repair-hawthorne-nj",
   },
   {
     name: "Gutter Installation Hawthorne NJ",
     url: "https://www.nickroofing.com/gutter-installation-hawthorne-nj",
   },
   {
     name: "Water Proofing Hawthorne NJ",
     url: "https://www.nickroofing.com/water-proofing-hawthorne-nj",
   },
   {
     name: "Roof Repair Hawthorne NJ",
     url: "https://www.nickroofing.com/roof-repair-hawthorne-nj",
   },
   {
     name: "Siding Services Hawthorne NJ",
     url: "https://www.nickroofing.com/siding-services-hawthorne-nj",
   },
   { name: "Gallery", url: "https://www.nickroofing.com/gallery" },
   { name: "Contact", url: "https://www.nickroofing.com/contact" },
   { name: "Blog Home", url: "https://www.nickroofing.com/blog" },
   {
     name: "Blog - Gutter Installation Hawthorne NJ Blog",
     url: "https://www.nickroofing.com/blog/gutter-installation-hawthorne-nj",
   },
   {
     name: "Blog - Skylight Installation Hawthorne NJ Blog",
     url: "https://www.nickroofing.com/blog/skylight-installation-hawthorne-nj",
   },
   {
     name: "Blog - Stop Leaks Before They Start Waterproofing Hawthorne NJ",
     url: "https://www.nickroofing.com/blog/stop-leaks-before-they-start-waterproofing-hawthorne-nj",
   },
   {
     name: "Blog - When to Repair or Replace Your Roof",
     url: "https://www.nickroofing.com/blog/how-to-know-when-its-time-to-repair-or-replace-your-roof",
   },
   {
     name: "Blog - Hawthorne NJ Roofing Repair Experts",
     url: "https://www.nickroofing.com/blog/hawthorne-nj-roofing-repair-experts",
   },
   {
     name: "Blog - Protect Home From Moisture Damage Hawthorne NJ",
     url: "https://www.nickroofing.com/blog/protect-home-moisture-damage-hawthorne-nj",
   },
   {
     name: "Blog - Seasonal Roof Maintenance Tips",
     url: "https://www.nickroofing.com/blog/seasonal-roof-maintenance-hawthorne-nj",
   },
   {
     name: "Blog - Seasonal Roof Maintenance Tips",
     url: "https://www.nickroofing.com/blog/what-to-expect-roof-repair-service-hawthorne-nj",
   },
   { name: "Site Map", url: "https://www.nickroofing.com/site-map" },
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
