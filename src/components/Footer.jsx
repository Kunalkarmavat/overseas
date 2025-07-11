import React from "react";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" border-t bg-gray-900 py-12 sm:py-20 sm:px-6 px-8 text-gray-700">
      <div className="container mx-auto text-gray-500   grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-purple-600 p-2 rounded">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-darkPurple">SS Overseas</span>
          </div>
          <p className="text-sm text-gray-500">
            Empowering students to pursue global education with expert guidance and support.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2 text-darkPurple">Our Services</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#">Profile Evaluation</a></li>
            <li><a href="#">University Selection</a></li>
            <li><a href="#">Visa Documentation</a></li>
            <li><a href="#">Loan & Scholarships</a></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-semibold mb-2 text-darkPurple">Top Destinations</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#">USA</a></li>
            <li><a href="#">UK</a></li>
            <li><a href="#">Canada</a></li>
            <li><a href="#">Australia</a></li>
            <li><a href="#">Germany</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-darkPurple">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: support@eduglobe.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Working Hours: 10 AM – 6 PM (Mon–Sat)</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} SS Overseas All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
